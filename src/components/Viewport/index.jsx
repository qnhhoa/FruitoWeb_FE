/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./styles.scss"

function Viewport(props) {
  const {Img_Viewport} = props;
    return (
      <div className ="Viewport" style={{backgroundImage: `url(${Img_Viewport})`}}>
        <div className="content">
          {/* <img src={Img_Viewport} alt="" /> */}
          <span>FAVORITE ITEMS</span>
          <h3>Buy 2 get 1 offer today</h3>
          <p>The truth about dried food. Benefits and calories, vitamins A, C, and calcium and they may improve diet quality.</p>
          <a href="">SHOP NOW</a>
      </div>
      </div>
    )
}
export default Viewport
