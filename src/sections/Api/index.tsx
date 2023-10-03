import React from "react";
import { Button, Card, Container, Text } from "@/shared/ui";
import styles from "./styles.module.scss";

export const Api = function Api() {
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
            Explore available methods and types and integrate them in any
            programming language.
          </Text>
          <a href="/">
            <Button
              isStableColor
              variant="secondary"
              color="dark"
            >
              Open API Docs
            </Button>
          </a>
        </Card>
      </Container>
    </section>
  );
};
