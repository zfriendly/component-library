import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "";
  let types = ["primary", "danger", "success", "warning"];

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.hover) {
    classList += ` button-${props.type}-hover`;
  }
  if (props.faded) {
    classList += ` button-${props.type}-faded`;
  }
  if (props.white) {
    classList += ` white-text`;
  }
  if (props.outline) {
    classList += ` button-outline`;
  }
  if (props.icon) {
    classList += ` button-icons`;
    return (
      <button className={classList} onClick={props.onClick}>
        <img src={props.icon}></img>
        {props.label}
      </button>
    );
  }
  return (
    <button className={classList} onClick={props.onClick}>
      {props.label}
    </button>
  );
};
export default Button;
