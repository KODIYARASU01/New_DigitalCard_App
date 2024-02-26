import React, { useState } from "react";
import "./Profile.scss";
import Sidebar from "./Sidebar";
import Forms from "./Forms";

const UserProfile = () => {
  let [slideClose, setSlideShow] = useState(false);

  let [basicForm, setBasicForm] = useState(true);
  let [contactForm, setContactForm] = useState(false);
  let [serviceForm, setServiceForm] = useState(false);
  let [productForm, setProductForm] = useState(false);
  let [galleryForm, setGalleryForm] = useState(false);
  let [socialMediaForm, setSocialMediaForm] = useState(false);
  let [testimonialForm, setTestimonialForm] = useState(false);

  return (
    <div>
      <>
        <div className="profile_container">
          <Sidebar
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
          />
        </div>
      </>
    </div>
  );
};

export default UserProfile;
