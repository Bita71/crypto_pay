import React, { FC } from "react";
import { Card, Link, Text, Theme, useTheme } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { Trans, useTranslation } from "next-i18next";

interface Props {
  className?: string;
}

export const Exchanges: FC<Props> = function Exchanges({ className }) {
  const { theme } = useTheme();
  const { t } = useTranslation("common");

  return (
    <Card className={classNames(styles.card, className)}>
      <div className={styles.videoBlock}>
        <video playsInline
          className={styles.video}
          key={theme}
          controls={false}
          muted
          autoPlay
          loop
        >
          {theme === Theme.light && (
            <source src={"/movies/exchange-light.mp4"} type="video/mp4" />
          )}
          {theme === Theme.dark && (
            <source src={"/movies/exchange-dark.mp4"} type="video/mp4" />
          )}
        </video>
      </div>
      <Text className={styles.title} variant="h3" component="h3">
        {t('features-real-time-title', "Real-time exchange rates")}
      </Text>
      <Trans i18nKey={'features-real-time-description'}>
        <Text variant="base" color="gray" component="p">
          Request up to date currency rate with the{" "}
          <Link href="https://help.crypt.bot/crypto-pay-api#getExchangeRates">getExchangeRates</Link> API method
        </Text>
      </Trans>
    </Card>
  );
};
