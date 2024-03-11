import "./App.css";

import Profile from "./components/Profile/Profile";
// import Register from "./components/Register";
// import Reset from "./components/Reset";
// import Recovery from "./components/Recovery";
// import Password from "./components/Password";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
// import Login from "./components/Login";
import UserProfile from "./components/Profile/Profile";
// import Sidebar from "./components/Profile/Sidebar";
// import DigitalCard from "./components/Profile/DigitalCard";
// import DigitalCard2 from "./components/Profile/DigitalCard2";
// import DigitalCard3 from "./components/Profile/DigitalCard3";
// import NewCard from "./components/Profile/NewCard";
import NewCard2 from "./components/Profile/NewCard2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Profile_details from "./components/Profile_details";

const App = () => {
  let [userDetail, setUserDetail] = useState();

  // let router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <SignIn userDetail={userDetail} setUserDetail={setUserDetail} />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <SignUp />,
  //   },

  //   {
  //     path: "/profile",
  //     element: <Profile  />,
  //   },
  //   {
  //     path: "/user_admin",
  //     element: <UserProfile  userDetail={userDetail} setUserDetail={setUserDetail} />,
  //   },
  //   {
  //     path: "/sidebar",
  //     element: <Sidebar />,
  //   },
  //   {
  //     path: "/digitalCard",
  //     element: <DigitalCard />,
  //   },
  //   {
  //     path: "/digitalCard2",
  //     element: <DigitalCard2 />,
  //   },
  //   {
  //     path: "/digitalCard3",
  //     element: <DigitalCard3 />,
  //   },
  //   {
  //     path: "/newCard",
  //     element: <NewCard />,
  //   },
  //   {
  //     path: "/newCard2",
  //     element: <NewCard2 />,
  //   },
  // ]);

  return (
    // <main >
    //   <RouterProvider router={router}  userDetail={userDetail} setUserDetail={setUserDetail}></RouterProvider>
    // </main>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SignIn userDetail={userDetail} setUserDetail={setUserDetail} />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/user_admin"
          element={
            <UserProfile
              userDetail={userDetail}
              setUserDetail={setUserDetail}
            />
          }
        />
        <Route
          path="/"
          element={
            <SignIn userDetail={userDetail} setUserDetail={setUserDetail} />
          }
        />
           <Route
          path="/profile_details"
          element={
            <Profile_details userDetail={userDetail} setUserDetail={setUserDetail} />
          }
        />
        <Route path="new_card" element={<NewCard2/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
