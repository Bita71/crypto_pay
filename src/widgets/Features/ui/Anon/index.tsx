import React, { FC } from "react";
import { Card, Link, Text } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Anon: FC<Props> = function Anon({ className }) {
  return (
    <Card className={classNames(styles.card, className)}>
      <video className={styles.video} controls={false} muted autoPlay loop>
        <source src={"/anon.mp4"} type="video/mp4" />
      </video>
      <Text className={styles.title} variant="h3" component="h3">
        Anonymous payments
      </Text>
      <Text variant="base" color="gray" component="p">
        Use{" "}
        <Text
          variant="base"
          style={{ fontWeight: "500" }}
          color="gray"
          component="span"
        >
          allow_anonymous
        </Text>{" "}
        parameter in <Link href="/">createInvoice</Link> method to give use ran option to
        remain private
      </Text>
    </Card>
  );
};
