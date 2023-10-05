import React from "react";
import { Button, Container, Text } from "@/shared/ui";
import { GOIcon, JSIcon, NETIcon, PHPIcon, PythonIcon } from "@/shared/icons";
import styles from "./styles.module.scss";
import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";

const channels = [
  { name: "crypto-pay-api", Icon: JSIcon },
  { name: "CryptoPay", Icon: NETIcon },
  { name: "crypto-pay-api", Icon: PHPIcon },
  { name: "aiocryptopay", Icon: PythonIcon },
  { name: "cryptobot-sdk-golang", Icon: GOIcon },
];

export const Community = function Community() {
  const { t } = useTranslation("common");
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.info}>
          <Text variant="h2" component="h2">
            {t("Join dev community")}
          </Text>
          <Text color="gray" variant="base" component="p">
            {t(
              "Connect with bot developers and explore the possibilities our crypto payments service unlocks."
            )}
          </Text>
        </div>
        <ul className={styles.channels}>
          {channels.map((channel, index) => (
            <li className={styles.channelsItem} key={channel.name + index}>
              <channel.Icon className={styles.channelsIcon} />
              <Text variant="base" color="gray">
                {channel.name}
              </Text>
            </li>
          ))}
        </ul>
        <Link href="https://t.me/CryptoBot">
          <Button variant="primary">{t("Open Devs chat")}</Button>
        </Link>
      </Container>
    </section>
  );
};
