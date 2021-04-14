import React from "react";
import Details from "./CardBottomDetails";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img src={props.imgURL} alt="avatar_img" className="circle-img" />
      </div>
      <div className="bottom">
        <Details detailinfo={props.phone} />
        <Details detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
