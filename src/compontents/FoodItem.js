import { IMG_CDN_URL } from "../Constant";

const FoodItem = ({
    name,
    description,
    cloudinaryImageId,
    price,

  }) => {
    return (
      <div className="w-54 h-52 my-12 box-border" >
        <div className="w-[250px] p-[5px]  shadow-xl mx-[15px] my-[5px] bg-pink-50 hover:bg-pink-100 ">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold">{name}</h2>
        <h3>{description}</h3>
        <h4>Rupess:{price/100}</h4>
      
        </div>
       
      </div>
    );
  };

  export default FoodItem;