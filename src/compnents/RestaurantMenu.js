
import Shimmer from "../../Shimmer";
import { Form, useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    
        const[showIndex , setShowIndex] = useState(null);
    


    if (resInfo === null ){
        return <Shimmer />
    }

    const {name,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;

   const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card;
//    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories = 
   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
    c?.card?.card?.["@type"] === 
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

);

   

    
    return(
        <div className="text-center p-4 m-2">
            <h1 className="p-2 font-bold text-2xl">{name}</h1>
            <h3 className="p-2 text-lg">{cuisines.join(", ")}</h3>
            <div>
                {/* category Accordians */}
                {categories.map((category, index)=> ( 
                    <RestaurantCategory 
                    key={category?.card?.card?.categoryId} 
                     data={category?.card?.card}
                     showItems={index === showIndex ? true : false } 
                     setShowIndex={()=>setShowIndex(index)}

                      />
                    ))}
               
            </div>
            
        </div>
    )
}
export default RestaurantMenu;