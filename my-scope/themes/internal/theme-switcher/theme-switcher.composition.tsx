import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

export const BasicThemeSwitcher = () => (
  <ThemeSwitcher>
    <div
      style={{
        background: "var(--theme-primary)",
        color: "var(--theme-on-primary)",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, urna eu tincidunt consectetur, urna nisi porttitor nisi,
        euismod aliquam nunc nisi vitae nunc.
      </p>
    </div>
  </ThemeSwitcher>
);
