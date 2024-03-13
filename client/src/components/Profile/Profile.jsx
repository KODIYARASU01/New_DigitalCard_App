import React, { useState, useEffect, useRef } from "react";
import "./Profile.scss";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Forms from "./Forms";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import DemoCard from "./VCards/DemoCard";

// import Profile_details from "../Profile_details";

const UserProfile = ({ userDetail, setUserDetail }) => {
  const { currentUser,loading,error } = useSelector((state) => state.user);
  let [show, setShow] = useState(false);
  let { id } = useParams();
  let [slideClose, setSlideShow] = useState(false);
  let [basicForm, setBasicForm] = useState(true);
  let [contactForm, setContactForm] = useState(false);
  let [serviceForm, setServiceForm] = useState(false);
  let [productForm, setProductForm] = useState(false);
  let [galleryForm, setGalleryForm] = useState(false);
  let [socialMediaForm, setSocialMediaForm] = useState(false);
  let [testimonialForm, setTestimonialForm] = useState(false);

  //Basic Detail form states:
  let [banner, setBanner] = useState();
  let [logo, setLogo] = useState();
  let [fullName, setFullName] = useState();
  let [profession, setProfession] = useState();
  let [summary, setSummary] = useState();

  //Contact Detail form States:

  let [Email, setEmail] = useState();
  let [AlternateEmail, setAlternateEmail] = useState();
  let [MobileNumber, setMobileNumber] = useState();
  let [AlternateMobileNumber, setAlternateMobileNumber] = useState();
  let [DOB, setDOB] = useState(new Date());
  let [Address, setAddress] = useState();

  //Service etail form states:

  let [serviceImage, setServiceImage] = useState("");
  console.log(serviceImage);
  let [serviceTitle, setServiceTitle] = useState();
  let [serviceSummary, setServiceSummary] = useState();

  //Product detail form states:
  let [productImage, setProductImage] = useState();
  let [productTitle, setProductTitle] = useState();
  let [productReleaseDate, setProductReleaseDate] = useState();
  let [productSummary, setProductSummary] = useState();

  //Gallery:
  let [galleryImage, setGalleryImage] = useState();
  let [videoURL, setVideoURL] = useState();

  //SOcialMedia :

  let [Facebook, setFacebook] = useState();
  let [LinkedIn, setLinkedIn] = useState();
  let [WhatsUp, setWhatsUp] = useState();
  let [Instagram, setInstagram] = useState();
  let [Twiter, setTwiter] = useState();

  //Testimonial:
  let [clientImage, setClientImage] = useState();
  let [clientName, setClientName] = useState();
  let [clientFeedbackDate, setClientFeedbackDate] = useState();
  let [clientFeedback, setClientFeedback] = useState();
  //Fetch data from mongoDb:

  let[ID,setID]=useState([]);

  let [BasicData, setBasicData] = useState([]);
  // let [BasicEdit, setBasicEdit] = useState(false);
  let [ContactData, setContactData] = useState([]);

  // let [ContactEdit, setContactEdit] = useState(false);
  let [ServiceData, setServiceData] = useState([]);
  // let [ServiceEdit, setServiceEdit] = useState(false);
  let [ProductData, setProductData] = useState([]);
  // let [ProductEdit, setProductEdit] = useState(false);
  let [GalleryData, setGalleryData] = useState([]);
  // let [GalleryEdit, setGalleryEdit] = useState(false);
  let [SocialMediaData, setSocialMediaData] = useState([]);
  // let [SocialMediaEdit, setSocialMediaEdit] = useState(false);
  let [TestimonialData, setTestimonialData] = useState([]);
  // let [TestimonialEdit, setTestimonialEdit] = useState(false);


  return (
    <>
      <div className="profile_container">
        <Sidebar
          className="sidebar"
          slideClose={slideClose}
          setSlideShow={setSlideShow}
          basicForm={basicForm}
          serviceForm={serviceForm}
          contactForm={contactForm}
          productForm={productForm}
          galleryForm={galleryForm}
          socialMediaForm={socialMediaForm}
          testimonialForm={testimonialForm}
          setBasicForm={setBasicForm}
          setServiceForm={setServiceForm}
          setContactForm={setContactForm}
          setProductForm={setProductForm}
          setGalleryForm={setGalleryForm}
          setSocialMediaForm={setSocialMediaForm}
          setTestimonialForm={setTestimonialForm}
        />
        <Forms
          className="forms"
          slideClose={slideClose}
          setSlideShow={setSlideShow}
          basicForm={basicForm}
          serviceForm={serviceForm}
          contactForm={contactForm}
          productForm={productForm}
          galleryForm={galleryForm}
          socialMediaForm={socialMediaForm}
          testimonialForm={testimonialForm}
          setBasicForm={setBasicForm}
          setserviceForm={setServiceForm}
          setcontactForm={setContactForm}
          setproductForm={setProductForm}
          setGalleryForm={setGalleryForm}
          setSocialMediaForm={setSocialMediaForm}
          setTestimonialForm={setTestimonialForm}
          banner={banner}
          logo={logo}
          fullName={fullName}
          profession={profession}
          summary={summary}
          setBanner={setBanner}
          setLogo={setLogo}
          setFullName={setFullName}
          setProfession={setProfession}
          setSummary={setSummary}
          //contact
          Email={Email}
          AlternateEmail={AlternateEmail}
          MobileNumber={MobileNumber}
          AlternateMobileNumber={AlternateMobileNumber}
          DOB={DOB}
          Address={Address}
          setEmail={setEmail}
          setAlternateEmail={setAlternateEmail}
          setMobileNumber={setMobileNumber}
          setAlternateMobileNumber={setAlternateMobileNumber}
          setDOB={setDOB}
          setAddress={setAddress}
          //Service
          serviceImage={serviceImage}
          serviceTitle={serviceTitle}
          serviceSummary={serviceSummary}
          setServiceImage={setServiceImage}
          setServiceTitle={setServiceTitle}
          setServiceSummary={setServiceSummary}
          //Product:
          productImage={productImage}
          productTitle={productTitle}
          productReleaseDate={productReleaseDate}
          productSummary={productSummary}
          setProductImage={setProductImage}
          setProductTitle={setProductTitle}
          setProductReleaseDate={setProductReleaseDate}
          setProductSummary={setProductSummary}
          //Gallery
          galleryImage={galleryImage}
          videoURL={videoURL}
          setGalleryImage={setGalleryImage}
          setVideoURL={setVideoURL}
          //Social Media:

          Facebook={Facebook}
          LinkedIn={LinkedIn}
          WhatsUp={WhatsUp}
          Instagram={Instagram}
          Twiter={Twiter}
          setFacebook={setFacebook}
          setLinkedIn={setLinkedIn}
          setWhatsUp={setWhatsUp}
          setInstagram={setInstagram}
          setTwiter={setTwiter}
          //Testimonial

          clientImage={clientImage}
          clientName={clientName}
          clientFeedbackDate={clientFeedbackDate}
          clientFeedback={clientFeedback}
          setClientImage={setClientImage}
          setClientName={setClientName}
          setClientFeedbackDate={setClientFeedbackDate}
          setClientFeedback={setClientFeedback}
          //Fetch data from mongoDb:
          ID={ID}
          setID={setID}
          BasicData={BasicData}
          setBasicData={setBasicData}
          ContactData={ContactData}
          setContactData={setContactData}
          ServiceData={ServiceData}
          setServiceData={setServiceData}
          ProductData={setProductData}
          setProductData={setProductData}
          GalleryData={GalleryData}
          setGalleryData={setGalleryData}
          SocialMediaData={SocialMediaData}
          setSocialMediaData={setSocialMediaData}
          TestimonialData={TestimonialData}
          setTestimonialData={setTestimonialData}
        />
        <DemoCard
          BasicData={BasicData}
          setBasicData={setBasicData}
          ContactData={ContactData}
          setContactData={setContactData}
          ServiceData={ServiceData}
          setServiceData={setServiceData}
          ProductData={ProductData}
          setProductData={setProductData}
          GalleryData={GalleryData}
          setGalleryData={setGalleryData}
          SocialMediaData={SocialMediaData}
          setSocialMediaData={setSocialMediaData}
          TestimonialData={TestimonialData}
          setTestimonialData={setTestimonialData}
        />
      </div>
      <div className="profile_details">
        <div className="profile_image">
          <img
            onClick={() => setShow(!show)}
            src={currentUser.profile}
            alt="profile"
          />
        </div>
        {/* {show ? (
          <div className="details">
            <Profile_details userDetail={userDetail} />
          </div>
        ) : (
          ""
        )} */}
      </div>
    </>
  );
};

export default UserProfile;
