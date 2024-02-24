import React, { useState } from "react";
import "./Sidebar.scss";
import icon from "../../assets/sidebar_icons.gif";
import home from "../../assets/home.gif";
import about from "../../assets/about.gif";
import product from "../../assets/products.gif";
import service from "../../assets/service.gif";
import gallery from "../../assets/gallery.gif";
import connect from "../../assets/connect.gif";
import video from "../../assets/video.gif";
import logout from "../../assets/logout.gif";
import Forms from "./Forms";
const Sidebar = () => {
  let [slideClose, setSlideShow] = useState(false);

  return (
    <>
      <div className="sidebar_container" id={slideClose ? "close" : "open"}>
        <div className="sidebar_header">
          <h3>Digital Card Creator</h3>
        </div>

        <div
          className="sidebar_close"
          onClick={() => setSlideShow(!slideClose)}
        >
          <img src={icon} alt="icons" />
        </div>
        <div className="sidebar_lists">
          <div className="list">
            <div className="icon">
              <img src={home} alt="home" />
            </div>
            <div
              className="list_title"
             
            >
              <p> Basic Detail's</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <img src={about} alt="about" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> About Detail's</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <img src={service} alt="service" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Our Services</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <img src={product} alt="product" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Our Products</p>
            </div>
          </div>

          <div className="list">
            <div className="icon">
              <img src={gallery} alt="gallery" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Gallery Session</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <img src={connect} alt="connect" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Social Media Links</p>
            </div>
          </div>
          <div className="list">
            <div className="icon">
              <img src={video} alt="video" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Video Session</p>
            </div>
          </div>
        </div>

        <div className="logout_container">
          <div className="box">
            <img src={logout} alt="logout" />
            <p>Logout</p>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Sidebar;
