"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { Card, Link, Text, Theme, useTheme } from "@/shared/ui";

import styles from "./styles.module.scss";

export const OneClick = function OneClick() {
  const { theme } = useTheme();
  return (
    <Card className={styles.card}>
      <DotLottiePlayer
        src={
          theme === Theme.light
            ? "/one-click-light.lottie"
            : "/one-click-dark.lottie"
        }
        speed={0.75}
        autoplay
        loop
      ></DotLottiePlayer>
      <Text className={styles.title} variant="h3" component="h3">
        Accept a wide range of cryptocurrencies
      </Text>
      <Text variant="base" color="gray" component="p">
        Open <Link>@CryptoBot</Link>, go to <Link>Crypto Pay</Link> and tap
        Create App to get API Token
      </Text>
    </Card>
  );
};
