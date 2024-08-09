import React from "react";
import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () =>
    {
        const [resInfo , setResInfo] = useState(null);
        const {resId} = useParams();
        

        const data = useEffect(()=>{
        fetchMenu();
        },[]);
        const fetchMenu = async()=>{
            const data = await fetch(MENU_API+ resId);
            const json = await data.json();
            
            setResInfo(json.data);
        }
        if (resInfo === null) return <Shimmer />;
        const {name , cuisines , costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
        const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        
        const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
 

       
        return  (
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
                {
                    categories.map((category)=>(
                         <RestaurantCategory  key={category?.card?.card.title} data={category?.card?.card}/>
                    )
                    )
                }
                
                {/* <h2>Menu</h2>
                <ul>
                    {itemCards.map((item)=>(
                        <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>

                    ))}
                </ul>
               */}

            </div>
        )
    }
    export default RestaurantMenu;