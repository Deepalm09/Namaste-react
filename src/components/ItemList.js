import {CDN_URL} from "../utils/constant";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
           <div
           data-testid="foodItems"
           key={item.card.info.id}
           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
         >
           <div className="w-9/12">
             <div className="py-2">
               <span>{item.card.info.name}</span>
               <span>
                 - ₹
                 {item.card.info.price
                   ? item.card.info.price / 100
                   : item.card.info.defaultPrice / 100}
               </span>
             </div>
             <p className="text-xs">{item.card.info.description}</p>
           </div>
           <div className="w-3/12 p-4">
             <div className="absolute">
               <button
                 className="p-2 mx-14 rounded-lg bg-black text-white shadow-lg"
                
               >
                 Add +
               </button>
             </div>
             <img src={CDN_URL + item.card.info.imageId} className="w-full" />
           </div>
         </div>
      //   <div key={item.card.info.id} className="p-4 m-4  border-gray-200 border-b-2 text-left">
      //    <img src={CDN_URL + item.card.info.imageId } className="w-56"/>
      //     <div className="font-bold">
      //       <span>{item.card.info.name}</span>
      //       <span className="p-2"> - ₹ { item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice / 100}</span>
      //     </div>
      //     <p className="text-xs">{item.card.info.description}</p>
      //   </div>
      ))}
    </div>
  );
};
export default ItemList;
