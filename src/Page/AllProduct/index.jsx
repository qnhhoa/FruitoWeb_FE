import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { getAllProduct } from "../../api/ApiResult";
import { Couter } from "../../Context/counter";
import Anhdep from "./../../components/AnhDep/index";
import BestSeller from "./../../components/BestSeller/index";
import Footer from "./../../components/Footer/index";
import Header from "./../../components/Header/index";

function AllProduct() {
  const [listAllProduct, setListAllProduct] = useState([]);
  const {dataSearch}=useContext(Couter);
  useEffect(() => {
    const fectchData = async () => {
      const res = await getAllProduct();
      setListAllProduct(res);
    };
    fectchData();
    window.scrollTo(0, 0);
    return () => {
      localStorage.clear("item");
    };
  }, []);
  useEffect( () => {
    
    if(dataSearch)
    setListAllProduct(dataSearch)
  },[dataSearch])

  return (
    <div className="AllProduct">
      <Header  />
      <div className="body_Page">
        {/* <Slider List_Img={List_Img} /> */}
        <h2 className="title_pro">ALL PRODUCT</h2>
        <BestSeller Listproduct={listAllProduct} />
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default AllProduct;
