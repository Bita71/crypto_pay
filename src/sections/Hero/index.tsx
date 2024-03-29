import React from "react";
import { Button, Container, Text } from "@/shared/ui";
import styles from "./styles.module.scss";
import { Trans, useTranslation } from "next-i18next";

const botsImages = [
  "/images/bot-1.webp",
  "/images/bot-2.webp",
  "/images/bot-3.webp",
  "/images/bot-4.webp",
  "/images/bot-5.webp",
];

export const Hero = function Hero() {
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
    <section>
      <Container className={styles.hero}>
        <div className={styles.info}>
          <Trans i18nKey={"hero-title"}>
            <Text className={styles.title} variant="h1" component="h1">
              Crypto payments for{" "}
              <Text
                style={{ display: "inline" }}
                variant="h1"
                color="blue"
                component="span"
              >
                Telegram Bots
              </Text>
            </Text>
          </Trans>
          <Text className={styles.text} variant="base" component="h2">
            {t(
              "hero-description",
              "Use Crypto Pay in your Telegram Bots and accept crypto payments seamlessly."
            )}
          </Text>
          <Button
            onClick={handleClick}
            className={styles.button}
            variant="primary"
          >
            {t("get-started", "Integrate")}
          </Button>
          <ul className={styles.icons}>
            {botsImages.map((botImage) => (
              <li
                style={{ backgroundImage: `url(${botImage})` }}
                key={botImage}
                className={styles.iconsItem}
              />
            ))}
          </ul>
          <Text component="p" variant="base">
            {t("hero-bots", "Popular bots use Crypto Pay")}
          </Text>
        </div>
        <div className={styles.phone} />
      </Container>
    </section>
  );
};
