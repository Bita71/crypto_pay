import React from "react";
import { Button, Container, Text } from "@/shared/ui";
import { GOIcon, JSIcon, NETIcon, PHPIcon, PythonIcon } from "@/shared/icons";
import styles from "./styles.module.scss";
import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";

const channels = [
  {
    name: "crypto-pay-api",
    Icon: JSIcon,
    link: "https://github.com/Foile/crypto-pay-api",
  },
  {
    name: "CryptoPay",
    Icon: NETIcon,
    link: "https://github.com/WinoGarcia/CryptoPay",
  },
  {
    name: "crypto-pay-api",
    Icon: PHPIcon,
    link: "https://github.com/klev-o/crypto-pay-api",
  },
  {
    name: "aiocryptopay",
    Icon: PythonIcon,
    link: "https://github.com/layerqa/aiocryptopay",
  },
  {
    name: "cryptobot-sdk-golang",
    Icon: GOIcon,
    link: "https://github.com/arthurshafikov/cryptobot-sdk-golang",
  },
];

export const Community = function Community() {
  const { t } = useTranslation("common");
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.info}>
          <Text variant="h2" component="h2">
            {t("community-title", "Join dev community")}
          </Text>
          <Text color="gray" variant="base" component="p">
            {t(
              "community-description",
              "Connect with bot developers and explore the possibilities our crypto payments service unlocks."
            )}
          </Text>
        </div>
        <ul className={styles.channels}>
          {channels.map((channel, index) => (
            <li className={styles.channelsItem} key={channel.name + index}>
              <Link href={channel.link}>
                <channel.Icon className={styles.channelsIcon} />
                <Text variant="base" color="gray">
                  {channel.name}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="https://t.me/CryptoPayDev">
          <Button variant="primary">
            {t("community-open-chat", "Open Devs chat")}
          </Button>
        </Link>
      </Container>
    </section>
  );
};
