import React, { FC } from "react";
import { Button, Container } from "@/shared/ui";
import { LogoIcon } from "@/shared/icons";
import { Nav } from "../Nav";
import styles from "./styles.module.scss";

export const Header = function Header() {
  return (
    <header>
      <Container className={styles.header}>
        <LogoIcon className={styles.logo} />
        <Nav />
        <Button variant="secondary">
          Get started
        </Button>
      </Container>
    </header>
  );
};
