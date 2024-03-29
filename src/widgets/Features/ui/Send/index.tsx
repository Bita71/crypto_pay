import React, { FC } from "react";
import { Card, Link, Text, Theme, useTheme } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { Trans, useTranslation } from "next-i18next";

interface Props {
  className?: string;
}

export const Send: FC<Props> = function Send({ className }) {
  const { t } = useTranslation("common");
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
            <source src={"/movies/send-light.mp4"} type="video/mp4" />
          )}
          {theme === Theme.dark && (
            <source src={"/movies/send-dark.mp4"} type="video/mp4" />
          )}
        </video>
      </div>
      <Text className={styles.title} variant="h3" component="h3">
        {t('features-send-coins-title',"Send coins to users")}
      </Text>
      <Trans i18nKey={'features-send-coins-description'}>
        <Text variant="base" color="gray" component="p">
          Automate payouts to users with <Link href="https://help.crypt.bot/crypto-pay-api#transfer">transfer</Link> API
          method
        </Text>
      </Trans>
    </Card>
  );
};
