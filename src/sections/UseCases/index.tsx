import React from "react";
import { UseCasesSlider } from "@/features/UseCases";
import { Container } from "@/shared/ui";
import styles from "./styles.module.scss";

export const UseCases = function UseCases() {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <UseCasesSlider />
      </Container>
    </section>
  );
};
