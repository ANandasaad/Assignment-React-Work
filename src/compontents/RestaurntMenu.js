import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  //How to dynamic url
  const params = useParams();
  const { resId } = params;

  const dispatch = useDispatch();

  const resturantMenu = useRestaurant(resId);

  if (!resturantMenu) {
    return <Shimmer />;
  }

  // const handleAddItem = () => {
  //   dispatch(addItem("Mango"));
  // };

  const addFoodItem=(item)=>{
    dispatch(addItem(item));

  };

  return (
    <div className="flex">
      <div>
        <h1>Restaurant:{resId}</h1>
        <h1>{resturantMenu?.name}</h1>
        <img src={IMG_CDN_URL + resturantMenu?.cloudinaryImageId} />
        {/* <h2>{resturantMenu?.id}</h2> */}
        <h3>{resturantMenu?.city}</h3>
        <h3>{resturantMenu?.costForTwoMsg}</h3>
        <h3>{resturantMenu?.avgRating} Stars</h3>
      </div>
      <div>
        {/* <button
          className="p-2 m-5 bg-green-100"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button> */}
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul>
          {" "}
          {Object.values(resturantMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}- <button className="p-1 bg-green-50" onClick={()=>addFoodItem(item)}>Add</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
