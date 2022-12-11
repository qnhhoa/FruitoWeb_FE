
import Badge from "@mui/material/Badge";
import React, { useContext, useEffect, useState } from "react";
import { NavLink ,useHistory} from "react-router-dom";
import { getAllProduct } from "../../api/ApiResult";
import { Couter } from "../../Context/counter";
import Viewcart from "../Viewcart";
import "./styles.scss";

function Header() {
 
  const [check, setCheck] = useState();
  const history = useHistory();
  const [imgUser, setimgUser] = useState();
  const [valueSearch,setValueSearch] = useState('');
  const { countPro, checkUser, setCheckUser,dataSearch,setdataSearch} = useContext(Couter);
  const getValue = async (e) => {
    setValueSearch(e.target.value)
     if(!e.target.value){
      setdataSearch([]);
     }
     else{
      const listAllProduct = await getAllProduct();
      if(listAllProduct)
      // eslint-disable-next-line array-callback-return
      { const listSearch = listAllProduct.filter(function(item){
        if(item?.TenSP.toString().toLowerCase().includes(e.target.value.toLowerCase()))
        return item;
      });
      setdataSearch(listSearch);
      }}
  };

  useEffect(() => {
    setCheck(countPro);
    if (false) {
    } else {
      if ( localStorage.getItem("Picture"))
      { 
       setimgUser(
        `${localStorage.getItem("Picture")}`
      );
      }
      else {
        setimgUser(
          "data:image/png;base64,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"
        );
      }
    }
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handelLogout = () => {
    localStorage.removeItem("UserId");
    localStorage.removeItem("Picture");
    localStorage.removeItem("Email");
    setCheckUser(false);
    console.log(check)
  };
  const OnclickSearch=(id)=>{
   
    setValueSearch(''); 
    setdataSearch([])
    history.push(`/detail/${id}`)
  }
  return (
    <div className="Header">
      <div className="Header_top">
        <img
          src="https://imagizer.imageshack.com/v2/734x320q90/r/924/InIkGN.png"
          alt="" width="100" height="80"
          className="Header_logo"
        />
        <div className="Header_search">
          <div className="Header_search_icon">
            <input
              type="text"
              placeholder="Search"
              value={valueSearch}
              onChange={e => getValue(e)}
            />
            <i className="fas fa-search Search_icon"></i>
          </div>
          <div className="search-item">
          
            {dataSearch?.slice(0,10).map((item,index) => (
             <p className="search-text" key={index} onClick={()=> {OnclickSearch(item?.SpID) }} >{item?.TenSP} </p> 
            ))}
          </div>
        </div>
        <div className="Header_icon">
          <li className="Header_icon-cart">
            <NavLink to="/cart" exact>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                color="secondary"
                badgeContent={countPro}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/dnoiydox.json"
                  trigger="hover"
                  colors="primary:#242424,secondary:#e88c30"
                  stroke="100"
                  scale="44"
                  axis-x="51"
                  axis-y="49"
                ></lord-icon>
              </Badge>
            </NavLink>

            {check ? (
              <div className="Header_icon-empty">
                <div className="Header_icon-list">
                  <div className="Header_icon-title">New products added</div>
                  <div className="Header_icon-content">
                    <Viewcart />
                  </div>
                  <div className="Header_icon-btn">
                    <button>
                      <NavLink to="/cart" exact>
                        View cart
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="Header_icon-empty">
                <img
                  src="https://imageshack.com/i/poyiw2qep"
                  alt=""
                  className="Header_icon-no_cart"
                />
                <span>No Product</span>
              </div>
            )}
          </li>
          <li className="lord-icon-like">
            <lord-icon
              src="https://cdn.lordicon.com/hrqwmuhr.json"
              trigger="hover"
              colors="primary:#121331,secondary:#e88c30"
              style={{ transform: "rotate(180deg)" }}
            ></lord-icon>
          </li>
          <li className="lord_icon_login">
            {checkUser ? (
              <>
                {
                  <div  className="user-login-icon">
                    <img className="img_login" src={imgUser} alt="" />
                    
                    <div className="user-hover-login">
                      <p> <NavLink to="/orderstatus" exact >List order</NavLink></p>
                      <p onClick={handelLogout}>Log out</p>
                    </div>
                  </div>
                }
              </>
            ) : (
              <NavLink to="/login" exact>
                <lord-icon
                  src="https://cdn.lordicon.com/bwnhdkha.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#e88c30"
                  stroke="68"
                  scale="49"
                ></lord-icon>
              </NavLink>
            )}
          </li>
          <li htmlFor="nav_mobile" className="mobile">
            <label htmlFor="nav_mobile">
              {" "}
              <i className="fad fa-bars"></i>
            </label>
          </li>
        </div>
      </div>

      <div className="Header_Nav">
        <div className="Nav_left">
          <NavLink to="/" exact>
            home
          </NavLink>
          <NavLink to="/allproduct" exact>
            All Product
          </NavLink>
          {/* <NavLink to="/skincare" exact>
            Skin care
          </NavLink>
          <NavLink to="/haircare" exact>
            hair care
          </NavLink>
          <NavLink to="/bodycare" exact>
            body care
          </NavLink>
          <NavLink to="/makeup" exact>
            make up
          </NavLink> */}
        </div>
        <div className="Nav_right">
          <NavLink to="/blog" exact>
            blog
          </NavLink>
          <NavLink to="/contact" exact>
            contact
          </NavLink>
        </div>
      </div>
      <input type="checkbox" id="nav_mobile" name="nav_mobile" />

      <div className="Header_Nav nav_Mobile">
        <div className="Nav_left">
          <label htmlFor="nav_mobile" style={{ padding: "10px" }}>
            &#x2715;
          </label>
          <NavLink to="/" exact>
            home
          </NavLink>
          <NavLink to="/allproduct" exact>
            All Product
          </NavLink>
          <NavLink to="/skincare" exact>
            Skin care
          </NavLink>
          <NavLink to="/haircare" exact>
            hair care
          </NavLink>
          <NavLink to="/bodycare" exact>
            body care
          </NavLink>
          <NavLink to="/makeup" exact>
            make up
          </NavLink>
        </div>
        <div className="Nav_right">
          <NavLink to="/blog" exact>
            blog
          </NavLink>
          <NavLink to="/contact" exact>
            contact
          </NavLink>
        </div>
      </div>
      {/* <label htmlFor="nav_mobile"> <i className="fas fa-hamburger mobile"></i></label> */}
    </div>
  );
}

export default Header;
