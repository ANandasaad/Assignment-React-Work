import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../Constant";

const useRestaurant=(resId)=>{

    const [resturantMenu, setRestaurnatsMenu] = useState(null);

  useEffect(() => {
    // console.log(params);
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      FETCH_MENU_URL+resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurnatsMenu(json.data);
  }
  return resturantMenu;

}
export default useRestaurant;