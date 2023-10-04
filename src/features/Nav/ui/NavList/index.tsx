import React, { FC, MouseEvent } from "react";
import { Button, Text } from "@/shared/ui";
import styles from "./styles.module.scss";
import classNames from "classnames";

const links = [
  { title: "Use cases", id: "cases" },
  { title: "Features", id: "features" },
  { title: "How to start", id: "start" },
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
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;
    if (!id) {
      return;
    }
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <ul className={classNames(styles.list, className)}>
      {links.map((link) => (
        <li key={link.title}>
          <Button onClick={handleClick} data-id={link.id} variant="icon">
            <Text
              isStableColor={isStableColor}
              color={color}
              component="span"
              variant="button"
            >
              {link.title}
            </Text>
          </Button>
        </li>
      ))}
    </ul>
  );
};
