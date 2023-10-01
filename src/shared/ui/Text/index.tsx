import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import { Inter } from "next/font/google";
import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

interface Props extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "base" | "button" | "description";
  component?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
  color?: "blue" | "dark" | "white" | "gray";
  isStableColor?: boolean;
}

export const Text: FC<Props> = function Text({
  variant = "base",
  component = "span",
  color = "dark",
  className,
  children,
  isStableColor = false,
  ...props
}) {
  const Component = component;
  return (
    <Component
      {...props}
      className={classNames(
        inter.className,
        styles.text,
        styles[variant],
        styles[color],
        { [styles.stable]: isStableColor },
        className
      )}
    >
      {children}
    </Component>
  );
};
