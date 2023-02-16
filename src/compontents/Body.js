import { useState } from "react";
import { resturantList } from "../Constant";
import RestaurantCard from "./RestaurantCard";



const Body = () => {
  // let searchText = "KFC";

  const [searchText,setSearch]=useState();// useState returns the array and its function

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e)=>{
            //e.taeget value==what ever you in input..
            setSearch(e.target.value);
          }
          
          }
        />
        <button className="search-button">search -{searchText}</button>
      </div>
      <div className="resturant-list">
        {resturantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
