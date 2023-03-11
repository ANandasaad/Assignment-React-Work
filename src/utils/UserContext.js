import { createContext } from "react";

 const UserContext = createContext({
    user:{  name: "Anand",
    email: "anandkushwaha70@gmail.com",},

});

UserContext.displayName="UserContext";

export default UserContext;




