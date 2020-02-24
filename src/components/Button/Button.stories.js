import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import Cart from "../Icons/cart.svg";
import Heart from "../Icons/heart.svg";

storiesOf("Button", module)
  //Standard Buttons
  .add("Primary", () => (
    <Button label="Do something" type="primary" white hover />
  ))
  .add("Danger", () => (
    <Button label="Do something" type="danger" white hover />
  ))
  .add("Success", () => (
    <Button label="Do something" type="success" white hover />
  ))
  .add("Warning", () => (
    <Button label="Do something" type="warning" white hover />
  ))
  .add("Default", () => <Button label="Do something" white hover />)
  //Large Buttons
  .add("Primary Lg", () => (
    <Button label="Do something" type="primary" large white />
  ))
  .add("Danger Lg", () => (
    <Button label="Do something" type="danger" large white />
  ))
  .add("Success Lg", () => (
    <Button label="Do something" type="success" large white />
  ))
  .add("Warning Lg", () => (
    <Button label="Do something" type="warning" large white />
  ))
  .add("Default Lg", () => <Button label="Do something" large white />)
  //Outline Buttons
  .add("Primary Outline", () => (
    <Button label="Do something" type="primary" outline />
  ))
  .add("Danger Outline", () => (
    <Button label="Do something" type="danger" outline />
  ))
  .add("Success Outline", () => (
    <Button label="Do something" type="success" outline />
  ))
  .add("Warning Outline", () => (
    <Button label="Do something" type="warning" outline />
  ))
  .add("Default Outline", () => <Button label="Do something" outline />)
  //Outline Large Buttons
  .add("Primary Outline Lg", () => (
    <Button label="Do something" type="primary" outline large />
  ))
  .add("Danger Outline Lg", () => (
    <Button label="Do something" type="danger" outline large />
  ))
  .add("Success Outline Lg", () => (
    <Button label="Do something" type="success" outline large />
  ))
  .add("Warning Outline Lg", () => (
    <Button label="Do something" type="warning" outline large />
  ))
  .add("Default Outline Lg", () => (
    <Button label="Do something" outline large />
  ))
  //Faded Buttons
  .add("Primary Faded", () => (
    <Button label="Do something" type="primary" faded />
  ))
  .add("Danger Faded", () => (
    <Button label="Do something" type="danger" faded />
  ))
  .add("Success Faded", () => (
    <Button label="Do something" type="success" faded />
  ))
  .add("Warning Faded", () => (
    <Button label="Do something" type="warning" faded />
  ))
  .add("Default Faded", () => (
    <Button label="Do something" type="default" faded />
  ))
  //Faded Large Buttons
  .add("Primary Faded Lg", () => (
    <Button label="Do something" type="primary" faded large />
  ))
  .add("Danger Faded Lg", () => (
    <Button label="Do something" type="danger" faded large />
  ))
  .add("Success Faded Lg", () => (
    <Button label="Do something" type="success" faded large />
  ))
  .add("Warning Faded Lg", () => (
    <Button label="Do something" type="warning" faded large />
  ))
  .add("Default Faded Lg", () => (
    <Button label="Do something" type="default" faded large />
  ))
  //Icons
  .add("Cart Icon", () => <Button type="primary" icon={Cart} faded />)
  .add("Heart Icon", () => <Button type="primary" icon={Heart} faded />)
  .add("Add to Favorites", () => (
    <Button label="Add to Favorites" type="primary" icontext={Heart} faded />
  ))
  .add("Add to Cart", () => (
    <Button label="Add to Cart" type="primary" icontext={Cart} faded />
  ));
