import React from "react";
import { render } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator tests", () => {
  it("should render", () => {
    expect(render(<Calculator />)).toBeTruthy();
  });
});
