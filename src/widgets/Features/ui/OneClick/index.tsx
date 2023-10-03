"use client";
import React, { FC } from "react";
import { Card, Link, Text, Theme, useTheme } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const OneClick: FC<Props> = function OneClick({ className }) {
  const { theme } = useTheme();

  return (
    <Card className={classNames(styles.card, className)}>
      <div className={styles.videoBlock}>
        <video
          className={styles.video}
          key={theme}
          controls={false}
          muted
          autoPlay
          loop
        >
          {theme === Theme.light && (
            <source src={"/one-click-light.mp4"} type="video/mp4" />
          )}
          {theme === Theme.dark && (
            <source src={"/one-click-dark.mp4"} type="video/mp4" />
          )}
        </video>{" "}
      </div>
      <Text className={styles.title} variant="h3" component="h3">
        One click to start
      </Text>
      <Text variant="base" color="gray" component="p">
        Open <Link>@CryptoBot</Link>, go to <Link>Crypto Pay</Link> and tap
        Create App to get API Token
      </Text>
    </Card>
  );
};
