import React from "react";
import { Container, Link, Text } from "@/shared/ui";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Trans, useTranslation } from "next-i18next";

export const QuickStart = function QuickStart() {
  const { t } = useTranslation("common");
  return (
    <section id="start" className={styles.section}>
      <Container className={styles.container}>
        <Trans>
          <Text className={styles.title} variant="h2" component="h2">
            Quick start using{" "}
            <Text
              style={{ display: "inline" }}
              isStableColor
              color="blue"
              variant="h2"
              component="span"
            >
              Crypto Pay
            </Text>
          </Text>
        </Trans>

        <ul className={styles.steps}>
          <li className={styles.stepsItem}>
            <div className={styles.stepsInfo}>
              <Text color="white" variant="h3" className={styles.stepsNumber}>
                1
              </Text>
              <div className={styles.stepsContent}>
                <Text className={styles.stepsTitle} variant="h3" component="h3">
                  {t("Authorizing your app")}
                </Text>
                <ol className={styles.authSteps}>
                  <li>
                    <Trans>
                      <Text color="dark" component="span" variant="base">
                        1. Open <Link href="https://t.me/CryptoBot">@CryptoBot</Link>
                      </Text>
                    </Trans>
                  </li>
                  <li>
                    <Trans>
                      <Text color="dark" component="span" variant="base">
                        2. Go to <Link href="https://t.me/CryptoBot?start=pay">Crypto Pay</Link>
                      </Text>
                    </Trans>
                  </li>
                  <li>
                    <Trans>
                      <Text color="dark" component="span" variant="base">
                        3. Tap Create App
                      </Text>
                    </Trans>
                  </li>
                  <li>
                    <Trans>
                      <Text color="dark" component="span" variant="base">
                        4. Get API Token
                      </Text>
                    </Trans>
                  </li>
                </ol>
              </div>
            </div>
            <div
              className={styles.stepsImg}
              style={{ backgroundImage: "url(/images/quick-1.webp)" }}
            />
          </li>
          <li className={classNames(styles.stepsItem, styles.reverse)}>
            <div className={styles.stepsInfo}>
              <Text color="white" variant="h3" className={styles.stepsNumber}>
                2
              </Text>
              <div className={styles.stepsContent}>
                <Text className={styles.stepsTitle} variant="h3" component="h3">
                  {t("Crypto Pay API Request")}
                </Text>
                <Trans>
                  <Text
                    variant="base"
                    color="gray"
                    component="p"
                    className={styles.stepsText}
                  >
                    Requests are only served over HTTPS
                    <br />
                    To pass parameters use:
                  </Text>
                </Trans>
                <ul className={styles.apiSteps}>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Text variant="base" color="gray" component="p">{t("URL query string")}</Text>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Text variant="base" color="gray" component="p">application/json</Text>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Text variant="base" color="gray" component="p">application/x-www-form-urlencoded</Text>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Text variant="base" color="gray" component="p">multipart/form-data</Text>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={styles.stepsImg}
              style={{ backgroundImage: "url(/images/quick-2.webp)" }}
            />
          </li>
          <li className={styles.stepsItem}>
            <div className={styles.stepsInfo}>
              <Text color="white" variant="h3" className={styles.stepsNumber}>
                3
              </Text>
              <div className={styles.stepsContent}>
                <Text className={styles.stepsTitle} variant="h3" component="h3">
                  {t("Getting updates")}
                </Text>
                <Text
                  variant="base"
                  color="gray"
                  component="p"
                  className={styles.stepsText}
                >
                  {t("There are two ways of receiving updates for your app:")}
                </Text>
                <ul className={styles.apiSteps}>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Trans>
                      <Text variant="base" color="gray" component="p">
                        <Link href="https://help.crypt.bot/crypto-pay-api#getInvoices">getInvoices</Link> method to get a list
                        of created invoices.
                      </Text>
                    </Trans>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Trans>
                      <Text variant="base" color="gray" component="p">
                        <Link href="https://help.crypt.bot/crypto-pay-api#webhooks">Webhooks</Link> to receive updates in
                        realtime.
                      </Text>
                    </Trans>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={styles.stepsImg}
              style={{ backgroundImage: "url(/images/quick-3.webp)" }}
            />
          </li>
        </ul>
      </Container>
    </section>
  );
};
