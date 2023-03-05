import { useEffect, useState } from "react";
import { FETCH_DATA_URL, resturantList } from "../Constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { filterData } from "../utils/FilterData";
import useOnline from "../utils/useOnline";

const Body = () => {
  // let searchText = "KFC";

  const [searchText, setSearch] = useState(); // useState returns the array and its function
  const [restaurants, setRestaurnats] = useState([]); // for filtering the data...
  const [allrestaurnts, setAllRestaurnats] = useState([]); // for storing the orginal data of resturant...

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_DATA_URL);
    const json = await data.json();

    setAllRestaurnats(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurnats(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>is OFFline</h1>;
  }
  // Conditional Rendering
  if (!allrestaurnts) return null;
   
  // if (restaurants?.length === 0) return <h1>Restaurant Not Found !!</h1>;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="my-1  bg-pink-50 shadow-sm">
        <input
          type="text"
          className="my-1 mx-2 bg-slate-50 shadow-lg w-[200px] p-[2px] rounded"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            //e.taeget value==what ever you in input..
            setSearch(e.target.value);
          }}
        />
        <button
          className="bg-purple-900 hover:bg-purple-600 rounded-md w-[80px] shadow-lg p-[2px] text-white"
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
      <div className="flex flex-wrap justify-center">
        {restaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
        
      </div>
    </>
  );
};

export default Body;
