import React from "react";
import { render } from "@testing-library/react";
import { BasicThemeB } from "./theme-b.composition";

it("should render", () => {
  render(<BasicThemeB />);
});
