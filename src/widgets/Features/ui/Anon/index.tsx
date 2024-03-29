import React, { FC } from "react";
import { Card, Link, Text } from "@/shared/ui";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { Trans, useTranslation } from "next-i18next";

interface Props {
  className?: string;
}

export const Anon: FC<Props> = function Anon({ className }) {
  const { t } = useTranslation("common");
  return (
    <Card className={classNames(styles.card, className)}>
      <video playsInline className={styles.video} controls={false} muted autoPlay loop>
        <source src={"/movies/anon.mp4"} type="video/mp4" />
      </video>
      <Text className={styles.title} variant="h3" component="h3">
        {t("features-anonymous-title","Anonymous payments")}
      </Text>
      <Trans i18nKey={'features-anonymous-description'}>
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
          parameter in <Link href="https://help.crypt.bot/crypto-pay-api#createInvoice">createInvoice</Link> method to give use
          ran option to remain private
        </Text>
      </Trans>
    </Card>
  );
};
