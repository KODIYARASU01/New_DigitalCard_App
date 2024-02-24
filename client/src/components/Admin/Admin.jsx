import "./Admin.scss";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

import Navbar from "../Dashboard/Navbar";
import Forms from "../Dashboard/Forms";
import Card from "../Dashboard/Card";

const Admin = () => {
  let [serviceMessage, setServiceMessage] = useState();
  let [value, setValue] = useState("");

  return (
    <>
      <div className="admin_container">
        <Navbar />
        <div className="container_box">
          <Forms />
          <Card
            serviceMessage={serviceMessage}
            setServiceMessage={setServiceMessage}
            value={value}
            setValue={setValue}
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
