import React from "react";

function RatingButton(props) {
  function handleClick(){
    props.onClick(props.number);
  }

  return <button className="rating-button" onClick={handleClick}>{props.number}</button>;
}

export default RatingButton;
