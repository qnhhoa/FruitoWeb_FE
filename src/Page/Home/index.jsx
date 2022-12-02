import React, { useEffect, useState } from 'react'
import { getBestSeller } from "../../api/ApiResult"
import Anhdep from '../../components/AnhDep'
import BeautyClub from '../../components/BeautyClub'
import BestSeller from '../../components/BestSeller'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductSlider from '../../components/ProductSlider'
import Slider from '../../components/Slider'
import Viewport from '../../components/Viewport'


    const List_Img = [
        { 
          id: "1",
          img: "https://imagizer.imageshack.com/img923/2822/4wdnKk.jpg",
          subtitle: "Pure, Natural Ingredients",
          title: "Relax and unwick" 
        },
        { 
          id: "2",
          img: "https://imagizer.imageshack.com/img922/6521/8dw2St.jpg",
          subtitle: "Free shipping on youth to the people",
          title: "Discover new arrivals"  
        },
        { 
          id: "3",
          img: "https://imagizer.imageshack.com/img923/8164/4hM1XL.jpg",
          subtitle: "Sale up to 50%",
          title: "Black Friday" 
        },
        
    ];
    const Img_Viewport = "https://imagizer.imageshack.com/img923/2061/lrgoQz.png"; //img viewport
    
    const beautyClubBlog = [
      {
        "id": 1,
        "srcimg": "https://imagizer.imageshack.com/img922/1456/VU3d8j.jpg",
        "name": "CATER 4 YOU — HOW TO STORE DRIED FOOD LONG TERM", 
        "date": "SEPTEMBER 12, 2022"
      },
      {
        "id": 2,
        "srcimg": "https://imagizer.imageshack.com/img923/5870/zl0I6W.jpg",
        "name": "WHY SHOULD YOU CHOOSE DRIED FOOD", 
        "date": "MAY 29, 2022"
      },
      {
        "id": 3,
        "srcimg": "https://imagizer.imageshack.com/img922/1456/VU3d8j.jpg",
        "name": "BENEFITS OF DRIED FRUITS IN YOUR DAILY DIET", 
        "date": "APRIL 19, 2022"
      },
    ];

function Home() {
  const [listBestSeller,setListBestSeller] =useState([])
  useEffect( () => {
    async function Fetch(){
      const res = await getBestSeller();
      if(res)
      setListBestSeller(res)
  }
  Fetch();
 
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className="Home">
            <Header/>
            <div className="body_Page">
                 <Slider List_Img={List_Img}/>
                 <div className="latest">
                     <h2 className="title_pro ">LATEST PRODUCT</h2>
                        <ProductSlider />
                 </div>

                 <Viewport Img_Viewport={Img_Viewport}/>
                 
                 <h2 className="title_pro">BEST SELLER</h2>
                 <BestSeller Listproduct={listBestSeller}/>
                 <Anhdep/>
                 <h2 className="title_pro">FOOD BLOG</h2>
                 <BeautyClub beautyClubBlog={beautyClubBlog}/>
            </div>
            
           <Footer/>
        </div>
    )
}

export default Home
