import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const[searchText , setSearchText] = useState("");
  const [filteredRestaurant , setFilteredRestaurant] = useState([]);
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
      <div className="filter">
        <div className="search-container">
          <input
            type="textbox"
            className="search-box"
            placeholder="search something..."
            onChange={ (e)=>{ 
                setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button onClick={()=>{
             console.log("clicked")
            const filteredlistOfRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredlistOfRestaurant);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
    <Link className="res-card" key= {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>  <RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
