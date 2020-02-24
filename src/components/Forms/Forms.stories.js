import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms";

storiesOf("Forms", module)
  .add("Email Input Sm", () => (
    <Forms placeholder="Email" inputLabel="Email" input />
  ))
  .add("Email Input Med", () => (
    <Forms placeholder="Email" inputLabel="Email" input medium />
  ))
  .add("Email Input Lg", () => (
    <Forms placeholder="Email" inputLabel="Email" input large />
  ));
