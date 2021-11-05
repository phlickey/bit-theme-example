import React from "react";
import { ThemeA } from "./theme-a";

export const BasicThemeA = () => (
  <ThemeA>
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
  </ThemeA>
);
