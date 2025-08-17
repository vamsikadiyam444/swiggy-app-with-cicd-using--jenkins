import { useState } from "react";
import ItemList from "./compnents/ItemList";

const RestaurantCategory = ({data ,showItems , setShowIndex}) => {

    const handleClick = () => {
        // setSetUp(!setUp);
        setShowIndex();

    }
    return(
        <div className="p-4 my-4 mx-auto bg-gray-50 w-6/12 shadow-lg">
            {/* Header */}
            <div className=" flex justify-between cursor-pointer " onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>

                </div>
            {/* Accordian */}
            {showItems && <ItemList items={data.itemCards}/>} 
        </div>
    )
}
export default RestaurantCategory;