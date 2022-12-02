import React, { useEffect } from "react";
import Footer from '../../components/Footer';
import Header from "../../components/Header";
import Detail from "../../components/Detail";


function DetailProduct() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <div className="DetailProduct">
        <Header />
        <div className="body_Page">
            <Detail /> 
        </div>
        <div className = "footer_Page">
            <Footer />
        </div>
      </div>
    );
  }
  
  export default DetailProduct;