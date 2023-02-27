import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //How to dynamic url
  const params = useParams();
  const {resId} =params;

  

  const resturantMenu=useRestaurant(resId);

  if (!resturantMenu) {
    return <Shimmer />;
  }

  return (
    <div className="resturant-menu">
      <div>
        <h1>Restaurant:{resId}</h1>
        <h1>{resturantMenu?.name}</h1>
        <img src={IMG_CDN_URL + resturantMenu?.cloudinaryImageId} />
       <h2>{resturantMenu?.id}</h2>
        <h3>{resturantMenu?.city}</h3>
        <h3>{resturantMenu?.costForTwoMsg}</h3>
        <h3>{resturantMenu?.avgRating} Stars</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {" "}
          {Object.values(resturantMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
