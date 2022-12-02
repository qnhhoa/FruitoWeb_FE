
import React, { useState, useEffect } from 'react';
import { getOrder } from '../../api/paymentApi';
import './styles.scss';

function ViewOrderStatus() {

const [listOrder,setListOrder] =useState([])
    //react-hooks/exhaustive-deps
useEffect( () => {
  async function Fetch(){
    const Order = await getOrder(localStorage.getItem('UserId'));
  
  setListOrder(Order);
}
Fetch();
 
  window.scrollTo(0, 0);
}, []);


  return (
    <div className="ViewOrderStatus" >
      <h2>List Order</h2>
      {listOrder.map((item, index) => {
        return (
          <div className={`orderView orderView${index}`}>
            <div className="content">
              <div className="imgProduct">
               <img src={JSON.parse(item.Photo).PhotoMain} alt="" />
              </div>
              <div className="infoProduct">
                <div className="name">
                  <span>{item.TenSP}</span>
                </div>
                <div className="quantity">
                  <span>x{item.SL}</span>
                </div>
                <div className="status">
                  <span className={`${item.Trangthai}`}>{item.Trangthai}</span>
                </div>
              </div>

            </div>
            <div className="price">
              <span>{item.GiaSP}₫</span>
            </div>
          </div>
        )
      })}
             
    </div>
  )

}

export default ViewOrderStatus
