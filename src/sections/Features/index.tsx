import React from "react";
import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";
import {
  Anon,
  Currencies,
  Exchanges,
  OneClick,
  PaymentStatistics,
  Send,
} from "@/widgets/Features";

export const Features = function Features() {
  return (
    <section>
      <Container className={styles.container}>
        <Currencies className={styles.currencies} />
        <OneClick className={styles.oneClick} />
        <PaymentStatistics className={styles.stat} />
        <Exchanges className={styles.exchanges} />
        <Anon className={styles.anon} />
        <Send className={styles.send} />
      </Container>
    </section>
  );
};
