import React, { useState } from "react";
import "./DigitalCard2.scss";
import banner from "../../assets/banner.jpg";
import logo from "../../assets/avatar_2.jpeg";
import Wave from "react-wavify";
import facebook from "../../assets/Social Medias/f.gif";
import insta from "../../assets/Social Medias/insta.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import location from "../../assets/Social Medias/location.gif";
import gmail_image from "../../assets/svg/email1.svg";
import agmail_image from "../../assets/svg/email2.svg";
import gmail from "../../assets/Social Medias/gmail.gif";
import agmail from "../../assets/Social Medias/agmail.gif";
import running from "../../assets/Social Medias/running.gif";
import phone_image from "../../assets/svg/call_us.svg";
import phone_image2 from "../../assets/svg/call_us2.svg";
import address_image from "../../assets/svg/location.svg";
import aphone from "../../assets/Social Medias/aphone.gif";
import phone from "../../assets/Social Medias/phone.gif";
import date from "../../assets/Social Medias/date.gif";
import address from "../../assets/Social Medias/address.gif";

import ReactCardFlip from "react-card-flip";
import calling from "../../assets/svg/calling.svg";
import { motion as m } from "framer-motion";
import Marquee from "react-fast-marquee";

let social_media_anime = {
  hide: {
    transition: {
      staggerChildren: 0.7,
      duration: 2,
      type: "ease-in",
      ease: "easeOut",
    },
  },

  show: {
    transition: {
      staggerChildren: 0.7,
      duration: 2,
      repeat: "60",
      type: "ease-in",
      ease: "easeOut",
    },
  },
};

let basic_anime = {
  hide: {
    x: 400,
    opacity: 0,
    transition: {
      staggerChildren: 0.7,
      duration: 1,
      type: "spring",
    },
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
      type: "spring",
    },
  },
};

const DigitalCard2 = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  const handleMouseEnter1 = () => {
    setIsFlipped1(true);
  };

  const handleMouseLeave1 = () => {
    setIsFlipped1(false);
  };
  const handleMouseEnter2 = () => {
    setIsFlipped2(true);
  };

  const handleMouseLeave2 = () => {
    setIsFlipped2(false);
  };
  const handleMouseEnter3 = () => {
    setIsFlipped3(true);
  };

  const handleMouseLeave3 = () => {
    setIsFlipped3(false);
  };
  const handleMouseEnter4 = () => {
    setIsFlipped4(true);
  };

  const handleMouseLeave4 = () => {
    setIsFlipped4(false);
  };
  return (
    <>
      <m.div className="digitalcard2_container">
        <m.div className="card_box">
          {/* First */}
          <m.div
            className="basic_details"
            variants={basic_anime}
            initial="hide"
            whileInView="show"
          >
            <m.div className="banner_image">
              <img src={banner} alt="banner" />
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,154.7C384,128,480,128,576,144C672,160,768,192,864,213.3C960,235,1056,245,1152,213.3C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L16,106.7C32,85,64,43,96,42.7C128,43,160,85,192,101.3C224,117,256,107,288,112C320,117,352,139,384,176C416,213,448,267,480,266.7C512,267,544,213,576,170.7C608,128,640,96,672,85.3C704,75,736,85,768,106.7C800,128,832,160,864,149.3C896,139,928,85,960,74.7C992,64,1024,96,1056,101.3C1088,107,1120,85,1152,106.7C1184,128,1216,192,1248,224C1280,256,1312,256,1344,240C1376,224,1408,192,1424,176L1440,160L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,224L17.1,224C34.3,224,69,224,103,234.7C137.1,245,171,267,206,277.3C240,288,274,288,309,240C342.9,192,377,96,411,80C445.7,64,480,128,514,149.3C548.6,171,583,149,617,160C651.4,171,686,213,720,234.7C754.3,256,789,256,823,250.7C857.1,245,891,235,926,218.7C960,203,994,181,1029,176C1062.9,171,1097,181,1131,202.7C1165.7,224,1200,256,1234,245.3C1268.6,235,1303,181,1337,181.3C1371.4,181,1406,235,1423,261.3L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#0099ff"
                  fill-opacity="1"
                  d="M0,192L21.8,170.7C43.6,149,87,107,131,112C174.5,117,218,171,262,202.7C305.5,235,349,245,393,250.7C436.4,256,480,256,524,218.7C567.3,181,611,107,655,96C698.2,85,742,139,785,154.7C829.1,171,873,149,916,149.3C960,149,1004,171,1047,202.7C1090.9,235,1135,277,1178,256C1221.8,235,1265,149,1309,122.7C1352.7,96,1396,128,1418,144L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
                ></path>
              </svg>
            </m.div>
            <m.div className="profile_image">
              <m.img src={logo} alt="profile" variants={basic_anime} />
            </m.div>

            <m.div className="user_details">
              <m.h3 variants={basic_anime}>
                AristosTech India Private Limited
              </m.h3>
              <Marquee
                direction="left"
                speed={30}
                autoFill={true}
                pauseOnHover={true}
                pauseOnClick="true"
                className="services"
              >
                <p>
                  WordPress Development &nbsp; &nbsp;<span>|</span>
                </p>
                <p>
                  FullStack Development &nbsp; &nbsp;<span>|</span>
                </p>
                <p>
                  E-commerse Web Application &nbsp; &nbsp;<span>|</span>
                </p>
              </Marquee>
            </m.div>

            <m.div className="social_medias" initial="hide" animate="show">
              <m.div className="popular" variants={basic_anime}>
                <a href="#">
                  <m.img src={linkedin} alt="linkedin" />
                </a>
                <a href="#">
                  <m.img src={facebook} alt="facebook" />
                </a>
                <a href="#">
                  <m.img src={location} alt="location" />
                </a>
              </m.div>

              <m.div className="popular" variants={basic_anime}>
                <a href="#">
                  <m.img src={whatsup} alt="whatsup" />
                </a>
                <a href="#">
                  <m.img src={insta} alt="insta" />
                </a>

                <a href="#">
                  <m.img src={twiter} alt="twiter" />
                </a>
              </m.div>
            </m.div>
            <div className="profile_title">
              <h5>About Us</h5>
            </div>
            <m.div className="profile_summary">
              <m.p variants={basic_anime}>
                A fashion influencer is an individual who has established
                credibility in the fashion industry and has a significant
                following on social media platforms. These individuals use their
                influence to impact the purchasing decisions and style choices
                of their followers. Fashion influencers often collaborate with
                brands, share outfit inspiration, and provide insights into the
                latest trends.
              </m.p>
            </m.div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                fill-opacity="1"
                d="M0,224L17.1,224C34.3,224,69,224,103,234.7C137.1,245,171,267,206,277.3C240,288,274,288,309,240C342.9,192,377,96,411,80C445.7,64,480,128,514,149.3C548.6,171,583,149,617,160C651.4,171,686,213,720,234.7C754.3,256,789,256,823,250.7C857.1,245,891,235,926,218.7C960,203,994,181,1029,176C1062.9,171,1097,181,1131,202.7C1165.7,224,1200,256,1234,245.3C1268.6,235,1303,181,1337,181.3C1371.4,181,1406,235,1423,261.3L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
              ></path>
            </svg>
          </m.div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,224L120,197.3C240,171,480,117,720,80C960,43,1200,21,1320,10.7L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
          {/* Second */}
          <m.div className="contact_title">
            <m.h4>Make contact with us</m.h4>
            <img src={calling} alt="" />
          </m.div>
          <m.div className="contact_details">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
              <div
                className="box"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon">
                  <img src={gmail_image} alt="phone" />
                </div>
                <div className="content">
                  <p>Email</p>
                </div>
              </div>
              <div
                className="box1"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon">
                  <img src={gmail} alt="phone" />
                </div>
                <div className="content">
                  <p> kodiyarasu01@gmail.com</p>
                </div>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
              <div
                className="box"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <div className="icon">
                  <img src={agmail_image} alt="phone" />
                </div>
                <div className="content">
                  <p>Alternate Email</p>
                </div>
              </div>
              <div
                className="box1"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <div className="icon">
                  <img src={agmail} alt="phone" />
                </div>
                <div className="content">
                  <p>akodi92@gmail.com</p>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip
              isFlipped={isFlipped2}
              flipDirection="horizontal"
       
            >
              <div
                className="box"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div className="icon">
                  <img src={phone_image} alt="phone" />
                </div>
                <div className="content">
                  <p>Mobile Number</p>
                </div>
              </div>
              <div
                className="box1"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div className="icon">
                  <img src={phone} alt="phone" />
                </div>
                <div className="content">
                  <p>+91 8825457794</p>
                </div>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
              <div
                className="box"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <div className="icon">
                  <img src={phone_image2} alt="phone" />
                </div>
                <div className="content">
                  <p>Alternate Mobile Number</p>
                </div>
              </div>
              <div
                className="box1"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <div className="icon">
                  <img src={aphone} alt="phone" />
                </div>
                <div className="content">
                  <p>+91 1234567890</p>
                </div>
              </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
              <div
                className="box"
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <div className="icon">
                  <img src={address_image} alt="phone" />
                </div>
                <div className="content">
                  <p>Address</p>
                </div>
              </div>
              <div
                className="box1"
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <div className="icon">
                  <img src={address} alt="phone" />
                </div>
                <div className="content">
                  <p>Main Road Sirukadambur</p>
                </div>
              </div>
            </ReactCardFlip>

            <Marquee direction="right" delay="4" className="marquee">
              <img src={running} alt="running" />
            </Marquee>

        
          </m.div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L1440,128L1440,320L0,320Z"></path></svg>
          
        </m.div>
      </m.div>
    </>
  );
};

export default DigitalCard2;
