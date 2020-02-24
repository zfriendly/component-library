import React from "react";
import "./Forms.css";

const Select = props => {
  let classList = "";
  if (props.select) {
    classList += ` select`;
  }
  if (props.medium) {
    classList += ` select-medium`;
  }
  if (props.large) {
    classList += ` select-large`;
  }
  if (props.shaded) {
    classList += ` select-shaded`;
  }
  return (
    <form>
      <select className={classList} style={props.style}>
        <option>{props.value}</option>
      </select>
    </form>
  );
};

export default Select;
