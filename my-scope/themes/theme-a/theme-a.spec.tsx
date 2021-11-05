import React from "react";
import { render } from "@testing-library/react";
import { BasicThemeA } from "./theme-a.composition";

it("should render", () => {
  render(<BasicThemeA />);
});
