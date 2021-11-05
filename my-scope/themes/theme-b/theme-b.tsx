import React from "react";

import styles from "./theme-b.module.scss";

export type ThemeBProps = {
  /**
   * a text to be rendered in the component.
   */
  children: React.ReactNode;
};

export function ThemeB({ children }: ThemeBProps) {
  return <div className={styles.theme}>{children}</div>;
}
