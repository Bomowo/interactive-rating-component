import { Fab } from "@mui/material";
import React from "react";

function RatingButton(props) {
  function handleClick(){
    props.onClick(props.number);
  }

  return <Fab sx={{
  backgroundColor: 'hsla(210, 19%, 18%, 1)',
  color: 'hsl(217, 12%, 63%)',
  fontFamily: "Overpass",
  fontWeight: 400,
  height: '45px',
  width: '45px',
  margin: '16px 8px 32px',
  boxShadow: 'none'
  }} onClick={handleClick}>{props.number}</Fab>;
}

export default RatingButton;
