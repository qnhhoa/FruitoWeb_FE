/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";
function Footer() {
    //jsx-a11y/anchor-is-valid
    return (
        <div className ="footer">
            <div className="container">
                {/* <form className="form">
                    <input type="email" className="form__field" placeholder="   Subscribe Email" />
                    <button type="button" className="btn btn--primary  uppercase">Submit</button>
                </form> */}
                <div className="noidung">
                    <div className="noi-dung about">
                        <h2>ABOUT US</h2>
                        <ul className="link">
                            <li><Link className = "Contract" to="../../Contact">Introduce Fruito</Link></li>
                            <li><Link className = "Contract" to="../../Contact">Contact</Link></li>
                            <li><Link className = "Blogger" to="../../Blog">Blog</Link></li>
                        </ul>
                    
                        <ul className="social-icon">
                                <li className = "social-icon-fb"><a href="https://www.facebook.com/ENVY-UIT-100244785808927"><i className="fab fa-facebook"></i></a></li>
                                <li className = "social-icon-ins"><a href="https://www.instagram.com/thecosmeticsofficial/"><i className="fab fa-instagram"></i></a></li>
                                <li className = "social-icon-tw"><a href="https://twitter.com/cb_beautynews"><i className="fab fa-twitter"></i></a></li>
                                <li className = "social-icon-ytb"><a href="https://www.youtube.com/user/lisaeldridgedotcom"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    
                    <div className="noi-dung links">
                        <h2>PRODUCT</h2>
                        <ul>
                            <li><><Link className = "Home" to="../../">Home page</Link></></li>
                            <li><a href="#best-seller">Best Seller</a></li>
                            <li><a href="#product-sliders">Latest Product</a></li>
                            <li><a href="#best-seller">Reduce Product</a></li>
                        </ul>
                    </div>
                   
                    <div className="noi-dung contact">
                        <h2>CONTACT INFO</h2>
                        <ul className="info">
                            <li >
                                <span>
                                <lord-icon
                                    src="https://cdn.lordicon.com/zzcjjxew.json"
                                    trigger="loop"
                                    colors="primary:#121331,secondary:#c76f16"
                                    >
                                </lord-icon>
                                </span>
                                <span className="address">Thu Duc, HCM City</span>
                            </li>
                            <li >
                                <span>
                                <lord-icon
                                    src="https://cdn.lordicon.com/hciqteio.json"
                                    trigger="loop"
                                    colors="primary:#121331,secondary:#c76f16"
                                    >
                                </lord-icon>
                                </span>
                                <p><a>+84 918 743 787</a></p>
                            </li>
                            <li >
                                <span>
                                <lord-icon
                                    src="https://cdn.lordicon.com/rhvddzym.json"
                                    trigger="loop"
                                    colors="primary:#c76f16,secondary:#08a88a"
                                    axis-y="50"
                                   >
                                </lord-icon>
                                </span>
                                <a name="gmEnvy" href="#">fruito@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
