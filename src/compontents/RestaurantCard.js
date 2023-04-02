import { IMG_CDN_URL } from "../Constant";

const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    deliveryTime,
    lastMileTravelString,
    cloudinaryImageId,

  }) => {
    return (
      <div className=" h-60 my-10 box-border" >
        <div className="w-[250px] h-[280px] p-[5px]  shadow-xl mx-[15px] my-[5px] bg-pink-50 hover:bg-pink-100 ">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold">{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating} ratings</h4>
      
        </div>
       
      </div>
    );
  };

  export default RestaurantCard;