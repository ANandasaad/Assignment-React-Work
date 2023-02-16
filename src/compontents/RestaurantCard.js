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
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating} ratings</h4>
        <h5>{deliveryTime} deliveryTime MINS</h5>
        <h6>{lastMileTravelString} kms</h6>
      </div>
    );
  };

  export default RestaurantCard;