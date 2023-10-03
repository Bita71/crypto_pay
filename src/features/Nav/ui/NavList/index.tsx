import React, { FC } from "react";
import { Text } from "@/shared/ui";
import styles from "./styles.module.scss";
import classNames from "classnames";

const links = [
  { title: "Use cases" },
  { title: "Features" },
  { title: "How to start" },
];

interface Props {
  color?: "dark" | "white";
  isStableColor?: boolean;
  className?: string;
}

export const NavList: FC<Props> = function NavList({
  color = "dark",
  isStableColor = false,
  className,
}) {
  return (
    <ul className={classNames(styles.list, className)}>
      {links.map((link) => (
        <li key={link.title}>
          <Text
            isStableColor={isStableColor}
            color={color}
            component="span"
            variant="button"
          >
            {link.title}
          </Text>
        </li>
      ))}
    </ul>
  );
};
