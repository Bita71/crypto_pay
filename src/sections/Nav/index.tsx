import React, { FC } from "react";
import { Text } from "@/shared/ui";
import styles from "./styles.module.scss";

const links = [
  { title: "Use cases" },
  { title: "Features" },
  { title: "How to start" },
];

export const Nav = function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.title}>
            <Text className={styles.listText} component="span" variant="button">
              {link.title}
            </Text>
          </li>
        ))}
      </ul>
    </nav>
  );
};