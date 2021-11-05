import React from "react";

import { ThemeA } from "@my-scope/themes.theme-a";
import { ThemeB } from "@my-scope/themes.theme-b";
export type ThemeSwitcherProps = {
  /**
   * a text to be rendered in the component.
   */
  children: React.ReactNode;
};

export function ThemeSwitcher({ children }: ThemeSwitcherProps) {
  const [theme, setTheme] = React.useState<"a" | "b">("a");
  const toggleTheme = () => {
    setTheme(theme === "a" ? "b" : "a");
  };
  return (
    <div>
      current theme: <button onClick={toggleTheme}>{theme}</button>
      {theme === "a" ? (
        <ThemeA>{children}</ThemeA>
      ) : (
        <ThemeB>{children}</ThemeB>
      )}
    </div>
  );
}
