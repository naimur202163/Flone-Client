import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Common/Cart/Cart";
import Checkout from "./components/Common/Checkout/Checkout";
import Compare from "./components/Common/Compare/Compare";
import WhiteList from "./components/Common/WhiteList/WhiteList";
import Blog from "./pages/Blog";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./shared/Footer/Footer";
import Navigation from "./shared/Navigation/Navigation";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="collection" element={<Collection />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          {/* common Routes */}
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="whiteList" element={<WhiteList />} />
          <Route path="compare" element={<Compare />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
