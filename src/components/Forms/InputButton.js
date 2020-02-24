import React, { Component } from "react";
import "./Forms.css";
import "../Button/Button.css";
import Input from "./Input";
import Button from "../Button/Button";

class InputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
      label: this.props.label,
      onClick: this.props.onClick,
      onChange: this.props.onChange
    };
  }
  render() {
    let classList = "input-button-form";
    if (this.props.large) {
      classList += ` form-large`;
    }
    return (
      <form className={classList}>
        <input
          className="input-button-text"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        ></input>
        <button onClick={this.props.onClick} className="input-button-button">
          {this.props.label}
        </button>
      </form>
    );
  }
}

export default InputButton;
