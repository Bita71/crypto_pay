import React, { FC } from "react";
import { Card, Link, Text } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { Trans, useTranslation } from "next-i18next";

interface Props {
  className?: string;
}

export const PaymentStatistics: FC<Props> = function PaymentStatistics({
  className,
}) {
  const { t } = useTranslation("common");
  return (
    <Card className={classNames(styles.card, className)}>
      <video
        playsInline
        controls={false}
        muted
        autoPlay
        className={styles.video}
        loop
      >
        <source src="/movies/stats.mp4" type="video/mp4" />
      </video>
      <Text className={styles.title} variant="h3" component="h4">
        {t('features-payment-title', "Payment statistics")}
      </Text>
      <Trans i18nKey={'features-payment-description'}>
        <Text variant="base" color="gray" component="p">
          Open <Link href="https://t.me/CryptoBot">@CryptoBot</Link>, go to{" "}
          <Link href="https://t.me/CryptoBot?start=pay">Crypto Pay</Link> and My Apps, App Name to get Statistics
        </Text>
      </Trans>
    </Card>
  );
};
