import React, { Component } from "react";
import "./Forms.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  onCheck = () => {
    this.setState(true);
  };
  render() {
    let labelClass = "container";
    let inputClass = "checkmark";
    if (this.props.blue) {
      labelClass += ` container-blue`;
      inputClass += ` checkmark-blue`;
    }
    return (
      <label className={labelClass}>
        <input onClick={this.onCheck} type="checkbox"></input>
        <span className={inputClass}>
          <img src={this.props.check}></img>
        </span>{" "}
        <p className="popup">{this.props.label}</p>
      </label>
    );
  }
}
export default Checkbox;
