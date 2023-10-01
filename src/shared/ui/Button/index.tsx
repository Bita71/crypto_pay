import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { Text } from "../Text";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "icon";
  color?: "light" | "dark";
  isStableColor?: boolean,
}

export const Button: FC<Props> = function Button({
  color = "light",
  variant = "primary",
  children,
  className,
  isStableColor = false,
  ...props
}) {
  return (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        styles[color],
        { [styles.stable]: isStableColor },
        className
      )}
      {...props}
    >
      {variant === "icon" ? (
        children
      ) : (
        <Text
          isStableColor={variant === 'primary' || isStableColor}
          variant="button"
          color='white'
          component="span"
          className={classNames(styles.text, styles[variant], styles[color])}
        >
          {children}
        </Text>
      )}
    </button>
  );
};
