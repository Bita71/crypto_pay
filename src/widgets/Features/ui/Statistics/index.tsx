import React, { FC } from "react";
import { Card, Link, Text } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const PaymentStatistics: FC<Props> = function PaymentStatistics({
  className,
}) {
  return (
    <Card className={classNames(styles.card, className)}>
      <video controls={false} muted autoPlay className={styles.video} loop>
        <source src="/Stats.mp4" type="video/mp4" />
      </video>
      <Text className={styles.title} variant="h3" component="h4">
        Payment statistics
      </Text>
      <Text variant="base" color="gray" component="p">
        Open <Link href="/">@CryptoBot</Link>, go to <Link href="/">Crypto Pay</Link> and{" "}
        <Link href="/">My Apps</Link>, App Name to get Statistics
      </Text>
    </Card>
  );
};
