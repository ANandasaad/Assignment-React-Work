import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./compontents/Header";
import Body from "./compontents/Body";
import Footer from "./compontents/Footer";
// Config Driven UI
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
//props- properties
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
