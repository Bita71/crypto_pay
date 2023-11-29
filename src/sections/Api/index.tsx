import React from "react";
import { Button, Card, Container, Text } from "@/shared/ui";
import styles from "./styles.module.scss";
import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";

export const Api = function Api() {
  const { t } = useTranslation("common");
  return (
    <section>
      <Container>
        <Card className={styles.card}>
          <Text isStableColor variant="h2" component="h2" color="white">
            Crypto Pay API
          </Text>
          <Text
            isStableColor
            className={styles.description}
            variant="base"
            component="p"
            color="white"
          >
            {t("Explore available methods and types and integrate them in any programming language.")}
          </Text>
          <Link href="https://help.crypt.bot/crypto-pay-api">
            <Button
              isStableColor
              variant="secondary"
              color="dark"
            >
              {t('Open API Docs')}
            </Button>
          </Link>
        </Card>
      </Container>
    </section>
  );
};
