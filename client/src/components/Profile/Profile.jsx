import React from "react";
import './Profile.scss'
import Sidebar from "./Sidebar";
import Forms from "./Forms";

const UserProfile = () => {
  return <div>
<>
<div className="profile_container">
  <Sidebar/>
  <Forms/>
</div>
</>
  </div>;
};

export default UserProfile;
