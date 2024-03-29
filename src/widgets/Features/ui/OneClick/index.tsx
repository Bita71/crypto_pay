import React, { FC } from "react";
import { Card, Link, Text, Theme, useTheme } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { Trans, useTranslation } from "next-i18next";

interface Props {
  className?: string;
}

export const OneClick: FC<Props> = function OneClick({ className }) {
  const {t} = useTranslation('common');
  const { theme } = useTheme();

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
            <source src={"/movies/one-click-light.mp4"} type="video/mp4" />
          )}
          {theme === Theme.dark && (
            <source src={"/movies/one-click-dark.mp4"} type="video/mp4" />
          )}
        </video>{" "}
      </div>
      <Text className={styles.title} variant="h3" component="h3">
        {t('features-one-click-title', 'One click to start')}
      </Text>
      <Trans i18nKey={'features-one-click-description'}>
        <Text variant="base" color="gray" component="p">
          Open <Link href="https://t.me/CryptoBot">@CryptoBot</Link>, go to{" "}
          <Link href="https://t.me/CryptoBot?start=pay">Crypto Pay</Link> and tap Create App to get API Token
        </Text>
      </Trans>
    </Card>
  );
};
