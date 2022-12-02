import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import Payment from "./../../components/Payment/index";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Cart">
      <Header />
      <div className="body_Page">
        <Payment />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
