import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

storiesOf("Input", module)
  .add("Email Input Sm", () => (
    <Input placeholder="Email" inputLabel="Email" input />
  ))
  .add("Email Input Med", () => (
    <Input placeholder="Email" inputLabel="Email" input medium />
  ))
  .add("Email Input Lg", () => (
    <Input placeholder="Email" inputLabel="Email" input large />
  ));
