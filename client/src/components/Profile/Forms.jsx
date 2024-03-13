import React, { useEffect, useRef, useState } from "react";
import "./Form.scss";
import user from "../../assets/Social Medias/user1.gif";
import background from "../../assets/banner.jpg";
import upload from "../../assets/Social Medias/addImage.gif";

import f from "../../assets/Social Medias/f.gif";
import linkedin from "../../assets/Social Medias/linkedin.gif";
import whatsup from "../../assets/Social Medias/whatsup.gif";
import twiter from "../../assets/Social Medias/twiter.gif";
import insta from "../../assets/Social Medias/insta.gif";
import clientProfile from "../../assets/avatar_2.jpg";
import Loader from "../Loader.jsx";
import {
  convertToBase64Basic,
  convertBannerImageToBase64,
  convertServiceImageToBase64,
  convertProductImageToBase64,
  convertGalleryImageToBase64,
  convertTestimonialImageToBase64,
} from "../helper/convert";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let Forms = ({
  slideClose,
  setSlideShow,
  basicForm,
  serviceForm,
  contactForm,
  productForm,
  galleryForm,
  socialMediaForm,
  testimonialForm,
  //Basic
  banner,

  logo,
  fullName,
  profession,
  summary,
  setBanner,
  setLogo,
  setFullName,
  setProfession,
  setSummary,
  //Contact
  Email,
  AlternateEmail,
  MobileNumber,
  AlternateMobileNumber,
  DOB,
  Address,
  setEmail,
  setAlternateEmail,
  setMobileNumber,
  setAlternateMobileNumber,
  setDOB,
  setAddress,
  //Service
  serviceImage,
  serviceTitle,
  serviceSummary,
  setServiceImage,
  setServiceTitle,
  setServiceSummary,
  //Product :
  productImage,
  productTitle,
  productReleaseDate,
  productSummary,
  setProductImage,
  setProductTitle,
  setProductReleaseDate,
  setProductSummary,

  //Gallery
  galleryImage,
  videoURL,
  setGalleryImage,
  setVideoURL,
  //Social media
  Facebook,
  LinkedIn,
  WhatsUp,
  Instagram,
  Twiter,
  setFacebook,
  setLinkedIn,
  setWhatsUp,
  setInstagram,
  setTwiter,
  //Testimonial
  clientImage,
  clientName,
  clientFeedbackDate,
  clientFeedback,
  setClientImage,
  setClientName,
  setClientFeedbackDate,
  setClientFeedback,
  //Fetch form data from database:
  ID,
  setID,
  BasicData,
  setBasicData,
  ContactData,
  setContactData,
  ServiceData,
  setServiceData,
  ProductData,
  setProductData,
  GalleryData,
  setGalleryData,
  SocialMediaData,
  setSocialMediaData,
  TestimonialData,
  setTestimonialData,
}) => {
  // let [BasicData, setBasicData] = useState([]);
  let [BasicEdit, setBasicEdit] = useState(false);
  // let [ContactData, setContactData] = useState([]);
  let [ContactEdit, setContactEdit] = useState(false);
  // let [ServiceData, setServiceData] = useState([]);
  let [ServiceEdit, setServiceEdit] = useState(false);
  // let [ProductData, setProductData] = useState([]);
  let [ProductEdit, setProductEdit] = useState(false);
  // let [GalleryData, setGalleryData] = useState([]);
  let [GalleryEdit, setGalleryEdit] = useState(false);
  // let [SocialMediaData, setSocialMediaData] = useState([]);
  let [SocialMediaEdit, setSocialMediaEdit] = useState(false);
  // let [TestimonialData, setTestimonialData] = useState([]);
  let [TestimonialEdit, setTestimonialEdit] = useState(false);

  let url = import.meta.env.SERVER_LISTENING;

  let [loader2, setLoader2] = useState(false);
  //Fetch while cliking edit button:
  function handleEdit1() {
    // Retrieve token from local storage or wherever it's stored
    const token = localStorage.getItem("token");
    setLoader2(true);
    axios
      .get(`https://server-px9z.onrender.com/basic_detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.result.length > 0) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        if (res.data.result.length <= 0) {
          toast.error("Data not found", {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }
        setID(res.data.result[0]._id)
        setBanner(res.data.result[0].banner);
        setLogo(res.data.result[0].logo);
        setFullName(res.data.result[0].fullName);
        setProfession(res.data.result[0].profession);
        setSummary(res.data.result[0].summary);
        setBasicData(res.data.result[0]);
        setBasicEdit(true);
        setLoader2(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setLoader2(false);
      });
  }
  //Fetch while cliking Contact Button:
  function handleEdit2() {
    setLoader2(true);
    // Retrieve token from local storage or wherever it's stored
    const token = localStorage.getItem("token");
    axios

      .get(`https://server-px9z.onrender.com/contact_detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.getContactDetail.length > 0) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        if (res.data.getContactDetail.length <= 0) {
          toast.error("Data not found", {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        setEmail(res.data.getContactDetail[0].Email);
        setAlternateEmail(res.data.getContactDetail[0].AlternateEmail);
        setMobileNumber(res.data.getContactDetail[0].MobileNumber);
        setAlternateMobileNumber(
          res.data.getContactDetail[0].AlternateMobileNumber
        );
        setDOB(res.data.getContactDetail[0].DOB);
        setAddress(res.data.getContactDetail[0].Address);
        setContactData(res.data.getContactDetail[0]);
        setContactEdit(true);
        setLoader2(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });

        setLoader2(false);
      });
  }
  //Fetch while cliking Service Button:
  function handleEdit3() {
    setLoader2(true);
    // Retrieve token from local storage or wherever it's stored
    const token = localStorage.getItem("token");
    axios
      .get(`https://server-px9z.onrender.com/service_detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.getServiceDetail.length > 0) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        if (res.data.getServiceDetail.length <= 0) {
          toast.error("Data not found", {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }
        setServiceImage(res.data.getServiceDetail[0].serviceImage);
        setServiceTitle(res.data.getServiceDetail[0].serviceTitle);
        setServiceSummary(res.data.getServiceDetail[0].serviceSummary);
        setServiceData(res.data.getServiceDetail[0]);
        setServiceEdit(true);
        setLoader2(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setLoader2(false);
      });
  }
  //Fetch while cliking Product Button:
  function handleEdit4() {
    setLoader2(true);
    // Retrieve token from local storage or wherever it's stored
    const token = localStorage.getItem("token");
    axios
      .get(`https://server-px9z.onrender.com/product_detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.getProductDetail.length > 0) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        if (res.data.getProductDetail.length <= 0) {
          toast.error("Data not found", {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }
        setProductImage(res.data.getProductDetail[0].productImage);
        setProductTitle(res.data.getProductDetail[0].productTitle);
        setProductReleaseDate(res.data.getProductDetail[0].productReleaseDate);
        setProductSummary(res.data.getProductDetail[0].productSummary);
        setProductData(res.data.getProductDetail[0]);
        setProductEdit(true);
        setLoader2(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setLoader2(false);
      });
  }
  //Fetch while cliking Gallery Button:
  function handleEdit5() {
    setLoader2(true);
    // Retrieve token from local storage or wherever it's stored
    const token = localStorage.getItem("token");
    axios
      .get(`https://server-px9z.onrender.com/gallery_detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.getGalleryDetail.length > 0) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        if (res.data.getGalleryDetail.length <= 0) {
          toast.error("Data not found", {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }
        setGalleryImage(res.data.getGalleryDetail[0].galleryImage);
        setVideoURL(res.data.getGalleryDetail[0].videoURL);
        setGalleryData(res.data.getGalleryDetail[0]);
        setGalleryEdit(true);
        setLoader2(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setLoader2(false);
      });
  }
  //Fetch while cliking SocialMedia Button:
  function handleEdit6() {
    setLoader2(false);
    // Retrieve token from local storage or wherever it's stored
    const token = localStorage.getItem("token");
    axios
      .get(`https://server-px9z.onrender.com/socialMedia_detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.getSocialMediaDetail.length > 0) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        if (res.data.getSocialMediaDetail.length <= 0) {
          toast.error("Data not found", {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }
        setFacebook(res.data.getSocialMediaDetail[0].Facebook);
        setLinkedIn(res.data.getSocialMediaDetail[0].LinkedIn);
        setWhatsUp(res.data.getSocialMediaDetail[0].WhatsUp);
        setInstagram(res.data.getSocialMediaDetail[0].Instagram);
        setTwiter(res.data.getSocialMediaDetail[0].Twiter);
        setSocialMediaData(res.data.getSocialMediaDetail[0]);
        setSocialMediaEdit(true);
        setLoader2(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setLoader2(false);
      });
  }
  //Fetch while cliking Product Button:
  function handleEdit7() {
    setLoader2(true);
    // Retrieve token from local storage or wherever it's stored
    const token = localStorage.getItem("token");
    axios

      .get(`https://server-px9z.onrender.com/testimonial_detail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.getTestimonialDetail.length > 0) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }

        if (res.data.getTestimonialDetail.length <= 0) {
          toast.error("Data not found", {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
        }
        setClientName(res.data.getTestimonialDetail[0].clientName);
        setClientImage(res.data.getTestimonialDetail[0].clientImage);
        setClientFeedbackDate(
          res.data.getTestimonialDetail[0].setClientFeedbackDate
        );
        setClientFeedback(res.data.getTestimonialDetail[0].clientFeedback);
        setTestimonialData(res.data.getTestimonialDetail[0]);
        setTestimonialEdit(true);
        setLoader2(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setLoader2(false);
      });
  }
  const onUploadBannerImage = async (e) => {
    let base64 = await convertBannerImageToBase64(e.target.files[0]);

    setBanner(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64Basic(e.target.files[0]);

    setLogo(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadServiceImage = async (e) => {
    let base64 = await convertServiceImageToBase64(e.target.files[0]);

    setServiceImage(base64);
  };
  // const onUploadServiceImage=(e)=>{
  //   setServiceImage(e.target.files[0])
  // };
  //Formik does not support file upload so we could create handler :
  const onUploadProductImage = async (e) => {
    let base64 = await convertProductImageToBase64(e.target.files[0]);

    setProductImage(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadGalleryImage = async (e) => {
    let base64 = await convertGalleryImageToBase64(e.target.files[0]);

    setGalleryImage(base64);
  };
  //Formik does not support file upload so we could create handler :
  const onUploadTestimonialImage = async (e) => {
    let base64 = await convertTestimonialImageToBase64(e.target.files[0]);

    setClientImage(base64);
  };
  //Home post form submit:
  async function handleBasicFormSubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        banner,
        logo,
        fullName,
        profession,
        summary,
      };
      setLoader2(true);
      // Make authenticated request with bearer token
      await axios
        .post("https://server-px9z.onrender.com/basic_detail", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((responce) => {
          toast.success(responce.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setBasicData(responce.data.result[0]);
          setLoader2(false);
          setFullName("");
          setProfession("");
          setSummary("");
          setBanner(null);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });

      setLoader2(false);
    } catch (error) {
      // Handle errors
      alert("Something Error");
      setLoader2(false);
    }
  }
  //Home form Edit:
  async function handleBasicFormEdit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        banner,
        logo,
        fullName,
        profession,
        summary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://server-px9z.onrender.com/basic_detail/${BasicData._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setFullName("");
      setProfession("");
      setSummary("");
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //Contact form submit:
  async function handleContactFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let Contactdata = {
        Email,
        AlternateEmail,
        MobileNumber,
        AlternateMobileNumber,
        DOB,
        Address,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://server-px9z.onrender.com/contact_detail", Contactdata, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
    } catch (error) {
      // Handle errors
      alert("Something Error" + error.message);
      setLoader2(false);
    }
  }
  //Contact form Edit:
  async function handleContactFormEdit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        Email,
        AlternateEmail,
        MobileNumber,
        AlternateMobileNumber,
        DOB,
        Address,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://server-px9z.onrender.com/contact_detail/${ContactData._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //Service form submit:
  async function handleServiceFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let Servicedata = {
        serviceImage,
        serviceTitle,
        serviceSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://server-px9z.onrender.com/service_detail", Servicedata, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((error) => {
          toast.success(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.success(error.responce.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //Service form Edit:
  async function handleServiceFormEdit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        serviceImage,
        serviceTitle,
        serviceSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://server-px9z.onrender.com/service_detail/${ServiceData._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });

      setLoader2(false);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //Product form submit:
  async function handleProductFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let Productdata = {
        productImage,
        productTitle,
        productReleaseDate,
        productSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://server-px9z.onrender.com/product_detail", Productdata, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //Product form Edit:
  async function handleProductEdit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        productImage,
        productTitle,
        productReleaseDate,
        productSummary,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://server-px9z.onrender.com/product_detail/${ProductData._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });

      setLoader2(false);
    }
  }
  //Gallery form submit:
  async function handleGalleryFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let Gallerydata = {
        galleryImage,
        videoURL,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://server-px9z.onrender.com/gallery_detail", Gallerydata, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });

          setLoader2(false);
        })
        .catch((error) => {
          toast.success(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.error(error.respose.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });

      setLoader2(false);
    }
  }
  //Gallery form Edit:
  async function handleGalleryEdit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        galleryImage,
        videoURL,
      };
      // Make authenticated request with bearer token
      await axios
        .put(`https://server-px9z.onrender.com/gallery_detail/${GalleryData._id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });

          setLoader2(false);
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.success(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //SocialMedia form submit:
  async function handleSocialMediaFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader2(false);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let SocialMediadata = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://server-px9z.onrender.com/socialMedia_detail", SocialMediadata, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //SocialMedia form Edit:
  async function handleSocialMediaFormEdit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        Facebook,
        LinkedIn,
        WhatsUp,
        Instagram,
        Twiter,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `https://server-px9z.onrender.com/socialMedia_detail/${SocialMediaData._id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((err) => {
          toast.success(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //Testimonial form submit:
  async function handleTestimonialFormSubmit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let SocialMediadata = {
        clientName,
        clientImage,
        clientFeedbackDate,
        clientFeedback,
      };
      // Make authenticated request with bearer token
      await axios
        .post("https://server-px9z.onrender.com/testimonial_detail", SocialMediadata, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });
      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  //Testimonial form Edit:
  async function handleTestimonialEdit(e) {
    e.preventDefault();
    try {
      setLoader2(true);
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");
      let data = {
        clientImage,
        clientName,
        clientFeedbackDate,
        clientFeedback,
      };
      // Make authenticated request with bearer token
      await axios
        .put(
          `https://server-px9z.onrender.com/testimonial_detail/${TestimonialData._id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader2(false);
        });

      setLoader2(false);
    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader2(false);
    }
  }
  return (
    <>
      <div
        className="forms_container"
        id={slideClose ? "Formclose" : "Formopen"}
      >
        <ToastContainer
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="loader_container">{loader2 ? <Loader /> : ""}</div>
        {/* //Form 1 Basic Details */}
        {basicForm === true ? (
          <div
            className="Form1_container"
            id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Basic Detail Session</h4>
              <img src={user} alt="user" />
            </div>
            <form action="">
              {/* //Edit Button */}
              <div className="edit_form" onClick={handleEdit1}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/create-new.png"
                  alt="create-new"
                />
              </div>
              {/* //Banner */}
              <div className="form_group">
                <label htmlFor="bannerImage">
                  Upload Banner Image
                  <img
                    className="banner"
                    src={!banner === undefined ? banner : background}
                    alt=""
                    name="bannerImage"
                  />
                  {/* <img
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="bannerImage"
                  /> */}
                </label>

                <input
                  onChange={onUploadBannerImage}
                  type="file"
                  name="bannerImage"
                  id="bannerImage"
                />
              </div>
              {/* Logo */}
              <div className="form_group">
                <label htmlFor="logo">
                  Upload Logo Image
                  <img
                    src={logo !== undefined ? logo : clientProfile}
                    alt=""
                    name="logo"
                    className="logo"
                  />
                  {/* <img
                    src={upload}
                    alt="upload"
                    className="upload_logo"
                    name="logo"
                  /> */}
                </label>

                <input
                  onChange={onUpload}
                  value={banner}
                  type="file"
                  name="logo"
                  id="logo"
                />
              </div>
              {/* Author */}
              <div className="form_group">
                <label htmlFor="name">Enter FullName</label>
                <input
                  type="text"
                  placeholder="Eg : John S"
                  name="name"
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {/* Profession  */}
              <div className="form_group">
                <label htmlFor="name">Enter Your Profession</label>
                <input
                  type="text"
                  placeholder="Eg : Web Developer"
                  name="profession"
                  id="profession"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="summary">Summary</label>
                <textarea
                  name="summary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Write something about your profession"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                ></textarea>
              </div>

              {BasicEdit === true ? (
                <div className="form_submit">
                  <input
                    onClick={handleBasicFormEdit}
                    type="submit"
                    value="Update"
                  />
                </div>
              ) : (
                <div className="form_submit">
                  <input
                    onClick={handleBasicFormSubmit}
                    type="submit"
                    value="Upload "
                  />
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}

        {/* //Form 2 contact Details */}
        {contactForm === true ? (
          <div
            className="Form2_container"
            id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Contact Detail's Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //Edit Button */}
              <div className="edit_form" onClick={handleEdit2}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/create-new.png"
                  alt="create-new"
                />
              </div>
              {/* Email */}
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Eg : abc@gmail.com"
                  name="email"
                  id="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={AlternateEmail}
                  onChange={(e) => setAlternateEmail(e.target.value)}
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
                  value={MobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
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
                  value={AlternateMobileNumber}
                  onChange={(e) => setAlternateMobileNumber(e.target.value)}
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
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="Write your location Address"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              {ContactEdit === true ? (
                <div className="form_submit">
                  <input
                    onClick={handleContactFormEdit}
                    type="submit"
                    value="Update"
                  />
                </div>
              ) : (
                <div className="form_submit">
                  <input
                    onClick={handleContactFormSubmit}
                    type="submit"
                    value="Upload"
                  />
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 3 service Details */}
        {serviceForm === true ? (
          <div
            className="Form3_container"
            id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Our Service Detail Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //Edit Button */}
              <div className="edit_form" onClick={handleEdit3}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/create-new.png"
                  alt="create-new"
                />
              </div>
              {/* //service image */}
              <div className="form_group">
                <label htmlFor="serviceImage">
                  Upload Service Image
                  <img
                    className="serviceImage"
                    src={serviceImage != "" ? serviceImage : background}
                    alt=""
                    name="serviceImage"
                    onChange={onUploadServiceImage}
                  />
                  <img
                    onChange={onUploadServiceImage}
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="banner"
                  />
                </label>

                <input
                  onChange={onUploadServiceImage}
                  type="file"
                  name="serviceImage"
                  id="serviceImage"
                />
              </div>

              {/* serviice Title */}
              <div className="form_group">
                <label htmlFor="serviceTitle">Service Title</label>
                <input
                  type="text"
                  placeholder="Eg : Web Development"
                  name="serviceTitle"
                  id="serviceTitle"
                  value={serviceTitle}
                  onChange={(e) => setServiceTitle(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="serviceSummary">Service Summary</label>
                <textarea
                  name="serviceSummary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Write something about this service"
                  value={serviceSummary}
                  onChange={(e) => setServiceSummary(e.target.value)}
                ></textarea>
              </div>

              {ServiceEdit === true ? (
                <div className="form_submit">
                  <input
                    onClick={handleServiceFormEdit}
                    type="submit"
                    value="Update"
                  />
                </div>
              ) : (
                <div className="form_submit">
                  <input
                    onClick={handleServiceFormSubmit}
                    type="submit"
                    value="Upload "
                  />
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 4 product Details */}
        {productForm === true ? (
          <div
            className="Form4_container"
            id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Our Product Detail Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //Edit Button */}
              <div className="edit_form" onClick={handleEdit4}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/create-new.png"
                  alt="create-new"
                />
              </div>
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="productImage">
                  Upload Product Image
                  <img
                    onChange={onUploadProductImage}
                    className="productImage"
                    src={productImage !== undefined ? productImage : background}
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

                <input
                  onChange={onUploadProductImage}
                  type="file"
                  name="productImage"
                  id="productImage"
                />
              </div>

              {/* product Title */}
              <div className="form_group">
                <label htmlFor="productTitle">Product Title</label>
                <input
                  type="text"
                  placeholder="Eg : Ecommerse Portal"
                  name="productTitle"
                  id="productTitle"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                />
                {/* Release data */}

                <label htmlFor="releaseDate">Relesed Date</label>
                <input
                  type="date"
                  name="releaseDate"
                  id="releaseDate"
                  value={productReleaseDate}
                  onChange={(e) => setProductReleaseDate(e.target.value)}
                />
              </div>

              <div className="form_group">
                <label htmlFor="productSummary">Product UseCase Summary</label>
                <textarea
                  name="productSummary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Write something about this Product"
                  value={productSummary}
                  onChange={(e) => setProductSummary(e.target.value)}
                ></textarea>
              </div>

              {ProductEdit === true ? (
                <div className="form_submit">
                  <input
                    onClick={handleProductEdit}
                    type="submit"
                    value="Update"
                  />
                </div>
              ) : (
                <div className="form_submit">
                  <input
                    onClick={handleProductFormSubmit}
                    type="submit"
                    value="Upload"
                  />
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form5 Gallery upload */}
        {galleryForm === true ? (
          <div
            className="Form5_container"
            id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Gallery Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //Edit Button */}
              <div className="edit_form" onClick={handleEdit5}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/create-new.png"
                  alt="create-new"
                />
              </div>
              {/* //product image */}
              <div className="form_group">
                <label htmlFor="galleryImage">
                  Upload Gallery Image
                  <img
                    onChange={onUploadGalleryImage}
                    className="galleryImage"
                    src={galleryImage !== undefined ? galleryImage : background}
                    alt=""
                    name="galleryImage"
                  />
                  <img
                    onChange={onUploadGalleryImage}
                    src={upload}
                    alt="galleryImage"
                    className="upload"
                    name="galleryImage"
                  />
                </label>

                <input
                  onChange={onUploadGalleryImage}
                  type="file"
                  name="galleryImage"
                  id="galleryImage"
                />
              </div>
              {/* //Form6 video upload */}
              {galleryForm === true ? (
                <div
                  className="Form6_container"
                  id={slideClose ? "Form1close" : "Form1open"}
                >
                  <div className="Form_title">
                    <h4>Video Detail Update</h4>
                    <img src={user} alt="user" />
                  </div>

                  {/* Vieo upload link */}
                  <div className="form_group">
                    <label htmlFor="videoLink">Paste video Embeded Link</label>
                    <input
                      type="text"
                      placeholder="Eg : http://shorts.mp4"
                      name="videoLink"
                      id="videoLink"
                      value={videoURL}
                      onChange={(e) => setVideoURL(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              {GalleryEdit === true ? (
                <div className="form_submit">
                  <input
                    onClick={handleGalleryEdit}
                    type="submit"
                    value="Update"
                  />
                </div>
              ) : (
                <div className="form_submit">
                  <input
                    onClick={handleGalleryFormSubmit}
                    type="submit"
                    value="Upload Gallery & Video"
                  />
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}

        {/* //Form7 social media link upload */}
        {socialMediaForm === true ? (
          <div
            className="Form7_container"
            id={slideClose ? "Form7close" : "Form7open"}
          >
            <div className="Form_title">
              <h4>Social Media Detail Update</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //Edit Button */}
              <div className="edit_form" onClick={handleEdit6}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/create-new.png"
                  alt="create-new"
                />
              </div>
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
                  value={Facebook}
                  onChange={(e) => setFacebook(e.target.value)}
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
                  value={LinkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
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
                  value={WhatsUp}
                  onChange={(e) => setWhatsUp(e.target.value)}
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
                  value={Instagram}
                  onChange={(e) => setInstagram(e.target.value)}
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
                  value={Twiter}
                  onChange={(e) => setTwiter(e.target.value)}
                />
              </div>
              {SocialMediaEdit === true ? (
                <div className="form_submit">
                  <input
                    onClick={handleSocialMediaFormEdit}
                    type="submit"
                    value="Update"
                  />
                </div>
              ) : (
                <div className="form_submit">
                  <input
                    onClick={handleSocialMediaFormSubmit}
                    type="submit"
                    value="Upload"
                  />
                </div>
              )}
            </form>
          </div>
        ) : (
          ""
        )}
        {/* //Form 8 Testimonial Details */}
        {testimonialForm === true ? (
          <div
            className="Form8_container"
            id={slideClose ? "Form1close" : "Form1open"}
          >
            <div className="Form_title">
              <h4>Testimonial Session</h4>
              <img src={user} alt="user" />
            </div>

            <form action="">
              {/* //Edit Button */}
              <div className="edit_form" onClick={handleEdit7}>
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/create-new.png"
                  alt="create-new"
                />
              </div>
              {/* //service image */}
              <div className="form_group">
                <label htmlFor="testimonialImage">
                  Upload Client Profile Image
                  <img
                    onChange={onUploadTestimonialImage}
                    className="testimonialImage"
                    src={
                      clientImage !== undefined ? clientImage : clientProfile
                    }
                    alt=""
                    name="testimonialImage"
                  />
                  <img
                    onChange={onUploadTestimonialImage}
                    src={upload}
                    alt="upload"
                    className="upload"
                    name="banner"
                  />
                </label>

                <input
                  onChange={onUploadTestimonialImage}
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
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <label htmlFor="feedbackDate">Feedback Date</label>
                <input
                  type="date"
                  // placeholder="Eg : John K"
                  name="feedbackDate"
                  id="feedbackDate"
                  value={clientFeedbackDate}
                  onChange={(e) => setClientFeedbackDate(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="clientSummary">Client Feed Back</label>
                <textarea
                  name="clientSummary"
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Paste out client feedback details"
                  value={clientFeedback}
                  onChange={(e) => setClientFeedback(e.target.value)}
                ></textarea>
              </div>

              {TestimonialEdit === true ? (
                <div className="form_submit">
                  <input
                    onClick={handleTestimonialEdit}
                    type="submit"
                    value="Update"
                  />
                </div>
              ) : (
                <div className="form_submit">
                  <input
                    onClick={handleTestimonialFormSubmit}
                    type="submit"
                    value="Upload"
                  />
                </div>
              )}
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
