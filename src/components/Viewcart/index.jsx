import React from 'react'
import "./styles.scss"

function Viewcart() {
    const Listproduct = JSON.parse(localStorage.getItem('ListProduct'))? JSON.parse(localStorage.getItem('ListProduct')) :[];
    return (
        <div className="Viewcart">
        {
            Listproduct?.slice(0,4).map((item,index)=>
                <div key={index} className="Viewcart-item">
                    <div className="Viewcart-content">
                    <div className="Viewcart-img"><img src={item.Photo?.PhotoMain} alt="" /></div>
                    <div className="Viewcart-name"><p>{item?.TenSP}</p></div>
                    </div>
                   
                    <div className="Viewcart-price"><p>&#36;{item?.GiaSP}</p></div>
                </div>
        )}
        </div>
    )
}

export default Viewcart
