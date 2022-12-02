import React from "react";
import "./styles.scss";
import Product from "../Product/index";
import { Link } from "react-router-dom";

function BestSeller(props) {
  const {Listproduct}=props
  return (
      <>

      <div className="BestSeller" id = "best-seller">
            {Listproduct?.map((product, index) => (
              
                     <Product Product={product} key={index} />
            
         
            ))}
      </div>
      <p className="View"><Link to="#">View collect</Link></p>
     </>
  );
}

export default BestSeller;
