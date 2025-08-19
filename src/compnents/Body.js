import RestaurantCard from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "../../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";


const Body = () => {
const [listOfResturants, setListOfResturants] = useState([]);

const[filteredResturant,setFilteredResturant] = useState([])

const [searchText , setSearchText] = useState("");

useEffect(() => {
    fetchData();
}, [])

const fetchData = async () => {
    const data = await fetch(
"https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"  
  );
    const json = await data.json();

    console.log(json);

    setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

   const onlineStatus = useOnlineStatus();
   
    const {setUserName , loggedInUser} = useContext(UserContext);

   if(onlineStatus === false){
    return <h1>Looks like you're offline! Check Internet Connectivity</h1>
   }


 if (listOfResturants.length === 0){
        return <Shimmer />
    }


    return (
        <div className="">
           <div className="p-2 m-2 "> 
            <input type="text" className="border border-solid to-black  "  value = {searchText} onChange={(e) => {setSearchText(e.target.value)}} />
             <button className="  px-4 py-2 m-4 bg-green-100 hover:border border-solid to-black rounded-lg cursor-pointer" onClick={()=> {
                let filteredResturant = listOfResturants.filter((fit)=>
                fit.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredResturant(filteredResturant);
                 
            }}>Search</button>
            <button className=" bg-gray-100 p-2 px-6 rounded-lg cursor-pointer hover:border border-solid to-black hover:bg-gray-300" 
            onClick={() => {
                const filteredList = listOfResturants.filter( 
                     (res) =>  res.info.avgRating > 4.2
                    );
                     setListOfResturants(filteredList);
                     console.log("button clicked")
            }}
            >Top Rated Restaurants
            </button>
            <div className="flex m-4 items-center">
             <label>UseName : </label>
                <input className="p-2 border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
          
            </div>
            <div className="flex flex-wrap">
            {
                filteredResturant?.map((restaurant) => (
                    <Link key = {restaurant.info.id} to={"/resmenu/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))
            }
            </div>
        </div>
    )
}
export default Body;