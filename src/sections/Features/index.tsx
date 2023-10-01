import React from "react";
import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";
import { Currencies, OneClick } from "@/widgets/Features";

export const Features = function Features() {
  return (
    <section>
      <Container>
        <Currencies />
        <OneClick />
      </Container>
    </section>
  );
};
