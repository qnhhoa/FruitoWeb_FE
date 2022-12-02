import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductId } from "../../api/ApiResult";
import { Couter } from "../../Context/counter";
import Evaluation from "../Evaluation";
import TextRating from "../TestRating";
import "./styles.scss";

function Detail() {

  const [productDetail, setProductDetail] = useState();
  const { setCountPro } = useContext(Couter);
  const { id } = useParams();
      //react-hooks/exhaustive-deps
  useEffect( () => {
    async function Fetch(){
      const product = await getProductId(id); //day la data tra ve
      setProductDetail({ ...product, Photo: JSON.parse(product.Photo) }); // cai dat du kieu vao productID
  }
  Fetch();
 
  }, [id]);

  const buy = () => {
    const Product = {
      ...productDetail,
      SL: document.getElementById("spnumber").value*1,
    };
    if(localStorage.getItem("ListProduct")){
      var product = JSON.parse(localStorage.getItem("ListProduct"));
      var flag = false ;
      product = product.map(function (item) {
        if (item.SpID === Product.SpID) {
          item = { ...item, SL: item.SL * 1 + Product.SL };
          flag = true;
          return item;
        }
        return item;
      });
      if (!flag) {
        localStorage.setItem(
          "ListProduct",
          JSON.stringify([...product, Product])
        );
        setCountPro(JSON.parse(localStorage.getItem("ListProduct")).length);
      }
    } else {
      localStorage.setItem("ListProduct", JSON.stringify([Product]));
      setCountPro(JSON.parse(localStorage.getItem("ListProduct")).length);
    }

  }

  const addToCart = () => {
    const Product = {
      ...productDetail,
      SL: document.getElementById("spnumber").value * 1,
    };
    if (JSON.parse(localStorage.getItem("ListProduct"))) {
      var product = JSON.parse(localStorage.getItem("ListProduct"));
      var flag = false;

      product = product.map(function (item) {
        if (item.SpID === Product.SpID) {
          item = { ...item, SL: item.SL * 1 + Product.SL };
          flag = true;
          return item;
        }
        return item;
      });
      console.log(flag);
      if (!flag) {
        localStorage.setItem(
          "ListProduct",
          JSON.stringify([...product, Product])
        );
        setCountPro(JSON.parse(localStorage.getItem("ListProduct")).length);
      } else {
        localStorage.setItem("ListProduct", JSON.stringify([...product]));
      }
    } else {
      localStorage.setItem("ListProduct", JSON.stringify([Product]));
      setCountPro(JSON.parse(localStorage.getItem("ListProduct")).length);
    }
  };
  
 const handleImg = ()=> {
  const bigImg = document.querySelector('.image-main img')
  const smallImg = document.querySelectorAll('.image-sub img')
  smallImg.forEach (function (imgItem,X){
    console.log(imgItem.src)
    var temp = bigImg.src
    bigImg.src = imgItem.src
    imgItem.src = temp
   })
 }
  return (
    <div className="Detail">
      <div className="product">
        <div className="product-top">
          <p>
            <Link
              className="Home"
              to="../../"
              style={{ textDecoration: "none", color: "#8e8686" }}
            >
              {" "}
              Home{" "}
            </Link>
          </p>
          <span> &rarr; </span>
          <p>
            <Link
              className="SkinCare"
              to="../../skincare"
              style={{ textDecoration: "none", color: "#8e8686" }}
            >
              {" "}
              SkinCare{" "}
            </Link>
          </p>
          <span> &rarr; </span>
          <p style={{ color: "#8e8686" }}>{productDetail?.TenSP}</p>
        </div>
        <div className="product-content">
          <div className="product-content-left">

            <div className="image-main" >
              <img src={`${productDetail?.Photo?.PhotoMain}`} alt="" />
            </div>
            <div className="image-sub" >
              {productDetail?.Photo?.PhotoList?.map((item) => (
                 <img src={`${item.photo}`} alt="" onClick={handleImg} />
                
              ))}
             
            </div>
          </div>
          <div className="product-content-right">
            <div className="product-brand">
              <p>
                <b>Brand: {productDetail?.Brand}</b>
              </p>
            </div>
            <div className="product-name">
              <h3>{productDetail?.TenSP}</h3>
            </div>
            <div className="product-evaluation">
              <TextRating id={id}/>
            </div>
            <div className="product-des">
              <p>{productDetail?.MoTa}</p>
            </div>
            <div className="product-rest">
              <div className="product-price">
                <h2>{productDetail?.GiaSP}₫</h2>
                <p>Free shipping with $50+</p>
              </div>
              <div className="product-number">
                <select name="spnumber" id="spnumber">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="product-state">
                {
                  !productDetail?.SL && <b>Out Of Stocking</b>
                }
                
              </div>
            </div>

            <div className="btn-addtocart">
              <Link
                className="Cart"
                to="../../Cart"
                style={{ textDecoration: "none", color: "#ffff" }}
              >
                <button onClick={buy}>
                  <i className="fad fa-money-bill-alt"></i>
                  <span>BUY</span>
                </button>
              </Link>
              <button onClick={addToCart}>
                <i className="fas fa-shopping-cart"></i>
                <span>ADD TO CART</span>
              </button>
            </div>
            <div className="hr-point">
              <hr />
              <br />
              <p>BUY THIS AND EARN 75 POINTS</p>
              <br />
              <hr />
            </div>
            <div className="product-hotline">
              <p className="fas fa-phone-volume"></p>
              <h4>Hotline: </h4>
              <Link
                className="Home"
                to="../../contact"
                style={{ textDecoration: "none" }}
              >
                {" "}
                0961. 710. 409{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Evaluation">
        <Evaluation Id={id} productDetail={productDetail} />
      </div>
    </div>
  );
}

export default Detail;
