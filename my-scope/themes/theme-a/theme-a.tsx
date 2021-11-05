import React from "react";

import styles from "./theme-a.module.scss";

export type ThemeAProps = {
  /**
   * a text to be rendered in the component.
   */
  children: React.ReactNode;
};

export function ThemeA({ children }: ThemeAProps) {
  return <div className={styles.theme}>{children}</div>;
}
