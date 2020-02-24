import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";

storiesOf("Select", module)
  .add("Select Sm", () => <Select value="Select" select />)
  .add("Select Med", () => <Select value="Select" select medium />)
  .add("Select Lg", () => <Select value="Select" select large />)
  .add("Select Sm Shaded", () => <Select value="Select" select shaded />)
  .add("Select Med Shaded", () => (
    <Select value="Select" select medium shaded />
  ))
  .add("Select Lg Shaded", () => <Select value="Select" select large shaded />);
