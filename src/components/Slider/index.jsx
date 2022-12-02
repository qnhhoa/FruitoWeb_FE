import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Slider(props) {
  const {List_Img}=props;
  const [count, setCount] = useState(1);
  useEffect(() => {
    const dot_Active = document.querySelector(".dot.active");
    const img_slider_Active = document.querySelector(".img_slider.active");
    const sliders = document.querySelector(".sliders");
    const Img_sliders = document.querySelectorAll(".img_slider");
    const dots = document.querySelectorAll(".dot");
    const img_sliders = document.querySelectorAll(".img_slider");
    var flag = true;
    //event click in dot
    dots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        const dot_Active = document.querySelector(".dot.active");
        if (dot_Active !== undefined) {
          dot_Active.classList.remove("active");
        }
        dot.classList.add("active");
        setCount(index);
        sliders.style.transform = `translateX(-${
          (index * 100) / Img_sliders.length
        }%)`;
      });
    });
    //set active 
    const interval = setInterval(() => {
      if (flag) {
        //check dot active
        if (dot_Active !== undefined) {
          dot_Active.classList.remove("active");
        }
        //check content slider active
        if (img_slider_Active) {
          img_slider_Active.classList.remove("active");
        }
        //transform img in slider
        if (count === Img_sliders.length - 1) {
          setCount(0);
        } else {
          setCount(count + 1);
        }
        sliders.style.transform = `translateX(-${
          (count* 100) / Img_sliders.length
        }%)`;
        //add class "active" to dot
        dots[count].classList.add("active");
        //add class "active" to img_slider
        img_sliders[count].classList.add("active");
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <>
      <div className="Slider">
        <div className="sliders" style={{ width: List_Img.length * 100 + "%" }}>
          {List_Img.map((item, index) => (
            <div className={`img_slider ${index === 0 ? "active" : ""}`} key={index} id={index}>
              <img src={item.img} alt=""/>
              <div className={`contentSlider`}>
                <p>{item.subtitle}</p>
                <h3>{item.title}</h3>
                <Link to="/allproduct" >Shop now</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {List_Img.map((item, index) => (
            <div
              className={`dot ${index === 0 ? "active" : ""}`}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      <div className="content_slider">
        <li>
          <p className="title">Healthy Snacks</p>
          <p className="description">Improve your daily mood</p>
        </li>
        <li>
          {" "}
          <p className="title">Dried fruits</p>
          <p className="description">Release yourself from stress</p>
        </li>
        <li>
          {" "}
          <p className="title">Yummy Snacks</p>
          <p className="description">Power you through the day</p>
        </li>
      </div>
    </>
  );
}

export default Slider;
