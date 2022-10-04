import { ReactComponent as Star } from "../Icons/icon-star.svg";
import { ReactComponent as Thanks } from "../Icons/illustration-thank-you.svg";
import RatingButton from "./RatingButton";
import SubmitButton from "./SubmitButton";
import Text from "./Text";
import React, { useState } from "react";

function Card() {
  const [state, changeState] = useState(0);
  const [submitted, changeSubmitted] = useState(false);

  function handleClick() {
    changeState(this.number);
  }

  function handleSubmit() {
    if (state !== 0) {
      changeSubmitted(true);
    } else {
      changeSubmitted(false);
    }
  }

  const hide = { display: "none" };

  return (
    <div style={submitted ? {textAlign: "center"} : {}} className="card">
      <button className="star-button" style={submitted ? hide : null}>
        <Star />
      </button>
      <Thanks style={!submitted ? hide : null} />
      <p className="after-submission-alert" style={!submitted ? hide : null}>
        you selected {state} out of 5
      </p>
      <Text formSubmitted={submitted} />
      <div className="ratings" style={submitted ? hide : null}>
        <RatingButton number={1} onClick={handleClick} />
        <RatingButton number={2} onClick={handleClick} />
        <RatingButton number={3} onClick={handleClick} />
        <RatingButton number={4} onClick={handleClick} />
        <RatingButton number={5} onClick={handleClick} />
      </div>
      <SubmitButton style={submitted ? hide : null} onClick={handleSubmit} />
    </div>
  );
}

export default Card;
