import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
const [showItems, setShowItems] = useState(false);

  const handleClick =() =>{
    setShowItems(!showItems);
  };
  return (
    <div className="w-6/12 mx-auto my-6 shadow-md ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="px-4 font-bold">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
