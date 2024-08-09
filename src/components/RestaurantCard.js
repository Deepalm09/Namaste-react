import React from "react";
import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { resData} = props;
    const {cloudinaryImageId, name , cuisines , avgRating , costForTwo , deliveryTime} = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[250px] h-[320px] bg-slate-200 border-b-2 rounded-md">
        <img
          className="w-[250px] h-[150px] text-center"
          alt="res-logo"
          src= {CDN_URL+
          cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4 className="break-words">{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };
export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }

}
 export default RestaurantCard