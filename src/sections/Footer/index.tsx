import React, { FC } from "react";
import { NavList } from "@/features/Nav";
import { Button, ChangeLang, Container, Text } from "@/shared/ui";
import { LogoIcon } from "@/shared/icons";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = function Footer({ className }) {
  const { t } = useTranslation("common");
  const handleClick = () => {
    const element = document.getElementById("start");
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
    <footer className={classNames(styles.footer, className)}>
      <Container className={styles.container}>
        <div className={styles.top}>
          <LogoIcon className={styles.logo} />
          <NavList className={styles.nav} color="white" isStableColor />
          <Button
            onClick={handleClick}
            isStableColor
            variant="secondary"
            color="dark"
          >
            {t("Get started")}
          </Button>
        </div>
        <div className={styles.bottom}>
          <Text variant="button" color="white" isStableColor>
            ©2023 Crypto Bot
          </Text>
          <ChangeLang />
        </div>
      </Container>
    </footer>
  );
};
