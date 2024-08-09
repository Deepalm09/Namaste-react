import React from "react";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const[searchText , setSearchText] = useState("");
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };

  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search-container">
          <input name="search" id="search"
            type="textbox"
            className="border border-solid border-black px-4 m-4"
            placeholder="search something..."
            onChange={ (e)=>{ 
                setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button className ='px-4  py-1 m-4 bg-green-100' onClick={()=>{
             console.log("clicked")
            const filteredlistOfRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredlistOfRestaurant);
          }}>Search</button>
        </div>
        <div>
        <button
          className="filter-btn bg-gray-200 rounded"
          onClick={() => {
            console.log("clicked");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap  items-stretch justify-around">
        {filteredRestaurant.map((restaurant) => ( 
    <Link className="block bg-white overflow-hidden h-full " key= {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
      {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
