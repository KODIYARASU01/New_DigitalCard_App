import React from "react";
import "./DigitalCard3.scss";
import banner from "../../assets/Background/11.jpg";
import logo from "../../assets/avatar_2.jpeg";
import qrCode1 from "../../assets/Social Medias/qrCode1.gif";
import share1 from "../../assets/Social Medias/share1.png";
import facebook from "../../assets/Social Medias/f.gif";
import insta from "../../assets/Social Medias/insta.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import location from "../../assets/Social Medias/location.gif";
import gmail_image from "../../assets/svg/email1.svg";
import agmail_image from "../../assets/svg/email2.svg";
import calendar_image from '../../assets/svg/calendar.svg';
import address_image from '../../assets/svg/address.svg';
import gmail from "../../assets/Social Medias/gmail.gif";
import agmail from "../../assets/Social Medias/agmail.gif";
import calling from '../../assets/svg/calling.svg'
import running from "../../assets/Social Medias/running.gif";
import phone_image from "../../assets/svg/call_us.svg";
import phone_image2 from "../../assets/svg/call_us2.svg";
import aphone from "../../assets/Social Medias/aphone.gif";
import phone from "../../assets/Social Medias/phone.gif";
import address from "../../assets/Social Medias/address.gif";
import est from '../../assets/Social Medias/est.gif'
const DigitalCard3 = () => {
  return (
    <>
      <div className="digitalcard3_container">
        <div className="card3">
          <div className="basic_details">
            <div className="share_actions">
              <img src={share1} alt="share" />
              <img src={qrCode1} alt="code" />
            </div>
            <div className="banner">
              <img src={banner} alt="banner" />
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="content">
              <div className="author">
                <h4>MR JAYAKUMAR </h4>
              </div>
              <div className="profession">
                <h5>Aritistech India Private Limited</h5>
              </div>
              <div className="summary">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet voluptate, quo eligendi adipisci quibusdam odit
                  voluptatum esse quasi officiis, accusantium doloremque totam
                  nobis sit repudiandae nemo assumenda, praesentium est porro.
                </p>
              </div>

              <div className="social_medias">
                <img src={facebook} alt="facebook" />
                <img src={whatsup} alt="whatsup" />
                <img src={insta} alt="Insta" />
                <img src={twiter} alt="Twiter" />
                <img src={linkedin} alt="LinkedIn" />
                <img src={location} alt="location" />
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,64L40,74.7C80,85,160,107,240,144C320,181,400,235,480,229.3C560,224,640,160,720,154.7C800,149,880,203,960,192C1040,181,1120,107,1200,64C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="contact_details">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,224L24,197.3C48,171,96,117,144,101.3C192,85,240,107,288,112C336,117,384,107,432,133.3C480,160,528,224,576,256C624,288,672,288,720,277.3C768,267,816,245,864,229.3C912,213,960,203,1008,197.3C1056,192,1104,192,1152,181.3C1200,171,1248,149,1296,160C1344,171,1392,213,1416,234.7L1440,256L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
              ></path>
            </svg>
            <div className="contact_title">
              <img src={calling} alt="calling" />
              <h4>Intract With Us</h4>
            </div>

            <div className="lists">
              <div className="list">
                <img src={gmail_image} alt="email" />
                <div className="column">
                  <h4>Kodiyarasu01@gmail.com</h4>
                  <h5>Email</h5>
                </div>
              </div>
              <div className="list color-1">
                <img src={agmail_image} alt="email" />
                <div className="column">
                  <h4>akodi92@gmail.com</h4>
                  <h5>Alternate Email</h5>
                </div>
              </div>
              <div className="list">
                <img src={phone_image} alt="email" />
                <div className="column">
                  <h4>+91 8825457794</h4>
                  <h5>Mobile Number</h5>
                </div>
              </div>
              <div className="list">
                <img src={phone_image2} alt="email" />
                <div className="column">
                  <h4>+91 1234567890</h4>
                  <h5>Alternative MobileNumber</h5>
                </div>
              </div>
              <div className="list">
                <img src={calendar_image} alt="est" />
                <div className="column">
                  <h4> 2021</h4>
                  <h5>Year Of Estimation</h5>
                </div>
              </div>
              <div className="list">
                <img src={address_image} alt="email" />
                <div className="column">
                  <h4> Chennai , T-Nagar,Tamil Nadu</h4>
                  <h5>Address</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalCard3;
