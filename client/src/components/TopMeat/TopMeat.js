import React from "react";
import "./TopMeat.css";

const TopMeat = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
  </div>
);

export default TopMeat;
