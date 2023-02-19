import { useEffect, useState } from "react";
import { resturantList } from "../Constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, allrestaurnts) {
  return allrestaurnts.filter((restaurant) =>
    restaurant?.data?.name?.includes(searchText)
  );
}

const Body = () => {
  // let searchText = "KFC";

  const [searchText, setSearch] = useState(); // useState returns the array and its function
  const [restaurants, setRestaurnats] = useState([]); // for filtering the data...
  const [allrestaurnts, setAllRestaurnats] = useState([]); // for storing the orginal data of resturant...
  console.log("render");

  useEffect(() => {
    console.log("use Effect");
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.756576426319075&lng=76.63745194673538&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setAllRestaurnats(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurnats(json?.data?.cards[2]?.data?.data?.cards);
  }
  // Conditional Rendering
  if (!allrestaurnts) return null;

  if (restaurants?.length === 0) return <h1>Restaurant Not Found !!</h1>;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allrestaurnts);
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
