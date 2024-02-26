import React, { useState } from "react";
import "./Sidebar.scss";
import icon from "../../assets/sidebar_icons.gif";
import RightArrow from "../../assets/Social Medias/arrowAnime.gif";
import home from "../../assets/home.gif";
import about from "../../assets/about.gif";
import getInTouch from "../../assets/Social Medias/beTouch.gif";
import product from "../../assets/products.gif";
import service from "../../assets/service.gif";
import gallery from "../../assets/gallery.gif";
import star from "../../assets/Social Medias/star.gif";
import connect from "../../assets/connect.gif";
import video from "../../assets/video.gif";
import logout from "../../assets/logout.gif";
import Forms from "./Forms";
const Sidebar = ({
  slideClose,
  basicForm,
  serviceForm,
  contactForm,
  productForm,
  galleryForm,
  socialMediaForm,
  testimonialForm,
  setSlideShow,
  setBasicForm,
  setServiceForm,
  setContactForm,
  setProductForm,
  setGalleryForm,
  setSocialMediaForm,
  setTestimonialForm,
}) => {
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
        <div className="right_arrow">
          <img src={RightArrow} alt="RightArrow" />
        </div>
        <div className="sidebar_lists">
          <div
            className="list"
            id={basicForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(true),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
            }}
          >
            <div className="icon">
              <img src={home} alt="home" title="Add Basic Detail" />
            </div>
            <div className="list_title">
              <p> Basic Detail's</p>
            </div>
          </div>
          {/* <div className="list">
            <div className="icon">
              <img src={about} alt="about" title="Add About U" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> About Detail's</p>
            </div>
          </div> */}
          <div
            className="list"
            id={contactForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(false),
                setContactForm(true),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
            }}
          >
            <div className="icon">
              <img src={getInTouch} alt="about" title="Add Contact Detail" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Contact Detail's</p>
            </div>
          </div>
          <div
            className="list"
            id={serviceForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(true),
                setSocialMediaForm(false),
                setTestimonialForm(false);
            }}
          >
            <div className="icon">
              <img src={service} alt="service" title="Add Service" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Our Services</p>
            </div>
          </div>
          <div
            className="list"
            id={productForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(true),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
            }}
          >
            <div className="icon">
              <img src={product} alt="product" title="Add Product" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Our Products</p>
            </div>
          </div>

          <div
            className="list"
            id={galleryForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(true),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
            }}
          >
            <div className="icon">
              <img src={gallery} alt="gallery" title="Add Gallery" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p> Gallery Session</p>
            </div>
          </div>
          <div
            className="list"
            id={socialMediaForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(true),
                setTestimonialForm(false);
            }}
          >
            <div className="icon">
              <img src={connect} alt="connect" title="Add Social Media Link" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Social Media Links</p>
            </div>
          </div>
          <div
            className="list"
            id={testimonialForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(true);
            }}
          >
            <div className="icon">
              <img src={star} alt="star" title="Add Testimonial" />
            </div>
            <div
              className="list_title"
              id={slideClose ? "title_close" : "title_open"}
            >
              <p>Testimonial</p>
            </div>
          </div>
          <div
            className="list"
            // id={basicForm === true ? 'selected':'unSelected'}
            onClick={() => {
              setBasicForm(false),
                setContactForm(false),
                setGalleryForm(false),
                setProductForm(false),
                setServiceForm(false),
                setSocialMediaForm(false),
                setTestimonialForm(false);
            }}
          >
            <div className="icon">
              <img src={video} alt="video" title="Add Video Profile" />
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
            <img src={logout} alt="logout" title="Logout" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
