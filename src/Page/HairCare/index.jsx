import React, { useEffect } from "react";
import Anhdep from "./../../components/AnhDep/index";
import BestSeller from "./../../components/BestSeller/index";
import Header from "./../../components/Header/index";
import Slider from "./../../components/Slider/index";
import Footer from "./../../components/Footer/index";
import { useState } from "react";
import { getHair } from "../../api/ApiResult";

const List_Img = [
  {    img: "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040"},
  {
    img: "https://images.pexels.com/photos/7262483/pexels-photo-7262483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
  {
    img: "https://images.pexels.com/photos/7262990/pexels-photo-7262990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },

];
function HairCare() {
  const [listHair,setListHair] =useState([])
  useEffect( () => {
    async function Fetch(){
      const res= await getHair();
    if(res)
    setListHair(res)
  }
  Fetch();
    
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="HairCare">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">HAIR CARE</h2>
        <BestSeller Listproduct={listHair} />
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default HairCare;
