import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import Check from "../Icons/check.svg";

storiesOf("Checkbox", module)
  .add("Black Check", () => <Checkbox check={Check} />)
  .add("Blue Check", () => <Checkbox check={Check} blue />)
  .add("Black Check Popup", () => (
    <Checkbox check={Check} label="Don't show this popup again" />
  ));
