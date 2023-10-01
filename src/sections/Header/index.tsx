"use client";
import React from "react";
import classNames from "classnames";
import { NavList } from "@/features/Nav";
import { Button, Container } from "@/shared/ui";
import { Theme, useTheme } from "@/shared/hooks";
import { LogoIcon, MoonIcon, SunIcon } from "@/shared/icons";
import styles from "./styles.module.scss";

export const Header = function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <Container className={styles.header}>
        <LogoIcon className={styles.logo} />
        <nav className={styles.nav}>
          <NavList />
        </nav>
        <div className={styles.buttons}>
          <Button onClick={toggleTheme} variant="icon">
            {theme === Theme.light && (
              <SunIcon className={classNames(styles.themeIcon, styles.light)} />
            )}
            {theme === Theme.dark && (
              <MoonIcon className={classNames(styles.themeIcon, styles.dark)} />
            )}
          </Button>
          <Button variant="secondary">Get started</Button>
        </div>
      </Container>
    </header>
  );
};
