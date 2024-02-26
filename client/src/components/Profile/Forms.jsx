import React from "react";
import "./Form.scss";
import user from "../../assets/Social Medias/user1.gif";
import background from "../../assets/banner.jpg";
import upload from "../../assets/Social Medias/addImage.gif";

import f from "../../assets/Social Medias/f.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import insta from "../../assets/Social Medias/insta.gif";
import clientProfile from "../../assets/avatar_2.jpeg";
const Forms = ({
  slideClose,
  setSlideShow,
  basicForm,
  serviceForm,
  contactForm,
  productForm,
  galleryForm,
  socialMediaForm,
  testimonialForm,
}) => {
  return (
    <>
      <div
        className="forms_container"
        id={slideClose ? "Formclose" : "Formopen"}
      >
        {/* //Form 1 Basic Details */}
        {basicForm === true ? (
          <div className="Form1_container">
            <div className="Form_title">
              <h4>Basic Detail Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //Banner */}
              <div className="form_group">
                <label htmlFor="banner">
                  Upload Banner Image
                  <img
                    className="banner"
                    src={background}
                    alt=""
                    name="banner"
                  />
                  <img
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="banner"
                  />
                </label>

                <input type="file" name="banner" id="banner" />
              </div>
              {/* Logo */}
              <div className="form_group">
                <label htmlFor="logo">
                  Upload Logo Image
                  <img src={clientProfile} alt="" name="logo" className="logo" />
                  <img
                    src={upload}
                    alt="upload"
                    className="upload_logo"
                    name="logo"
                  />
                </label>

                <input type="file" name="logo" id="logo" />
              </div>
              {/* Author */}
              <div className="form_group">
                <label htmlFor="name">Enter FullName</label>
                <input
                  type="text"
                  placeholder="Eg : John S"
                  name="name"
                  id="name"
                />
              </div>
              {/* Profession  */}
              <div className="form_group">
                <label htmlFor="name">Enter Your Profession</label>
                <input
                  type="text"
                  placeholder="Eg : Web Developer"
                  name="name"
                  id="name"
                />
              </div>
              <div className="form_group">
                <label htmlFor="summary">Summary</label>
                <textarea
                  name="summary"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Write something about your profession"
                ></textarea>
              </div>

              <div className="form_submit">
                <input type="submit" value="Upload Basic Details" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}

        {/* //Form 2 contact Details */}
        {contactForm === true ? (
          <div className="Form2_container">
            <div className="Form_title">
              <h4>Contact Detail's Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* Email */}
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Eg : abc@gmail.com"
                  name="email"
                  id="email"
                />
              </div>
              {/* Alternate Email */}
              <div className="form_group">
                <label htmlFor="AlternateEmail">Alternate Email</label>
                <input
                  type="email"
                  placeholder="Eg : abc@gmail.com"
                  name="AlternateEmail"
                  id="AlternateEmail"
                />
              </div>
              {/* Mobile Number  */}
              <div className="form_group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Eg : +91 6547987845"
                  name="mobile"
                  id="mobile"
                />
              </div>
              {/* Mobile Number  */}
              <div className="form_group">
                <label htmlFor="AlternateMobile">Alternate Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Eg : +91 6547987845"
                  name="AlternateMobile"
                  id="AlternateMobile"
                />
              </div>
              {/* Date of Birth  */}
              <div className="form_group">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="date"
                  placeholder="Eg : 26/01/2000"
                  name="dob"
                  id="dob"
                />
              </div>
              <div className="form_group">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Write your location Address"
                ></textarea>
              </div>

              <div className="form_submit">
                <input type="submit" value="Upload Contact Details" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 3 service Details */}
        {serviceForm === true ? (
          <div className="Form3_container">
            <div className="Form_title">
              <h4>Our Service Detail Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //service image */}
              <div className="form_group">
                <label htmlFor="serviceImage">
                  Upload Service Image
                  <img
                    className="serviceImage"
                    src={background}
                    alt=""
                    name="serviceImage"
                  />
                  <img
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="banner"
                  />
                </label>

                <input type="file" name="serviceImage" id="serviceImage" />
              </div>

              {/* serviice Title */}
              <div className="form_group">
                <label htmlFor="serviceTitle">Service Title</label>
                <input
                  type="text"
                  placeholder="Eg : Web Development"
                  name="serviceTitle"
                  id="serviceTitle"
                />
              </div>
              <div className="form_group">
                <label htmlFor="serviceSummary">Service Summary</label>
                <textarea
                  name="serviceSummary"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Write something about this service"
                ></textarea>
              </div>

              <div className="form_submit">
                <input type="submit" value="Upload Service" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 4 product Details */}
        {productForm === true ? (
          <div className="Form4_container">
            <div className="Form_title">
              <h4>Our Product Detail Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="productImage">
                  Upload Product Image
                  <img
                    className="productImage"
                    src={background}
                    alt=""
                    name="productImage"
                  />
                  <img
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="productImage"
                  />
                </label>

                <input type="file" name="productImage" id="productImage" />
              </div>

              {/* product Title */}
              <div className="form_group">
                <label htmlFor="productTitle">Product Title</label>
                <input
                  type="text"
                  placeholder="Eg : Ecommerse Portal"
                  name="productTitle"
                  id="productTitle"
                />
                {/* Release data */}

                <label htmlFor="releaseDate">Relesed Date</label>
                <input type="date" name="releaseDate" id="releaseDate" />
              </div>

              <div className="form_group">
                <label htmlFor="productSummary">Product UseCase Summary</label>
                <textarea
                  name="productSummary"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Write something about this Product"
                ></textarea>
              </div>

              <div className="form_submit">
                <input type="submit" value="Upload Product" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form5 Gallery upload */}
        {galleryForm === true ? (
          <div className="Form5_container">
            <div className="Form_title">
              <h4>Gallery Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="galleryImage">
                  Upload Gallery Image
                  <img
                    className="galleryImage"
                    src={background}
                    alt=""
                    name="galleryImage"
                  />
                  <img
                    src={upload}
                    alt="galleryImage"
                    className="upload"
                    name="galleryImage"
                  />
                </label>

                <input type="file" name="galleryImage" id="galleryImage" />
              </div>

              <div className="form_submit">
                <input type="submit" value="Upload Gallery" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form6 video upload */}
        {galleryForm === true ? (
          <div className="Form6_container">
            <div className="Form_title">
              <h4>Video Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* Vieo upload link */}
              <div className="form_group">
                <label htmlFor="videoLink">Paste video Embeded Link</label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="videoLink"
                  id="videoLink"
                />
              </div>

              <div className="form_submit">
                <input type="submit" value="Upload Video" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form7 social media link upload */}
        {socialMediaForm === true ? (
          <div className="Form7_container">
            <div className="Form_title">
              <h4>Social Media Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* Vieo upload link */}
              <div className="form_group">
                <label htmlFor="facebook">
                  <img src={f} alt="facebook" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="facebook"
                  id="facebook"
                />
              </div>
              <div className="form_group">
                <label htmlFor="linkedin">
                  <img src={linkedin} alt="LinkedIn" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="linkedin"
                  id="linkedin"
                />
              </div>
              <div className="form_group">
                <label htmlFor="whatsup">
                  <img src={whatsup} alt="WhatsUp" />
                </label>
                <input
                  type="tel"
                  placeholder="Eg : +91 2456456446"
                  name="whatsup"
                  id="whatsup"
                />
              </div>
              <div className="form_group">
                <label htmlFor="insta">
                  <img src={insta} alt="Insta" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="insta"
                  id="insta"
                />
              </div>
              <div className="form_group">
                <label htmlFor="twiter">
                  <img src={twiter} alt="Twiter" />
                </label>
                <input
                  type="text"
                  placeholder="Eg : http://shorts.mp4"
                  name="twiter"
                  id="twiter"
                />
              </div>
              <div className="form_submit">
                <input type="submit" value="Upload Social Media's" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 8 Testimonial Details */}
        {testimonialForm === true ? (
          <div className="Form8_container">
            <div className="Form_title">
              <h4>Testimonial Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //service image */}
              <div className="form_group">
                <label htmlFor="testimonialImage">
                  Upload Client Profile Image
                  <img
                    className="testimonialImage"
                    src={clientProfile}
                    alt=""
                    name="testimonialImage"
                  />
                  <img
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="banner"
                  />
                </label>

                <input
                  type="file"
                  name="testimonialImage"
                  id="testimonialImage"
                />
              </div>

              {/* serviice Title */}
              <div className="form_group">
                <label htmlFor="clientName">Client FullName</label>
                <input
                  type="text"
                  placeholder="Eg : John K"
                  name="clientName"
                  id="clientName"
                />
                <label htmlFor="feedbackDate">Feedback Date</label>
                <input
                  type="date"
                  // placeholder="Eg : John K"
                  name="feedbackDate"
                  id="feedbackDate"
                />
              </div>
              <div className="form_group">
                <label htmlFor="clientSummary">Client Feed Back</label>
                <textarea
                  name="clientSummary"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Paste out client feedback details"
                ></textarea>
              </div>

              <div className="form_submit">
                <input type="submit" value="Upload Testimonial" />
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Forms;
