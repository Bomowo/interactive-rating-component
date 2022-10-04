import React from "react";

function Title(props) {
  return (
    <h1>
      {props.formSubmitted
        ? `You selected ${props.rating} out of 5`
        : `How did we do?`}
    </h1>
  );
}

export default Title;
