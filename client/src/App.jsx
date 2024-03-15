import "./App.css";
import {

  Route,

  Routes,
} from "react-router-dom";

import UserProfile from "./components/Profile/Profile";

import NewCard2 from "./components/Profile/NewCard2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useState,useEffect } from "react";
import Profile_details from "./components/Profile_details";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { DNA, Comment } from "react-loader-spinner";
const App = () => {
  let [userDetail, setUserDetail] = useState();
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return (
    <>
      {isLoading ? (
        <div className="isLoading">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
          <div className="intro">
            <h2>
              {" "}
              Welcome to AristosTech Digital Card Creations..{" "}
              <Comment
                visible={true}
                height="40"
                width="40"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper"
                color="#fff"
                backgroundColor="#F4442E"
              />
            </h2>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <SignIn userDetail={userDetail} setUserDetail={setUserDetail} />
            }
          />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<PrivateRoute />}>
            <Route
              path="/user_admin"
              element={
                <UserProfile
                  userDetail={userDetail}
                  setUserDetail={setUserDetail}
                />
              }
            />
          </Route>

          <Route
            path="/"
            element={
              <SignIn userDetail={userDetail} setUserDetail={setUserDetail} />
            }
          />
          <Route
            path="/profile_details"
            element={
              <Profile_details
                userDetail={userDetail}
                setUserDetail={setUserDetail}
              />
            }
          />
          <Route path="new_card" element={<NewCard2 />} />
        </Routes>
      )}
    </>
  );
};

export default App;
