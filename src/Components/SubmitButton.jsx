import React from "react";

function SubmitButton(props) {
  function handleClick() {
    props.onClick();
  }

  return (
    <button style={props.style} onClick={handleClick}>
      SUBMIT
    </button>
  );
}

export default SubmitButton;
