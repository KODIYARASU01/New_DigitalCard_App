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
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from "../../redux/user/userSlice.js";
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
  let dispatch=useDispatch();
  const handleSignOut = async () => {
    try {
      await fetch("http://localhost:5001/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };
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
          <i className="bx bx-chevron-right "></i>
        </div>
        <div className="right_arrow">
          <img src={RightArrow} alt="RightArrow" />
        </div>
        <div className="sidebar_lists">
          <div
            className="list"
            id={
              basicForm === true && slideClose === false
                ? "selected"
                : "unSelected"
            }
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
              <i className="bx bx-home"></i>
            </div>
            <div className="list_title">
              <p> Basic Detail's</p>
            </div>
          </div>
          <div
            className="list"
            id={
              contactForm === true && slideClose === false
                ? "selected"
                : "unSelected"
            }
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
              <i className="bx bxs-contact"></i>
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
            id={
              serviceForm === true && slideClose === false
                ? "selected"
                : "unSelected"
            }
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
            <i className="uil uil-shopping-cart-alt"></i>
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
            id={
              productForm === true && slideClose === false
                ? "selected"
                : "unSelected"
            }
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
              <i className="bx bxl-product-hunt"></i>
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
            id={
              galleryForm === true && slideClose === false
                ? "selected"
                : "unSelected"
            }
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
              <i className="uil uil-scenery"></i>
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
            id={
              socialMediaForm === true && slideClose === false
                ? "selected"
                : "unSelected"
            }
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
              <i className="uil uil-share"></i>
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
            id={
              testimonialForm === true && slideClose === false
                ? "selected"
                : "unSelected"
            }
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
              <i className="uil uil-users-alt"></i>
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
            // id={basicForm === true && slideClose === false ? 'selected':'unSelected'}
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
              <i className="uil uil-video"></i>
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
            <p onClick={handleSignOut}>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
