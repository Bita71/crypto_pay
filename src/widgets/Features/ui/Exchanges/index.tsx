"use client";
import React, { FC } from "react";
import { Card, Link, Text, Theme, useTheme } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Exchanges: FC<Props> = function Exchanges({ className }) {
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
            <source src={"/exchange-light.mp4"} type="video/mp4" />
          )}
          {theme === Theme.dark && (
            <source src={"/exchange-dark.mp4"} type="video/mp4" />
          )}
        </video>
      </div>
      <Text className={styles.title} variant="h3" component="h3">
        Real-time exchange rates
      </Text>
      <Text variant="base" color="gray" component="p">
        Request up to date currency rate with the <Link href="/">getExchangeRates</Link>{" "}
        API method
      </Text>
    </Card>
  );
};
