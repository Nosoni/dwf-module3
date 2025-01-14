import React, { useState } from "react";
import phoneIcono from "../images/phone-icon.png";
import mailIcono from "../images/mail-icon.png";

const Card = ({ name, phone, image, address, mail }) => {
  const [nameState, setNameState] = useState();

  return (
    <div className="contact-card">
      <button onClick={() => setNameState("PEPITO")}>actualizar</button>
      <img src={image} alt={nameState} />
      <h3 style={{ color: "red" }}>{nameState}</h3>
      <div className="info-group">
        <img src={phoneIcono} alt="Phone Icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcono} alt="Email Icon" />
        <p>{mail}</p>
      </div>

      {address && (
        <div className="info-group">
          <img src={mailIcono} alt="address" />
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
