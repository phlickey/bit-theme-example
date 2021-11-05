import React from "react";

import styles from "./button.module.scss";

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}
