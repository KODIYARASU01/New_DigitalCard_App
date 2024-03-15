import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/SignIn.scss";
import image from "../assets/login_register/teamWork.svg";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OAUTH from "./OAUTH.jsx";

const SignIn = ({ userDetail, setUserDetail }) => {
  var [loginUserData, setLoginUserData] = useState("");
  let navigate = useNavigate();
  console.log(loginUserData);
  let [email, setEmail] = useState("");
  let [password, setpassword] = useState("");
  let [loader, setLoader] = useState(false);

  let handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email === "" || password === "") {
        toast.warning("Make sure to fill all required fields ", {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
      } else {
        let data = { email, password };
        setLoader(true);
        let result = await axios
          .post("http://localhost:3000/api/login", data)
          // .then((res) => {
          //   setUserDetail(res.data);
          //   setLoader(false);
          //   toast.success(res.data.message, {
          //     position: "top-center",
          //     autoClose: 2000,
          //     transition: Slide,
          //   });
          //   setTimeout(() => {
          //     navigate("/user_admin");
          //   }, 2000);
          // })
          // .catch((err) => {
          //   console.log(err);
          //   toast.error(err.response.data.message, {
          //     position: "top-center",
          //     autoClose: 2000,
          //     transition: Slide,
          //   });
          //   setLoader(false);
          //   setTimeout(() => {
          //     navigate("/");
          //   }, 2000);
          // });

        let { token } = result.data;

        setUserDetail(result.data)
        // Store the token in local storage
        localStorage.setItem("token", token);
        toast.success(result.data.message, {
          position: "top-center",
          autoClose: 2000,
          transition: Slide,
        });
        setTimeout(() => {
          navigate("/user_admin");
        }, 2000);
        setEmail("");
        setpassword("");
        setLoader(false);
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        transition: Slide,
      });
      setLoader(false);
      setEmail("");
      setpassword("");
      navigate("/");
    }
  };
  return (
    <>
      <div className="signin_container">
        <ToastContainer
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="box_container">
          <div className="left_image">
            <img src={image} alt="signup" />
          </div>
          <div className="right_form">
            <div className="form_title">
              <h4>Welcome Back!</h4>
              <p>Please enter login details below</p>
            </div>
            <form action="" onSubmit={handleSignInSubmit}>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <div className="icon">
                  <i className="bx bxs-lock-open"></i>
                </div>
              </div>
              <div className="forgot_password">
                <Link>
                  <p>Forget Password ?</p>
                </Link>
              </div>
              <div className="form_submit">
                <button type="submit">
                  Sign In{" "}
                  {loader ? (
                    <span className="loader"></span>
                  ) : (
                    <div className="rocket">
                      <i className='bx bx-log-in bx-flashing' ></i>
                    </div>
                  )}
                </button>
              </div>
              <div className="or">
                <p>or &nbsp;&nbsp;&nbsp; Continue</p>
              </div>
            </form>
            {/* //GOOGLE SIGN IN */}
            <OAUTH />
            <div className="signup_link">
              <p>
                Don't have an account ? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
