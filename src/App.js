import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./compontents/Header";
import Body from "./compontents/Body";
import Footer from "./compontents/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./compontents/About";
import Error from "./compontents/Error";
import Contact from "./compontents/Contact";
import RestaurantMenu from "./compontents/RestaurntMenu";
import ProfileClass from "./compontents/ProfileClass";
import Shimmer from "./compontents/Shimmer";
import UserContext from "./utils/UserContext";
// import Instamart from "./compontents/Instamart";

const Instamart = lazy(() => import("./compontents/Instamart.js"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Aditya Kuswaha",
    email: "anandkushwaha80@gmail.com",
  });
 
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      {/* {outlet}*/}
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
//props- properties
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
