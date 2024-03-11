import { useEffect, useRef, useState } from "react";
import "./profile_details.scss";
import profile from "../assets/login_register/4.jpg";
import { Link } from "react-router-dom";

export default function Profile_details({ userDetail, setUserDetail }) {

  return (
    <>
      <div className="user_container">
        {/* <Toaster position="top-center" reverseOrder={false}></Toaster> */}

        <div className="register_box">
          <div className="back_btn">
            <Link to="/">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/back.png"
                alt="back"
              />
            </Link>
          </div>
          <div className="box_title">
            <h1>Profile</h1>
            <p className="text-center text-sm">You can update your details!</p>
          </div>

          <form action="" >
            <div className="profile flex justify-center p-4">
              <div className="form_group">
                <label htmlFor="profile">
                  <img
                    src={userDetail.profile}
                    alt="avatar"
                    id="profile_image"
                  />
                </label>
                <p
                  className="text-sm self-center"
                  style={{ textAlign: "center", margin: "10px" }}
                >
          
                </p>
                <input
                  // onChange={onUpload}
                  type="file"
                  id="profile"
                  name="profile"
                 
                  accept="image/.*"
       
                />
              </div>
              <label htmlFor=""></label>
            </div>

            <div className="form_group">
              <input
                type="text"
                placeholder="UserName"
                id="username"
                name="username"
                defaultValue={userDetail.userName}
             
              />
              <img
                className="icon"
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/user.png"
                alt="user"
              />
            </div>

            <div className="form_group">
              <input
                type="email"
                placeholder="Eg : abc@gmail.com"
                id="email"
                name="Email"
                defaultValue={userDetail.email}
   
              />
              <img
                className="icon"
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/new-post.png"
                alt="new-post"
              />
            </div>

            <div className="form_group">
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
        
              />
              <img
                className="icon"
                width="48"
                height="48"
                src="https://img.icons8.com/glassmorphism/48/experimental-password-glassmorphism.png"
                alt="experimental-password-glassmorphism"
              />
            </div>

            <button className="start_btn" type="submit">
              Update
            </button>
          </form>
      
          <div className="logout_session">
            <p>
              <Link  style={{ color: "red" }}>
                Log Out
              </Link>
            </p>
          </div>
          <div className="deleteAccount">
            <Link >Delete Your Account</Link>
          </div>
        </div>
      </div>
    </>
  );
}
