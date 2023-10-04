import React from "react";
import { Container, Link, Text } from "@/shared/ui";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const QuickStart = function QuickStart() {
  return (
    <section id="start" className={styles.section}>
      <Container className={styles.container}>
        <Text className={styles.title} variant="h2" component="h2">
          Quick start using{" "}
          <Text isStableColor color="blue" variant="h2" component="span">
            Crypto Pay
          </Text>
        </Text>

        <ul className={styles.steps}>
          <li className={styles.stepsItem}>
            <div className={styles.stepsInfo}>
              <Text color="white" variant="h3" className={styles.stepsNumber}>
                1
              </Text>
              <div className={styles.stepsContent}>
                <Text className={styles.stepsTitle} variant="h3" component="h3">
                  Authorizing your app
                </Text>
                <ol className={styles.authSteps}>
                  <li>
                    <Text color="dark" component="span" variant="base">
                      1. Open <Link href="/">@CryptoBot</Link>
                    </Text>
                  </li>
                  <li>
                    <Text color="dark" component="span" variant="base">
                      2. Go to <Link href="/">Crypto Pay</Link>
                    </Text>
                  </li>
                  <li>
                    <Text color="dark" component="span" variant="base">
                      3. Tap <Link href="/">Create App</Link>
                    </Text>
                  </li>
                  <li>
                    <Text color="dark" component="span" variant="base">
                      4. Get <Link href="/">API Token</Link>
                    </Text>
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
                  Crypto Pay API Request
                </Text>
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
                <ul className={styles.apiSteps}>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Link href="/">URL query string</Link>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Link href="/">application/json</Link>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Link href="/">application/x-www-form-urlencoded</Link>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Link href="/">multipart/form-data</Link>
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
                  Getting updates
                </Text>
                <Text
                  variant="base"
                  color="gray"
                  component="p"
                  className={styles.stepsText}
                >
                  There are two ways of receiving updates for your app:
                </Text>
                <ul className={styles.apiSteps}>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Text variant="base" color="gray" component="p">
                      <Link href="/">getInvoices</Link> method to get a list of
                      created invoices.
                    </Text>
                  </li>
                  <li className={styles.apiStepsItem}>
                    <span className={styles.apiStepsCircle} />
                    <Text variant="base" color="gray" component="p">
                      <Link href="/">Webhooks</Link> to receive updates in
                      realtime.
                    </Text>
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
