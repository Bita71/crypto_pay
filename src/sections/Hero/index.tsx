import React from "react";
import { Button, Container, Text } from "@/shared/ui";
import styles from "./styles.module.scss";

const botsImages = [
  "/images/bot-1.webp",
  "/images/bot-2.webp",
  "/images/bot-3.webp",
  "/images/bot-4.webp",
  "/images/bot-5.webp",
];

export const Hero = function Hero() {
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
          <Text className={styles.title} variant="h1" component="h1">
            Crypto payments for{" "}
            <Text variant="h1" color="blue" component="span">
              telegram bots
            </Text>
          </Text>
          <Text className={styles.text} variant="base" component="h2">
            Seamlessly accept crypto payments in your Telegram bots and
            services.
          </Text>
          <Button
            onClick={handleClick}
            className={styles.button}
            variant="primary"
          >
            Get started
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
            Popular bots use Crypto Pay
          </Text>
        </div>
        <div className={styles.phone} />
      </Container>
    </section>
  );
};
