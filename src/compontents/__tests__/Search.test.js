import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import {RES_DATA} from "../../Mock/data";

global.fetch=jest.fn(()=>{
   return Promise.resolve({
        json:()=>{ return Promise.resolve(RES_DATA);},
    });
});

test("Search Input in HomePage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );


  const shimmer=body.getByTestId("shimmer");

   expect(shimmer.children.length).toBe(10);
  console.log(shimmer);



//   console.log(body);
});




test("Resturant should load on Hompage",  async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );


  await waitFor(()=>expect(body.getByTestId("btn")));


  const resList=body.getByTestId("res-list");

   expect(resList.children.length).toBe(15);
  console.log(resList);



//   console.log(body);
});



test("Search for String Food",  async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );


  await waitFor(()=>expect(body.getByTestId("btn")));

 
  const input=body.getByTestId("search-input");

  fireEvent.change(input,{target:{
    value:"food",
  },}) 

  const seaechbtn=body.getByTestId("btn");
  fireEvent.click(seaechbtn);

  const resList=body.getByTestId("res-list");

  expect(resList.children.length).toBe(1);
 console.log(resList);





//   console.log(body);
});


