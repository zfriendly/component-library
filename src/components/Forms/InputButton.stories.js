import React from "react";
import { storiesOf } from "@storybook/react";
import InputButton from "./InputButton";

storiesOf("InputButton", module)
  .add("Input Button", () => (
    <InputButton placeholder="Voucher Code" label="Redeem" />
  ))
  .add("Input Button Lg", () => (
    <InputButton placeholder="Voucher Code" label="Redeem" large />
  ));
