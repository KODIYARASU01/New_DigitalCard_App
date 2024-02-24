import React, { useEffect, useState } from "react";
import "./DigitalCard.scss";
import Wave from "react-wavify";
import banner from "../../assets/banner.jpg";
import profile from "../../assets/profile.png";
import facebook from "../../assets/Social Medias/f.gif";
import insta from "../../assets/Social Medias/insta.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import gmail from "../../assets/Social Medias/gmail.gif";
import agmail from "../../assets/Social Medias/agmail.gif";
import delivery from "../../assets/Social Medias/delivery.gif";
import aphone from "../../assets/Social Medias/aphone.gif";
import phone from "../../assets/Social Medias/phone.gif";
import date from "../../assets/Social Medias/date.gif";
import address from "../../assets/Social Medias/address.gif";
import Marquee from "react-fast-marquee";
const DigitalCard = () => {
  function AutoWriteText() {
    const [text, setText] = useState("");
    const words = [
      "FrontEnd Developer",
      "React Js Developer",
      "Backend Developer",
      "MERN Stack Developer",
    ]; // Words to cycle through
    const intervalTime = 1000; // Interval time in milliseconds

    useEffect(() => {
      const interval = setInterval(() => {
        setText(words[Math.floor(Math.random() * words.length)]); // Randomly select a word
      }, intervalTime);

      return () => clearInterval(interval);
    }, []);

    return <div>{text}</div>;
  }
  return (
    <>
      <div className="digitalcard_container">
        <div className="card_box">
          {/* First */}
          <div className="basic_details">
            <div className="banner_image">
              <img src={banner} alt="banner" />
              <Wave className="wave" fill="url(#gradient)">
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="10%" stopColor="#85FFBD" />
                    <stop offset="90%" stopColor="#FFFB7D" />
                  </linearGradient>
                </defs>
              </Wave>
            </div>
            <div className="profile_image">
              <img src={profile} alt="profile" />
            </div>

            <div className="user_details">
              <h3>
                Kodiyarasu <span>C</span>
              </h3>
              <p>
                {" "}
                <AutoWriteText />
              </p>
            </div>

            <div className="social_medias">
              <a href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={whatsup} alt="whatsup" />
              </a>
              <a href="#">
                <img src={insta} alt="insta" />
              </a>

              <a href="#">
                <img src={twiter} alt="twiter" />
              </a>
            </div>
            <div className="profile_summary">
              <p>
                A fashion influencer is an individual who has established
                credibility in the fashion industry and has a significant
                following on social media platforms. These individuals use their
                influence to impact the purchasing decisions and style choices
                of their followers. Fashion influencers often collaborate with
                brands, share outfit inspiration, and provide insights into the
                latest trends.
              </p>
            </div>
          </div>
          {/* Second */}
          <div className="contact_title">
              <h4>Contact</h4>
            </div>
          <div className="contact_details">
         
            <div className="box">
                <div className="content">
                    <h4>kodiyarasu01@gmail.com</h4>
                    <p>Email</p>
                </div>
                <div className="icon">
                    <img src={gmail} alt="gmail" />
                </div>
                <div className="anime_icon">
                  {/* <Marquee direction="right" className="marquee"  >
                  <img src={delivery} alt="delivey" />
                  </Marquee> */}
           
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <h4>akodi92@gmail.com</h4>
                    <p>Alternate Email</p>
                </div>
                <div className="icon">
                    <img src={agmail} alt="gmail" />
                </div>
                <div className="anime_icon">
                  {/* <Marquee direction="right" className="marquee">
                  <img src={delivery} alt="delivey" />
                  </Marquee> */}
           
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <h4>+91 8825457794</h4>
                    <p>Mobile Number</p>
                </div>
                <div className="icon">
                    <img src={phone} alt="phone" />
                </div>
                <div className="anime_icon">
                  {/* <Marquee direction="right" className="marquee">
                  <img src={delivery} alt="delivey" />
                  </Marquee> */}
           
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <h4>+91 8248489863</h4>
                    <p>Alternate Mobile Number</p>
                </div>
                <div className="icon">
                    <img src={aphone} alt="phone" />
                </div>
                <div className="anime_icon">
                  {/* <Marquee direction="right" className="marquee">
                  <img src={delivery} alt="delivey" />
                  </Marquee> */}
           
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <h4>26/01/2000</h4>
                    <p>Date Of Birth</p>
                </div>
                <div className="icon">
                    <img src={date} alt="date" />
                </div>
                <div className="anime_icon">
                  {/* <Marquee direction="right" className="marquee">
                  <img src={delivery} alt="delivey" />
                  </Marquee> */}
           
                </div>
            </div>
            <div className="box">
                <div className="content">
                    <h4>Ariyalur - TamilNadu</h4>
                    <p>Address</p>
                </div>
                <div className="icon">
                    <img src={address} alt="address" />
                </div>
                <div className="anime_icon">
                  {/* <Marquee direction="right" className="marquee">
                  <img src={delivery} alt="delivey" />
                  </Marquee> */}
           
                </div>
            </div>
          </div>

              {/* Third services */}
              <div className="service_title">
              <h4> Our Services</h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default DigitalCard;
