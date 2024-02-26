import { useEffect, useState } from "react";
import "./DigitalCard.scss";
import Wave from "react-wavify";
import banner from "../../assets/banner.jpg";
import profile from "../../assets/profile.png";
import testimonial from "../../assets/avatar_2.jpeg";
import facebook from "../../assets/Social Medias/f.gif";
import insta from "../../assets/Social Medias/insta.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import gmail from "../../assets/Social Medias/gmail.gif";
import agmail from "../../assets/Social Medias/agmail.gif";
// import delivery from "../../assets/Social Medias/delivery.gif";
import aphone from "../../assets/Social Medias/aphone.gif";
import phone from "../../assets/Social Medias/phone.gif";
import date from "../../assets/Social Medias/date.gif";
import address from "../../assets/Social Medias/address.gif";
// import Marquee from "react-fast-marquee";
// import service1 from '../../assets/svg/service1.svg';
import ScrollCarousel from "scroll-carousel";

import gallery from "../../assets/gallery/1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//products carosel :
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../../../node_modules/scroll-carousel/dist/scroll.carousel.min.css';
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

  new ScrollCarousel(".my-carousel", {
    autoplay: true,
    smartSpeed: true,
    direction: 'ltr'
  });

  const buttonStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "none",
    border: "0px",
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/nolan/64/back.png"
          alt="back"
        />
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/nolan/64/forward.png"
          alt="forward"
        />
      </button>
    ),
  };
  return (
    <>
      <div className="digitalcard_container">
        <div className="card_box" style={{border:"2px solid white"}}>
          {/* First */}
          <div className="basic_details">
            <div className="banner_image">
              <img src={banner} alt="banner" />
              <Wave className="wave" fill="url(#gradient)">
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="10%" stopColor="#93F9B9" />
                    <stop offset="90%" stopColor="#93F9B9" />
                  </linearGradient>
                </defs>
              </Wave>
            </div>
            <div className="profile_image">
              <img src={testimonial} alt="profile" />
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

          <div className="service_details">
            <div className="service_box">
              <div className="service_pic">
                <img src={banner} alt="service1" />
              </div>
              <div className="service_heading">
                <h3>Web Development</h3>
              </div>
              <div className="service_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia saepe amet obcaecati adipisci minus eos, sequi soluta
                reprehenderit aspernatur vero pariatur non.
              </div>
            </div>
            <div className="service_box">
              <div className="service_pic">
                <img src={banner} alt="service1" />
              </div>
              <div className="service_heading">
                <h3>WordPress Deveopment</h3>
              </div>
              <div className="service_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia saepe amet obcaecati adipisci minus eos, sequi soluta
                reprehenderit aspernatur vero pariatur non.
              </div>
            </div>
            <div className="service_box">
              <div className="service_pic">
                <img src={banner} alt="service1" />
              </div>
              <div className="service_heading">
                <h3>Bussiness Deveopment</h3>
              </div>
              <div className="service_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia saepe amet obcaecati adipisci minus eos, sequi soluta
                reprehenderit aspernatur vero pariatur non.
              </div>
            </div>
            <div className="service_box">
              <div className="service_pic">
                <img src={banner} alt="service1" />
              </div>
              <div className="service_heading">
                <h3>Ecommerce Website Deveopment</h3>
              </div>
              <div className="service_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia saepe amet obcaecati adipisci minus eos, sequi soluta
                reprehenderit aspernatur vero pariatur non.
              </div>
            </div>
          </div>
          {/* Fourth services */}
          <div className="gallery_title">
            <h4>Gallery</h4>
          </div>

          <div className="gallery_details">
   
            <div className="my-carousel">
              <div className="my-slide">
                {" "}
                <img src={gallery} alt="" />
              </div>
              <div className="my-slide">
                {" "}
                <img src={gallery} alt="" />
              </div>
              <div className="my-slide">
                {" "}
                <img src={gallery} alt="" />
              </div>
            </div>
          </div>

          {/* Fifth services */}
          <div className="testimonial_title">
            <h4>Our Customer Feedback</h4>
          </div>

          <div className="testimonial_details">
            <Carousel
              axis="horizontal"
              autoPlay="true"
              showArrows="true"
              infiniteLoop="true"
              className="carousel"
            >
              <div className="slide_1">
                <img src={testimonial} />
                <p className="name">Marial Joes</p>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  dolores maiores nam quisquam magni provident labore laboriosam
                  asperiores culpa molestiae!
                </small>
              </div>
              <div className="slide_1">
                <img src={testimonial} />
                <p className="name">Punitha</p>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  dolores maiores nam quisquam magni provident labore laboriosam
                  asperiores culpa molestiae!
                </small>
              </div>
              <div className="slide_1">
                <img src={testimonial} />
                <p className="name">Varsha</p>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  dolores maiores nam quisquam magni provident labore laboriosam
                  asperiores culpa molestiae!
                </small>
              </div>
            </Carousel>
          </div>
          {/* Sixth services */}
          <div className="product_title">
            <h4> Our Products</h4>
          </div>

          <div className="product_details">
            <Slide {...properties}>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${banner})` }}></div>
                <span>Taxi Booking</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nostrum non neque, quia aut natus ex vero nobis rerum
                  nihil!
                </p>
              </div>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${banner})` }}></div>
                <span>E-commerce portal</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nostrum non neque, quia aut natus ex vero nobis rerum
                  nihil!
                </p>
              </div>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${banner})` }}></div>
                <span>Cloud billing software</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nostrum non neque, quia aut natus ex vero nobis rerum
                  nihil!
                </p>
              </div>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${banner})` }}></div>
                <span>Sass CRM</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nostrum non neque, quia aut natus ex vero nobis rerum
                  nihil!
                </p>
              </div>
              <div className="each-slide-effect">
                <div style={{ backgroundImage: `url(${banner})` }}></div>
                <span>Job portal</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores nostrum non neque, quia aut natus ex vero nobis rerum
                  nihil!
                </p>
              </div>
            </Slide>
          </div>
          {/* Seventh services */}
          {/* <div className="feedback_title">
            <h4> FeedBack</h4>
          </div> */}

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

          {/* //Enquiry page */}

          <div className="enquiry">
            <div className="enquiry_title">
              <h4>Enquiry Form</h4>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/questions.png"
                alt="questions"
              />
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
            <p>Copyright Reserved &copy; 2024 DigitalCard.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalCard;
