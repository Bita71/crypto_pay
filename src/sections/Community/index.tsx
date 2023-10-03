import React from "react";
import { Button, Container, Text } from "@/shared/ui";
import { GOIcon, JSIcon, NETIcon, PHPIcon, PythonIcon } from "@/shared/icons";
import styles from "./styles.module.scss";

const channels = [
  { name: "crypto-pay-api", Icon: JSIcon },
  { name: "CryptoPay", Icon: NETIcon },
  { name: "crypto-pay-api", Icon: PHPIcon },
  { name: "aiocryptopay", Icon: PythonIcon },
  { name: "cryptobot-sdk-golang", Icon: GOIcon },
];

export const Community = function Community() {
  return (
    <section>
      <Container className={styles.container}>
        <div className={styles.info}>
          <Text variant="h2" component="h2">
            Join dev community
          </Text>
          <Text color="gray" variant="base" component="p">
            Connect with bot developers and explore the possibilities our crypto
            payments service unlocks.
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
        <Button variant="primary">Open Devs chat</Button>
      </Container>
    </section>
  );
};
