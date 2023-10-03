"use client";
import React, { FC } from "react";
import { Card, Link, Text, Theme, useTheme } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Send: FC<Props> = function Send({ className }) {
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
          <source src={"/send-light.mp4"} type="video/mp4" />
        )}
        {theme === Theme.dark && (
          <source src={"/send-dark.mp4"} type="video/mp4" />
        )}
      </video>
      </div>
      <Text className={styles.title} variant="h3" component="h3">
        Send coins to users
      </Text>
      <Text variant="base" color="gray" component="p">
        Automate payouts to users with <Link href="/">transfer</Link> API method
      </Text>
    </Card>
  );
};
