import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        costForTwo,
        cuisines
    } = resData?.info
    return (
        <div className=" p-4 m-4 w-[250px] rounded-2xl bg-gray-100 hover:bg-gray-200">
         <img className="rounded-xl" src={CDN_URL +cloudinaryImageId} alt="res-logo"/>
        <h2 className="font-bold py-4 text-lg" >{name} </h2>
        <h3>{ avgRating}</h3>
        <h3>{resData.info.sla.slaString}</h3>
         <h3>{costForTwo}</h3>
         <h3>{cuisines.join(", ")}</h3>
        </div>
    )

}
export default RestaurantCard;