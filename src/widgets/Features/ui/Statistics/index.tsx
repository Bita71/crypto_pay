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
      <video controls={false} muted autoPlay className={styles.video} loop>
        <source src="/movies/Stats.mp4" type="video/mp4" />
      </video>
      <Text className={styles.title} variant="h3" component="h4">
        {t("Payment statistics")}
      </Text>
      <Trans>
        <Text variant="base" color="gray" component="p">
          Open <Link href="https://t.me/CryptoBot">@CryptoBot</Link>, go to{" "}
          <Link href="https://t.me/CryptoBot">Crypto Pay</Link> and <Link href="https://t.me/CryptoBot">My Apps</Link>,
          App Name to get Statistics
        </Text>
      </Trans>
    </Card>
  );
};
