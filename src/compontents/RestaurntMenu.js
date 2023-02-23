import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //How to dynamic url
  const params = useParams();
  const {resId} =params;

  const [resturantMenu, setRestaurnatsMenu] = useState();

  useEffect(() => {
    // console.log(params);
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.69819739999999&lng=77.41712369999999&menuId="+resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurnatsMenu(json.data);
  }
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
