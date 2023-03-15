
import { render } from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";

test("Logo Should load on rendering header",()=>{
    //load Header
  const header = render(
 <StaticRouter>
 <Provider store={store}>
<Header/>
  </Provider>
 </StaticRouter>   
 
  )
    //Check if Logo is loaded



   const logo=header.getAllByTestId("logo");
   console.log(logo[0]);
   expect(logo[0].src).toBe("https://i.pinimg.com/originals/28/65/07/28650724b95899bd15c7266906a738fa.png");


});

test("Cart contains Zero products",()=>{
    //load Header
  const header = render(
 <StaticRouter>
 <Provider store={store}>
<Header/>
  </Provider>
 </StaticRouter>   
 
  )
    //Check if Logo is loaded




   const cart=header.getByTestId("cart1");
   console.log(cart);
   expect(cart.innerHTML).toBe(" Cart -0 items");


});


