import React from "react";

function ConformationPopup({ isVisible, onConformYes, onConformNo ,message }) {
  if (!isVisible) return null;
  return (
    <div className="conformationPopup">
      <div className="popupContent">
        <p>{message}</p>
        <div className="popupButtons">
          <button onClick={onConformYes}>Yes</button>
          <button onClick={onConformNo}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConformationPopup;
