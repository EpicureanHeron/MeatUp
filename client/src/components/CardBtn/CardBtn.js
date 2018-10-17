import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
  <div>

    <div>
    <button
      onClick={props.handleClick}
      className={`card-btn ${props["data-value"]}`}
      // id={`card-btn ${props["id"]}`}
      // className={props.fontAwesomeClasses}
      // {...props}
      >
      {/* <i class="fas fa-utensils"></i> */}
      <i className={props.fontAwesomeClasses}/>

      </button>
      {/* <code style={{background: '#fff', color: 'black'}}>{props.fontAwesomeClasses}</code> */}

    </div>

  </div>
);

export default CardBtn;
