/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import HoverRating from '../Rating';
import './styles.scss';


function Evaluation({Id,productDetail}) {
 
    return (
        <div className="Evaluation">
            <div className = "product-bottom">
                <div className = "product-bottom-title">
                    <hr />
                        <div className ="title-item">
                            <span><a href="">Product details</a></span>
                            <span><a href="#Benefits">Benefits</a></span>
                            <span><a href="#Howtouse">How to use</a></span>
                             <span><a href="#feedback">Feedback</a></span>
                        </div>  
                    <hr />
                </div>
                <div className = "product-bottom-detail">
                    <div className = "detail-title"> 
                        <h1>Product details</h1>
                        <div className = "detail-title-sub"><b>Ingredients Of {productDetail?.TenSP}</b></div>
                        <p>{productDetail?.ThanhPhan} </p>
                    </div>
    
                    <div className = "detail-image"> <img src={`${productDetail?.Photo?.PhotoMain}`} alt="image" /></div>
                </div>
                <div className = "product-bottom-benefits">
                    <div className = "benefits-left">
                        <img src={`${productDetail?.Photo?.PhotoList[0]?.photo}`} alt="image" />
                    </div>
                    <div className = "benefits-right" id="Benefits"> 
                        <div className ="benefits-title"><h1>Benefits</h1></div>
                        <div className ="benefits-content">{productDetail?.MoTa}</div>
                        <div className ="benefits-show"><a href="">Show all benefits</a></div>
                    </div>
                </div>
                <div className = "product-bottom-use" id ="Howtouse">
                    <div className ="use-title" ><h1>How to use</h1></div>
                    <div className = "use-content">{productDetail?.MoTa}
                        <Link to="/"></Link>    
                    </div>
                    
                </div>
                <div className = "product-bottom-feedback" id ="feedback">
                    <div className = "feedback-title" ><h1>Feedback</h1></div>
                    <div className = "feedback-content">
                        <div className = "feedback-content-view">
                                
                        </div>
                        <div className = "feedback-content-button">
                    
                            <div className="button-rating">
                                <HoverRating Id={Id}/>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Evaluation
