import React from 'react'
import { useHistory } from 'react-router';
//import { Couter } from '../../Context/counter';
import './styles.scss'

function Product(props) {
    let {Product}=props;
    Product={...Product,Photo:JSON.parse(Product?.Photo)}
    let History = useHistory ();
    const handleClick =(id)=> {
        History.push(`/detail/${id}`)

    }
    return (
        <div className="Product">
            <div className="pro_img">
              <img src={Product?.Photo?.PhotoMain} alt="" className="Product_img" />
            </div>
    
            <div className="Product_content">
                <p className="Product_Title">
               {Product?.TenSP}
                </p>
                <p className="Product_price">
                {Product?.GiaSP}₫
                </p>
            </div>
            <div className="btn_plus" onClick = {()=>handleClick(Product.SpID)}>
                 <i className="fas fa-plus-circle"></i>
            </div>
        </div>
    )
}

export default Product;
