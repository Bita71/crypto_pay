import React from "react";
import Image from "next/image";
import { Button, Container } from "@/shared/ui";
import { Nav } from "../Nav";
import styles from "./styles.module.scss";

export const Header = function Header() {
  return (
    <header>
      <Container className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Crypto bot logo"
            className={styles.logoImg}
            fill
            objectFit='cover'
          />
        </div>
        <Nav className={styles.nav} />
        <Button variant="secondary">
          Get started
        </Button>
      </Container>
    </header>
  );
};
