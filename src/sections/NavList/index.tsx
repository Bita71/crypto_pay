import React, { FC } from "react";
import { Text } from "@/shared/ui";
import styles from "./styles.module.scss";

const links = [
  { title: "Use cases" },
  { title: "Features" },
  { title: "How to start" },
];

export const NavList = function NavList() {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.title}>
          <Text color="dark" component="span" variant="button">
            {link.title}
          </Text>
        </li>
      ))}
    </ul>
  );
};
