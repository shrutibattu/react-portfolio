import React from "react";
import { render } from "@testing-library/react";
import Punkapi from "./Punkapi";

describe("Punkapi tests", () => {
  it("should render", () => {
    expect(render(<Punkapi />)).toBeTruthy();
  });
});
