/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { getLatest } from "../../api/ApiResult";
import Product from "../Product/index";
import "./styles.scss";
function ProductSlider() {
  const [listLatest,setListLatest] =useState([])
  const [count, SetCount] = useState(1);
  const [flag, SetFlag] = useState(true);
      //react-hooks/exhaustive-deps
  useEffect( () => {
    async function Fetch(){
      const res = await getLatest();
      if(res)
      setListLatest(res.slice(0,10))
  }
  Fetch();
  },[])
  const handle_Slide = (flag) => {
    var temp;
    if (flag) {
      temp = count + 1;
    } else {
      temp = count - 1;
    }

    if (temp < 0) {
      temp = 6 / 2 - 1;
    }
    if (temp > 4) {
      temp = 0;
    }
    document.querySelector(".Products").style.transform = `translateX(-${
      temp * 15
    }%)`;
    SetCount(temp);
    SetFlag(true);
  };
  useEffect(() => {
    if (flag) {
      var time = setInterval(() => {
        handle_Slide(flag);
      }, 5000);
    }
    return () => clearInterval(time);
  }, [count]);
  return (
    <>
      <div className="ProductSlider" id ="product-sliders">
        <div
          onClick={() => {
            SetFlag(true);
            handle_Slide(true);
          }}
          className="btnh btn_next"
        >
          <i className="fas fa-chevron-circle-right"></i>
        </div>
        <div
          onClick={() => {
            SetFlag(false);
            handle_Slide(false);
          }}
          className="btnh btn_prev"
        >
          <i className="fas fa-chevron-circle-left"></i>
        </div>
        <div
          className="Products"
          style={{ width: listLatest.length * 20 + "%" }}
        >
          {listLatest?.slice(0,8).map((product, index) => (
            <Product Product={product} key={index} />
          ))}
        </div>
      </div>
      <p className="View">
        <a href="#">View collect</a>
      </p>
    </>
  );
}

export default ProductSlider;
