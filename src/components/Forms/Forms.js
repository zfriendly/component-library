import React from "react";
import "./Forms.css";

const Forms = props => {
  let classList = "";
  if (props.input) {
    classList += ` input`;
  }
  if (props.medium) {
    classList += ` input-medium`;
  }
  if (props.large) {
    classList += ` input-large`;
  }
  return (
    <form>
      <label for="email">{props.inputLabel}</label>
      <br></br>
      <input
        className={classList}
        onSubmit={props.onSubmit}
        placeholder={props.placeholder}
        name="email"
      ></input>
    </form>
  );
};

export default Forms;
