import React, { useEffect } from "react";
import Footer from '../../components/Footer';
//import Anhdep from "../../components/AnhDep";
import Header from "../../components/Header";
import Blogger  from "../../components/Blogger";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Blog">
      <Header />
      <div className="body_Page">
        <Blogger/>
      </div>
      <div className = "footer_Page">
        <Footer/>
      </div>
    </div>
  );
}

export default Blog;
