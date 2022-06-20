import React from "react";
import "./MyCard.css";

const MyCard = ({ title, name, image }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={image} alt="Fashion" width={"300px"} />
          <h1 className="heading">{title}</h1>
          <p className="para">{name}</p>
        </div>
      </div>
    </>
  );
};

export default MyCard;
