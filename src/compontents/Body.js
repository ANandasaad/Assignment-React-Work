import { useEffect, useState } from "react";
import { resturantList } from "../Constant";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}

const Body = () => {
  // let searchText = "KFC";

  const [searchText, setSearch] = useState(); // useState returns the array and its function
  const [restaurants, setRestaurnats] = useState(resturantList);

  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants()
  {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.756576426319075&lng=76.63745194673538&page_type=DESKTOP_WEB_LISTING");
    const json =await data.json();
    console.log(json);
    setRestaurnats(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            //e.taeget value==what ever you in input..
            setSearch(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state -res variable
            setRestaurnats(data);
          }}
        >
          search
        </button>
      </div>
      <div className="resturant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
