import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import './styles.scss'
import Footer from "../../components/Footer";
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Contact">
      <Header />
      <div className="body_Page">
        <h2 className="title_pro">INTRODUCTION TO ENVY - SHARE HEALTH AND BEAUTY</h2>
        <div className="body-content" >
          <h4>Vision and mission</h4>
          <p>ENVY is an organization operating with the desire to share benefits
             to the community about beauty. Helping customers find the best genuine cosmetic 
             products at the most reasonable prices.
          </p>
          <p >Our mission is to be the best influence on the community.
             Helping women after the age of 30 become younger and more beautiful through
              the beauty secrets studied and accumulated after working at famous Spas such 
              as: HT SPA, Aura beauty salon...
          </p>
          <img src="" alt="" />
          <h4>Core values</h4>
          <p>Ethical, honest, creative, optimistic, compassionate and be a force for good.</p>
          <h3>BRAND IDENTITY</h3>
          <p>Our difference is demonstrated by the way we support our customers.
            We look forward to sharing the message and adding value to the community. 
            How can I buy good products, how can I buy products with clear documents?
          </p>
          <h3>MODELS OF ENVY</h3>
          <h4>Consulting to support cosmetic knowledge</h4>
          <p>Buying good cosmetics is not an easy thing, with a great relationship with cosmetics across the country.
             ENVY will help you find and buy the best cosmetic products.
          </p>
          <h4>Who is the ENVY team composed of?</h4>
          <div className= "nhansu">
            <div>
              <img src="" alt="" />
              <p>Phan Pham Quynh Hoa</p>
              <p>Advisor and leader of ENVY team.</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Nguyen Thi Cam Huong</p>
              <p>Sale Manager at ENVY</p>
              </div>
            <div>
              <img src="" alt="" />
              <p>Nguyen Thi Phuong Nhi</p>
              <p>Customer Care Manager</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Le Anh Nhan</p>
              <p>CMO – Co-founder ENVY.</p>
            </div>
            
          </div>
          <h4>Contact</h4>
          <b>Email: </b><span>  nguyenhuong04032001@gmail.com</span><br />
          <b>Phone number: </b><span>  0961.710.409</span><br />
          <b>Address: </b><span> Thu Duc, HCM City</span>
          
        </div>
     
        <Anhdep />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
