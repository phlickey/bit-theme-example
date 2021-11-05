import React from "react";
import { render } from "@testing-library/react";
import { BasicThemeSwitcher } from "./theme-switcher.composition";

it("should render", () => {
  render(<BasicThemeSwitcher />);
});
