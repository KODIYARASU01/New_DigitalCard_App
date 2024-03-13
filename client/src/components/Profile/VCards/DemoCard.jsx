import React, { useEffect } from "react";
import "./DemoCard.scss";
import banner from "../../../assets/Background/12.jpg";
import avatar from "../../../assets/avatar_2.jpg";
import logo from "../../../assets/avatar_2.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import frontEnd from "../../../assets/service/f1.svg";
import backend from "../../../assets/service/b1.svg";
import wordpress from "../../../assets/service/wp.svg";
import Ecommerse from "../../../assets/service/ecommerse2.jpg";
import qrCode from "../../../assets/QRCODE/qr.svg";
import qr1 from "../../../assets/QRCODE/qr-code-isometric.svg";
import qr2 from "../../../assets/QRCODE/qr-code-monochromatic.svg";
import qr3 from "../../../assets/QRCODE/qr-code-outline.svg";
//Product
import taxi from "../../../assets/products/taxi1.jpg";
import ecommerse from "../../../assets/products/ecommerse2.jpg";
import crm from "../../../assets/products/sassCRM.jpg";
import cloud from "../../../assets/products/cloudBilling1.jpg";
import jobPortal from "../../../assets/products/jobPortal.jpg";
import axios from "axios";

//Testimonial

const DemoCard = ({
  //Fetch form data from database:
  BasicData,
  setBasicData,
  ContactData,
  setContactData,
  ServiceData,
  setServiceData,
  ProductData,
  GalleryData,
  setGalleryData,
  SocialMediaData,
  setSocialMediaData,
  TestimonialData,
  setTestimonialData,
}) => {
  const buttonStyle = {
    width: "0px",
    background: "none",
    opacity: 0,
    border: "0px",
    padding: "0px",
  };
  console.log(ContactData);
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
  //Testimonial
  const buttonStyle2 = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "none",
    border: "0px",
  };
  const properties2 = {
    prevArrow: (
      <button style={{ ...buttonStyle2 }}>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/back.png"
          alt="back"
        />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle2 }}>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/forward--v2.png"
          alt="forward--v2"
        />
      </button>
    ),
  };

  return (
    <div className="demoCard_container">
      <div className="card_box">
        <div className="box-1">
          <div className="Image_details">
            <div className="banner">
              <img src={banner} alt="banner" />
            </div>
            <div className="logo">
              <img src={BasicData.logo || avatar} alt="avatar" />
            </div>
          </div>
          <svg
            className="svg_top"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#003253"
              fillOpacity="1"
              d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>

          <div className="basic_details">
            <div className="author_name">
              <h4>{BasicData.fullName || "Jayakumar "}</h4>
            </div>
            <div className="professional">
              <h6>
                {BasicData.profession || "AritosTech India Private Limited "}
              </h6>
            </div>
            <div className="summary">
              <p>
                {BasicData.summary ||
                  `We're designers, developers, engineers, marketers, and pretty
                much everything else for your business need. However, it is not
                how we choose to introduce ourselves.`}
              </p>
            </div>
          </div>
          <div className="social_medias">
            <a href="">
              <i className="uil uil-globe"></i>
            </a>
            <a href="">
              <i className="uil uil-facebook-f"></i>
            </a>
            <a href="">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="">
              <i className="uil uil-whatsapp"></i>
            </a>
            <a href="">
              <i className="uil uil-twitter"></i>
            </a>
          </div>

          {/* //Contact */}

          <div className="contact_container">
            <div className="contact_title">
              <h4>Contact</h4>
            </div>

            <div className="contact_lists">
              <div className="list">
                <div className="image">
                  <i className="uil uil-envelope-edit"></i>
                </div>
                <div className="details">
                  <h4>{ContactData.Email || "kodiyarasu01@gmail.com"}</h4>
                  <h5>Email</h5>
                </div>
              </div>
              <div className="list">
                <div className="image">
                  <i className="uil uil-envelope-add"></i>
                </div>
                <div className="details">
                  <h4>{ContactData.AlternateEmail || "akodi01@gmail.com"}</h4>
                  <h5>Alternate Email</h5>
                </div>
              </div>
              <div className="list">
                <div className="image">
                  <i className="uil uil-calling"></i>
                </div>
                <div className="details">
                  <h4>{ContactData.MobileNumber || "+91 8825457794"}</h4>
                  <h5>Mobile Number</h5>
                </div>
              </div>
              <div className="list">
                <div className="image">
                  <i className="uil uil-phone-alt"></i>
                </div>
                <div className="details">
                  <h4>
                    {ContactData.AlternateMobileNumber || "+91 63456464646"}
                  </h4>
                  <h5>Alternate MobileNumber</h5>
                </div>
              </div>
              <div className="list">
                <div className="image">
                  <i className="uil uil-calendar-alt"></i>
                </div>
                <div className="details">
                  <h4>{ContactData.DOB || "22/01/2021"}</h4>
                  <h5>Year of Estimation</h5>
                </div>
              </div>
              <div className="list">
                <div className="image">
                  <i className="uil uil-location-point"></i>
                </div>
                <div className="details">
                  <h4>
                    {ContactData.Address || `Chennai , T-Nagar,Tamilnadu`}
                  </h4>
                  <h5>Address</h5>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#003253"
              fill-opacity="1"
              d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Box-2 */}
        <div className="box-2">
          <div className="our_service">
            <div className="service_title">
              <h4>Our Services</h4>
            </div>

            <div className="service_lists">
              <div className="list">
                <div className="service_image">
                  <img
                    src={ServiceData.serviceImage || frontEnd}
                    alt="frontEnd"
                  />
                </div>
                <div className="service1_title">
                  <h4>{ServiceData.serviceTitle || "FrontEnd Development"}</h4>
                </div>
                <div className="service_detail">
                  <p>
                    {ServiceData.serviceSummary ||
                      `   Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptas maxime sapiente dolorum nemo nobis eveniet quaerat
                    provident rem ut enim esse, necessitatibus praesentium
                    voluptatum nam.`}
                  </p>
                </div>
                <div className="service_cost">
                  <button>Rs 15000</button>
                </div>
              </div>
              <div className="list">
                <div className="service_image">
                  <img src={backend} alt="frontEnd" />
                </div>
                <div className="service1_title">
                  <h4>BackEnd Development</h4>
                </div>
                <div className="service_detail">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo asperiores voluptates ad eius quam, voluptatem vitae
                    tempore, consectetur impedit dolorem nobis porro repudiandae
                    natus! Vel!
                  </p>
                </div>
                <div className="service_cost">
                  <button>Rs 18000</button>
                </div>
              </div>
              <div className="list">
                <div className="service_image">
                  <img src={wordpress} alt="wordpress" />
                </div>
                <div className="service1_title">
                  <h4>WordPress Development</h4>
                </div>
                <div className="service_detail">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo asperiores voluptates ad eius quam, voluptatem vitae
                    tempore, consectetur impedit dolorem nobis porro repudiandae
                    natus! Vel!
                  </p>
                </div>
                <div className="service_cost">
                  <button>Rs 10000</button>
                </div>
              </div>
              <div className="list">
                <div className="service_image">
                  <img src={Ecommerse} alt="ecommerse" />
                </div>
                <div className="service1_title">
                  <h4>E-commerce Website </h4>
                </div>
                <div className="service_detail">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo asperiores voluptates ad eius quam, voluptatem vitae
                    tempore, consectetur impedit dolorem nobis porro repudiandae
                    natus! Vel!
                  </p>
                </div>
                <div className="service_cost">
                  <button>Rs 35000</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Box-3 */}
        <svg
          className="svg_top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#003253"
            fill-opacity="1"
            d="M0,64L34.3,85.3C68.6,107,137,149,206,165.3C274.3,181,343,171,411,160C480,149,549,139,617,160C685.7,181,754,235,823,245.3C891.4,256,960,224,1029,197.3C1097.1,171,1166,149,1234,122.7C1302.9,96,1371,64,1406,48L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <div className="box-3">
          <div className="qrCode_container">
            <div className="qrcode_title">
              <h4>
                QR Code <img src={qr3} alt="img" />
              </h4>
            </div>

            <div className="illustration1">
              <img src={qr2} alt="qr" />
            </div>
            <div className="illustration2">
              <img src={qr1} alt="qr" />
            </div>
            <div className="qrCode_image">
              <img src={qrCode} alt="qrs" />
            </div>
          </div>
        </div>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#003253"
            fill-opacity="1"
            d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,149.3C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        {/* Box-4 */}
        <div className="box-4">
          <div className="product_container">
            <div className="product_title">
              <h4>Our Products</h4>
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
                  <button>
                    Rs : <span>8000</span>
                  </button>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={ecommerse} alt="ecommerse" />

                <div className="title">
                  <h4>E-Commerse Portal</h4>
                  <button>
                    Rs : <span>15000</span>
                  </button>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={cloud} alt="cloud" />

                <div className="title">
                  <h4>Cloud Billing Software</h4>
                  <button>
                    Rs : <span>20000</span>
                  </button>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={crm} alt="crm" />

                <div className="title">
                  <h4>SASS CRM</h4>
                  <button>
                    Rs : <span>5000</span>
                  </button>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
              <div className="box">
                <img src={jobPortal} alt="jobPortal" />

                <div className="title">
                  <h4>Job Portal</h4>
                  <button>
                    Rs : <span>8000</span>
                  </button>
                </div>
                <div className="product_summary">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae expedita illo totam, corrupti est impedit!
                  </p>
                </div>
              </div>
            </Slide>
          </div>
        </div>

        {/* Box-5 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#003253"
            fill-opacity="1"
            d="M0,192L480,64L960,224L1440,64L1440,320L960,320L480,320L0,320Z"
          ></path>
        </svg>
        <div className="box-5">
          <div className="testimonial_container">
            <div className="testimonial_title">
              <h4>Testimonials</h4>
            </div>
            <div className="testimonial_details">
              <Slide
                {...properties2}
                slidesToScroll={1}
                slidesToShow={1}
                indicators={true}
                autoplay
              >
                <div className="slide_1">
                  <img src={logo} />

                  <div className="details">
                    <p className="name">Marry</p>
                    <small>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt dolores maiores nam quisquam magni provident labore
                      laboriosam asperiores culpa molestiae!
                    </small>
                  </div>
                </div>
                <div className="slide_1">
                  <img src={logo} />
                  <div className="details">
                    <p className="name">Punitha</p>
                    <small>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt dolores maiores nam quisquam magni provident labore
                      laboriosam asperiores culpa molestiae!
                    </small>
                  </div>
                </div>
                <div className="slide_1">
                  <img src={logo} />
                  <div className="details">
                    <p className="name">Janani</p>
                    <small>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt dolores maiores nam quisquam magni provident labore
                      laboriosam asperiores culpa molestiae!
                    </small>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#003253"
            fill-opacity="1"
            d="M0,192L480,64L960,224L1440,64L1440,0L960,0L480,0L0,0Z"
          ></path>
        </svg>

        {/* //FeedBack */}
        <div className="box-6">
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
        </div>
        {/* /Enquire */}
        <div className="box-7">
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
        </div>

        <div className="box-8">
          {/* Copyrights */}
          <div className="copyright">
            <p>Copyright Reserved &copy; 2021 DigitalCard.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
