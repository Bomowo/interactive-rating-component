import React from "react";

function Text(props) {
  return (
    <p>
      {props.formSubmitted
        ? "Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        : "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"}
    </p>
  );
}

export default Text;
