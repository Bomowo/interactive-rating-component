import { ReactComponent as Star } from "../Icons/icon-star.svg";
import { Fab } from "@mui/material";
import Rating from "./Rating";
import SubmitButton from "./SubmitButton";
import React from "react";

function Card() {
  return (
    <div className="card">
      <Fab>
        <Star />
      </Fab>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating />
      <SubmitButton />
    </div>
  );
}

export default Card;
