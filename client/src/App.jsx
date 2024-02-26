import "./App.css";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import Login from "./components/Login";
import UserProfile from "./components/Profile/Profile";
import Sidebar from "./components/Profile/Sidebar";
import DigitalCard from "./components/Profile/DigitalCard";
let router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/reset",
  //   element: <Reset />,
  // },
  // {
  //   path: "/recovery",
  //   element: <Recovery />,
  // },
  // {
  //   path: "/password",
  //   element: <Password />,
  // },

  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  {
    path: "/",
    element: <UserProfile />,
  },
  // {
  //   path: "/sidebar",
  //   element: <Sidebar />,
  // },
  // {
  //   path: "/digitalCard",
  //   element: <DigitalCard />,
  // },
  // {
  //   path: "/admin",
  //   element: <Admin />,
  // },
]);
const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
