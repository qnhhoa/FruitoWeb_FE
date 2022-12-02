import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import Slider from './../../components/Slider/index';
import BestSeller from './../../components/BestSeller/index';
import Footer from "./../../components/Footer/index";
import { useState } from "react";
import { getMakeUp } from "../../api/ApiResult";

const List_Img = [
  {    img: "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1050"},
  {
    img: "https://images.pexels.com/photos/6393/red-woman-girl-brown.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    img: "https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1040",
  },
];
function Makeup() {
  const [listMakeup,setListMakeup] =useState([])
  useEffect( () => {
    async function Fetch(){
      const res = await getMakeUp();
    if(res)
    setListMakeup(res)
  }
  Fetch();
 
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Makeup">
      <Header />
      <div className="body_Page">
        <Slider List_Img={List_Img} />
        <h2 className="title_pro">MAKE UP </h2>
        <BestSeller Listproduct={listMakeup} />
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default Makeup;
