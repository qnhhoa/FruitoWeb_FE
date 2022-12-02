import React from 'react';
import ViewOrderStatus from "../../components/ViewOrderStatus/index";
import Footer from "./../../components/Footer/index";
import Header from "./../../components/Header/index";


function OrderStatus() {
 

    return (
      <div className="OrderStatus" >         
        <Header />
        <div className="body_Page">
          <ViewOrderStatus />
        </div>
        <Footer /> 
      </div>
    )
}

export default OrderStatus
