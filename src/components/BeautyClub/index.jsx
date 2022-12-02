import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function BeautyClub(props) {
  const { beautyClubBlog } = props;
  return (
    <div className="BeautyClub">
      <div className="items">
        {beautyClubBlog.map((val, index) => {
          return (
            // style={{backgroundImage: `url(${val.srcimg})`}}
            <div className="item">
              <div className="img">
                <img src={`${val.srcimg}`} alt="" />
              </div>

              <div className="content">
                <div className="title"> 
                       <Link to="#">{val.name}</Link>
                </div>
           
                <span className="date">{val.date}</span>
                <div>
                   <Link to="#" className="continue">
                  Continue reading
                </Link>
                </div>
               
              </div>
            </div>
          );
        })}
      </div>

      <div className="view-more View " >
        <li><Link className = "Blogger" to="../../Blog">View blog</Link></li>
      </div>
    </div>
  );
}
export default BeautyClub;
