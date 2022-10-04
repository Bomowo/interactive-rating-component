import React from "react";

function Text(props) {
  return (
    <div>
    <h1>{props.formSubmitted
        ? `Thank you !`
        : `How did we do?`}</h1>
    <p>
      {props.formSubmitted
        ? "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        : "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"}
    </p>
    </div>
  );
}

export default Text;
