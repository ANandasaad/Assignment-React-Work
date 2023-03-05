import { useState } from "react";
import Logo from "../assets/FoodHaveli.png"
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div>
      <a href="/">
        {" "}
        <img className="h-[100px] w-[100px]"
          alt="Food Haveli"
          src="https://i.pinimg.com/originals/28/65/07/28650724b95899bd15c7266906a738fa.png"
        />
        
      </a>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLogged] = useState(false);
  return (
    <div className="flex justify-between border-2 bg-pink-50 shadow-lg">
      <Title />
      <div className="nav">
        <ul className="flex flex-row p-[10px] my-[30px] space-x-4 shadow-xl">
        <li> <Link to="/">Home</Link> </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="mx-[20px]" onClick={() => setIsLogged(false)}>Logout</button>
      ) : (
        <button className="mx-[20px]" onClick={() => setIsLogged(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
