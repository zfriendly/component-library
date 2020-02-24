import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";
import Arrow from "../Icons/arrow.svg";

let style = {
  background: `url(${Arrow})`
};
storiesOf("Select", module)
  .add("Select Sm", () => <Select value="Select" select style={style} />)
  .add("Select Med", () => (
    <Select value="Select" select medium style={style} />
  ))
  .add("Select Lg", () => <Select value="Select" select large style={style} />)
  .add("Select Sm Shaded", () => (
    <Select value="Select" select shaded style={style} />
  ))
  .add("Select Med Shaded", () => (
    <Select value="Select" select medium shaded style={style} />
  ))
  .add("Select Lg Shaded", () => (
    <Select value="Select" select large shaded style={style} />
  ));
