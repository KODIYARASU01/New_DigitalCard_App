import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/SignUp.scss";
import signup from "../assets/login_register/registerNew1.svg";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { convertToBase64 } from "./helper/convert";
import avatar from "../assets/avatar_2.jpg";
import OAUTH from "./OAUTH";
const SignUp = () => {
  let navigate = useNavigate();
  //Image store state :
  let [profile, setProfile] = useState();
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader1, setLoader1] = useState(false);
  let handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userName === "" || email === "" || password === "") {
        toast.warning("Make sure to Fill All required Fields", {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setLoader1(false);
      } else {
        let data = { userName, email, password, profile };
        setLoader1(true);
        let result = await axios.post(
          "http://localhost:3000/api/register",
          data
        );

        if (result) {
          toast.success(result.data.message, {
            position: "top-center",
            autoClose: 2000,
            transition: Slide,
          });
          setLoader1(false);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          navigate("/signup");
          setLoader1(false);
        }
      }
    } catch (error) {
      setLoader1(false);

      toast.error(error.response.data.messagee, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
    }
  };

  //Formik does not support file upload so we could create handler :
  const onUpload = async (e) => {
    let base64 = await convertToBase64(e.target.files[0]);

    setProfile(base64);
  };

  return (
    <>
      <div className="signup_container">
        <ToastContainer
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="box_container">
          <div className="right_form">
            <div className="form_title">
              <h4>Welcome to AristosTech Digital Card Creator!</h4>
              <p>Create your new Account</p>
            </div>
            <form action="" onSubmit={handleSignUpSubmit}>
              <div className="profile">
                <label htmlFor="profile">
                  <img
                    src={profile || avatar}
                    alt="avatar"
                    id="profile_image"
                  />
                </label>
                <input
                  onChange={onUpload}
                  type="file"
                  id="profile"
                  name="profile"
                />
              </div>

              <div className="form_group">
                <label htmlFor="userName">UserName</label>
                <input
                  type="text"
                  placeholder="Enter Unique userName"
                  name="userName"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-user"></i>
                </div>
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Eg : abc@gmail.com"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-envelope"></i>
                </div>
              </div>
              <div className="form_group">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-lock"></i>
                </div>
              </div>
              <div className="form_submit">
                <button type="submit">
                  Sign Up
                  {loader1 ? (
                    <span className="loader"></span>
                  ) : (
                    <div className="rocket">
                      <i className="bx bxs-rocket bx-flashing"></i>
                    </div>
                  )}
                </button>
              </div>
              <div className="or">
                <p>or Continue</p>
              </div>
            </form>

            {/* //GOOGLE SIGN IN */}
            <OAUTH />
            <div className="signup_link">
              <p>
                Already have an Account ? <Link to="/">Sign In</Link>
              </p>
            </div>
          </div>
          <div className="right_image">
            <img className="login" src={signup} alt="signUp" />
          </div>
       
        </div>
      </div>
    </>
  );
};

export default SignUp;
