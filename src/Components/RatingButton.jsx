import { Fab } from "@mui/material";
import React from "react";

function RatingButton(props) {
  function handleClick(){
    props.onClick(props.number);
  }

  return <Fab onClick={handleClick}>{props.number}</Fab>;
}

export default RatingButton;
