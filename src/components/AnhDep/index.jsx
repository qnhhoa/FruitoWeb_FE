import React from "react";
import "./styles.scss";
import { Link } from 'react-router-dom';
const List_Anh = [
  { img: "https://imagizer.imageshack.com/img922/1553/anmBhF.png",
  title:"BODY CARE",
  link:"/bodycare"
},
  { img: "https://imagizer.imageshack.com/img923/2888/7hkUue.jpg",
  title:"HAIR CARE", 
  link:"/haircare"
},
  { img: "https://imagizer.imageshack.com/img922/6349/arOBPW.jpg",
  title:"SKIN CARE",
  link:"/skincare"
},
  { img: "https://imagizer.imageshack.com/img923/6256/FMYJP6.jpg",
  title:"MAKUP",
  link:"/makeup"
},
];
function Anhdep() {
  return (
    <div className="Anh">
      {List_Anh.map((item,index) => (
          <div className="img" key={index}>
                   <img src={item.img} alt="" />
                   <div className="overlay">
                         <p className="title">{item.title}</p>
                         <p><Link to={item.link} className="Shop_now">shop now</Link></p>
                   </div>
          </div>
   
        
      ))}
    </div>
  );
}

export default Anhdep;
