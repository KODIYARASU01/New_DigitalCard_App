import React from "react";
import "./NewCard.scss";
import banner from "../../assets/Background/19.jpg";
import logo from "../../assets/avatar_2.jpeg";
import facebook from "../../assets/Social Medias/f.gif";
import insta from "../../assets/Social Medias/insta.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import gallery from "../../assets/Background/3.jpg";
import gallery1 from "../../assets/Background/4.jpg";
import gallery2 from "../../assets/Background/6.jpg";
import gallery3 from "../../assets/Background/5.jpg";
//Product
import taxi from "../../assets/products/taxi1.jpg";
import ecommerse from "../../assets/products/ecommerse2.jpg";
import crm from "../../assets/products/sassCRM.jpg";
import cloud from "../../assets/products/cloudBilling1.jpg";
import jobPortal from "../../assets/products/jobPortal.jpg";

//Servvice:

import frontEnd from "../../assets/service/frontend.gif";
import backend from "../../assets/service/backend.gif";
import fullstack from "../../assets/service/fullstack.gif";
import server from "../../assets/service/server.gif";
import cloud1 from "../../assets/service/cloud.gif";
import wordpress from "../../assets/service/wordpress.gif";

const NewCard = () => {
  const buttonStyle = {
    width: "0px",
    background: "none",
    opacity:0,
    border: "0px",
    padding: "0px",
  };
  const buttonStyle2 = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "none",
    border: "0px",
  };
  const properties2 = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }}>
        <img
          width="42"
          height="42"
          src="https://img.icons8.com/stencil/32/circled-left-2.png"
          alt="circled-left-2"
        />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle2 }}>
        <img
          width="42"
          height="42"
          src="https://img.icons8.com/stencil/32/circled-chevron-right.png"
          alt="circled-chevron-right"
        />
      </button>
    ),
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };
  return (
    <>
      <div className="newCard_container">
        <div className="card_box">
          <div className="basic_details">
            <div className="banner">
              <img src={banner} alt="banner" />
            </div>

            {/* Logo and name */}
            <div className="logo">
              <img src={logo} alt="logo" />
              <div className="user_detail">
                <div className="author_name">
                  <h4>Kodiyarasu C</h4>
                </div>
                <div className="author_profession">
                  <h5>Full Stack Developer</h5>
                </div>
              </div>
            </div>
            {/* Summary */}
            <div className="summary">
              <p>
                A <strong>full-stack developer</strong> is an IT professional
                who develops a software application's client and server side.
                They apply a wide range of coding skills and help other
                programmers solve problems. Full-stack developers also test and
                debug software and optimize the code
              </p>
            </div>
          </div>
          {/* contact_session */}
          <div className="contact_session">
            <div className="box">
              <i className="uil uil-envelope-edit"></i>
              <div className="left">
                <h4>kodiyarasu01@gmail.com</h4>
                <h5>Email</h5>
              </div>
            </div>
            <div className="box">
              <i className="uil uil-envelope-share"></i>
              <div className="left">
                <h4>akodi01@gmail.com</h4>
                <h5>Alternate Email</h5>
              </div>
            </div>
            <div className="box">
              <i className="uil uil-phone-volume"></i>
              <div className="left">
                <h4>+91 8825457794</h4>
                <h5>Mobile Number</h5>
              </div>
            </div>
            <div className="box">
              <i className="uil uil-calling"></i>
              <div className="left">
                <h4>+91 1645645546</h4>
                <h5>Alternate MobileNumber</h5>
              </div>
            </div>
            <div className="box">
              <i className="uil uil-calendar-alt"></i>
              <div className="left">
                <h4>26/01/2000</h4>
                <h5>Date Of Birth</h5>
              </div>
            </div>
            <div className="box">
              <i className="uil uil-location-pin-alt"></i>
              <div className="left">
                <h4>Ariyalur , Tamil Nadu</h4>
                <h5>Address to Visit </h5>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="social_media">
            <a href="">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="">
              <img src={insta} alt="facebook" />
            </a>
            <a href="">
              <img src={whatsup} alt="facebook" />
            </a>
            <a href="">
              <img src={twiter} alt="facebook" />
            </a>
            <a href="">
              <img src={linkedin} alt="facebook" />
            </a>
          </div>
          {/* Gallery */}
          <div className="gallery">
            <div className="gallery_title">
              <h4>Gallery</h4>
            </div>
            <Slide
              className="slide"
              slidesToScroll={1}
              slidesToShow={1}
              indicators={true}
              autoplay
              {...properties}
              autoplayInterval={1000}
            >
              <img src={gallery} alt="gallery" />
              <img src={gallery1} alt="gallery" />
              <img src={gallery2} alt="gallery" />
              <img src={gallery3} alt="gallery" />
            </Slide>
          </div>
          {/* Product */}
          <div className="product">
            <div className="product_title">
              <h4>Our Product</h4>
            </div>

            <Slide
              className="product_slide"
              slidesToScroll={1}
              slidesToShow={2}
              indicators={true}
              autoplay
              {...properties}
              autoplayInterval={1000}
            >
              <div className="box">
                <img src={taxi} alt="taxi" />

                <div className="title">
                  <h4>Taxi - Booking</h4>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
                <div className="product_price">
                  <h5>
                    Rs : <span>8000</span>
                  </h5>
                </div>
              </div>
              <div className="box">
                <img src={ecommerse} alt="ecommerse" />

                <div className="title">
                  <h4>E-Commerse Portal</h4>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
                <div className="product_price">
                  <h5>
                    Rs : <span>5000</span>
                  </h5>
                </div>
              </div>
              <div className="box">
                <img src={cloud} alt="cloud" />

                <div className="title">
                  <h4>Cloud Billing Software</h4>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
                <div className="product_price">
                  <h5>
                    Rs : <span>10000</span>
                  </h5>
                </div>
              </div>
              <div className="box">
                <img src={crm} alt="crm" />

                <div className="title">
                  <h4>SASS CRM</h4>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
                <div className="product_price">
                  <h5>
                    Rs : <span>7000</span>
                  </h5>
                </div>
              </div>
              <div className="box">
                <img src={jobPortal} alt="jobPortal" />

                <div className="title">
                  <h4>Job Portal</h4>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
                <div className="product_price">
                  <h5>
                    Rs : <span>5000</span>
                  </h5>
                </div>
              </div>
            </Slide>
          </div>
          {/* Services */}
          <div className="service">
            <div className="service_title">
              <h4>Our Services</h4>
            </div>

            <div className="service_slide">
              <div className="box">
                <img src={frontEnd} alt="frontEnd" />

                <div className="title">
                  <h4>FrontEnd Web Development</h4>
                </div>
                <div className="service_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={backend} alt="ecommerse" />

                <div className="title">
                  <h4>Backend Development</h4>
                </div>
                <div className="service_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={wordpress} alt="wordpress" />

                <div className="title">
                  <h4>Wordpress Development</h4>
                </div>
                <div className="service_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={fullstack} alt="fullstack" />

                <div className="title">
                  <h4>FullStack Development</h4>
                </div>
                <div className="service_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={server} alt="server" />

                <div className="title">
                  <h4>Server Side Management</h4>
                </div>
                <div className="service_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={cloud1} alt="cloud" />

                <div className="title">
                  <h4>Cloud Management</h4>
                </div>
                <div className="service_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* //Testimonial */}
          <div className="testimonial">
                    {/* Fifth services */}
                    <div className="testimonial_title">
            <h4>Our Customer Feedback</h4>
          </div>

          <div className="testimonial_details">
            <Slide {...properties2}   slidesToScroll={1}
              slidesToShow={1}
              indicators={true}
              autoplay>
              <div className="slide_1">
                <img src={logo} />
                <p className="name">Marial Joes</p>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  dolores maiores nam quisquam magni provident labore laboriosam
                  asperiores culpa molestiae!
                </small>
              </div>
              <div className="slide_1">
                <img src={logo} />
                <p className="name">Punitha</p>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  dolores maiores nam quisquam magni provident labore laboriosam
                  asperiores culpa molestiae!
                </small>
              </div>
              <div className="slide_1">
                <img src={logo} />
                <p className="name">Varsha</p>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  dolores maiores nam quisquam magni provident labore laboriosam
                  asperiores culpa molestiae!
                </small>
              </div>
            </Slide>
          </div>
          </div>

          {/* //Feedback */}
          <div className="feedback_container">
            <div className="feedback_heading">
              <h5>Give Feedback Something About Us </h5>
            </div>
            <form action="">
              <div className="form_group">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  id="name"
                />
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/nolan/64/user.png"
                  alt="user"
                />
              </div>
              <div className="form_group">
                <textarea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="4"
                  placeholder="Tell something about us !"
                ></textarea>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/edit-text-file.png"
                  alt="edit-text-file"
                />
              </div>
              <div className="form_actions">
                <button type="submit">Send Feedback</button>
              </div>
            </form>
          </div>
          {/* /Enquire */}
             <div className="enquiry">
            <div className="inquire_title">
              <h4>Make Inquiries</h4>
           
            </div>
            <div className="equiry_container">
              <div className="enquiry_heading">
                <h5> Be in Touch </h5>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/group-background-selected.png"
                  alt="group-background-selected"
                />
              </div>
              <form action="">
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    name="name"
                    id="name"
                  />
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/nolan/64/user.png"
                    alt="user"
                  />
                </div>
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                  />
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/nolan/64/new-post.png"
                    alt="new-post"
                  />
                </div>
                <div className="form_group">
                  <input
                    type="tel"
                    placeholder="Enter your mobile Number"
                    name="tel"
                    id="tel"
                  />
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/nolan/64/phone-disconnected.png"
                    alt="phone-disconnected"
                  />
                </div>
                <div className="form_group">
                  <textarea
                    name="msg"
                    id="msg"
                    cols="30"
                    rows="4"
                    placeholder="Tell something about us !"
                  ></textarea>
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/edit-text-file.png"
                    alt="edit-text-file"
                  />
                </div>
                <div className="form_actions">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>

            {/* Copyrights */}
            <div className="copyright">
            <p>Copyright Reserved &copy; 2021 DigitalCard.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCard;
