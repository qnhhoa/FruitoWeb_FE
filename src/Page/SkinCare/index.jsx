import React, { useEffect } from "react";
import BestSeller from "../../components/BestSeller";
import Header from "./../../components/Header/index";
import Slider from "./../../components/Slider/index";
import Anhdep from "./../../components/AnhDep/index";
import Footer from "./../../components/Footer/index";
import { useState } from "react";
import { getSkin } from "../../api/ApiResult";

const List_Img = [
  {
    img: "https://media.allure.com/photos/60512685fdf3d7fd0e2ef100/2:1/w_3500,h_1750,c_limit/asian-owned%20skin%20care%20lede.jpg",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0059/0056/6597/products/photo-id-6571435229253-attractive-woman-kissing-a-natural-skincare-product.jpg?v=1618162858",
  },
  {
    img: "https://images.pexels.com/photos/5938255/pexels-photo-5938255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
];
function SkinCare() {
  const [listSkin,setListSkin] =useState([])
  useEffect( () => {
    async function Fetch(){
      const res= await getSkin();
      setListSkin(res)
  }
  Fetch();
 
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="SkinCare">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">SKIN CARE</h2>
        <BestSeller Listproduct={listSkin} />
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default SkinCare;
