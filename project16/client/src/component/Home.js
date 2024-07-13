import React, { useState } from "react";
import DashBoard from "./DashBoard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConformationPopup from "./ConformationPopup";


function Home() {
  let navigate = useNavigate();

  let [conformationPopup, setConformationPopup] = useState(false);

  let storeObj = useSelector((store) => {
    return store;
  });

  let onDeleteProfile = async () => {
    let formData = new FormData();
    formData.append("email", storeObj.loginDetails.email);

    let reqOptions = {
      method: "DELETE",
      body: formData,
    };
    let JSONData = await fetch(
      "http://localhost:13189/deleteProfile",
      reqOptions
    );

    let JSOData = await JSONData.json();
    alert(JSOData.msg);

    if (JSOData.status == "success") {
      navigate("/");
    }
  };

  let handleDelete = () => {
    setConformationPopup(true);
  };

  let handleConformYes = () => {
    setConformationPopup(false);
    onDeleteProfile();
  };

  let handleConformNo = () => {
    setConformationPopup(false);
  };

  return (
    <div>
      <DashBoard />
      <h1>Welcome To Home</h1>
      <div>
        <div className="accountDetails">
          <img
            src={`http://localhost:13189/${storeObj.loginDetails.profilePic}`}
          ></img>
          <h2>
            Welcome {storeObj.loginDetails.firstName}{" "}
            {storeObj.loginDetails.lastName}
          </h2>
          <h3>Gender : {storeObj.loginDetails.gender}</h3>
          <h3>Age : {storeObj.loginDetails.age}</h3>
          <h3>Email : {storeObj.loginDetails.email}</h3>
          <h3>MobileNo : {storeObj.loginDetails.mobileNo}</h3>
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete account
        </button>
      </div>
      <ConformationPopup
        isVisible={conformationPopup}
        onConformYes={handleConformYes}
        onConformNo={handleConformNo}
        message="Do you want to Delete this account?"
      >
        
      </ConformationPopup>
    </div>
  );
}

export default Home;
