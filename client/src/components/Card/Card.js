import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
  {/* {console.log('props in Card component are: ', props)} */}
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      handleClick={props.handleDislike}
      fontAwesomeClasses="fas fa-trash-alt"
      data-value="pass"
      // id="pass"
    />
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      // handleClick={props.handleBtnClick('dislike')}
      handleClick={props.handleLike}

      fontAwesomeClasses="fas fa-utensils"
      data-value="pick"
      // id="pick"
    />
    {/* <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      fontAwesomeClasses="fas fa-trash-alt"
      // data-value="pass"
      />
      <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      fontAwesomeClasses="fas fa-utensils"
      // data-value="pass"
      /> */}
  </div>
);

export default Card;
