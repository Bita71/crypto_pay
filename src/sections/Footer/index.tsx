import React, { FC } from "react";
import { NavList } from "@/features/Nav";
import { Button, Container, Text } from "@/shared/ui";
import { LogoIcon } from "@/shared/icons";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = function Footer({ className }) {
  return (
    <footer className={classNames(styles.footer, className)}>
      <Container className={styles.container}>
        <div className={styles.top}>
          <LogoIcon className={styles.logo} />
          <NavList className={styles.nav} color="white" isStableColor />
          <Button isStableColor variant="secondary" color="dark">
            Get started
          </Button>
        </div>
        <Text variant="button" color="white" isStableColor>
          ©2023 Crypto Bot
        </Text>
      </Container>
    </footer>
  );
};
