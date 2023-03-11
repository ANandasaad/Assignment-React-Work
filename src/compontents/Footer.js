import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () => {
  const { user } = useContext(UserContext);
  
  return (
    <div>
      <h1 className="m-8 p-2">
        This web page created by {user.name}-{user.email}
      </h1>
   
    </div>
  );
};

export default Footer;
