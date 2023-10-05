import React, { FC } from "react";
import { Card, Link, Text } from "@/shared/ui";
import {
  ETHIcon,
  BNBIcon,
  BTCIcon,
  LTCIcon,
  TONIcon,
  USDTIcon,
  USDCIcon,
  TRXIcon,
} from "@/shared/icons";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Trans, useTranslation } from "next-i18next";

const currencies = [
  {
    name: "ETH",
    Icon: ETHIcon,
  },
  {
    name: "USDT",
    Icon: USDTIcon,
  },
  {
    name: "TON",
    Icon: TONIcon,
  },
  {
    name: "BTC",
    Icon: BTCIcon,
  },
  {
    name: "TRX",
    Icon: TRXIcon,
  },
  {
    name: "LTC",
    Icon: LTCIcon,
  },
  {
    name: "USDC",
    Icon: USDCIcon,
  },
  {
    name: "BNB",
    Icon: BNBIcon,
  },
];

interface Props {
  className?: string;
}

export const Currencies: FC<Props> = function Currencies({ className }) {
  const { t } = useTranslation("common");
  return (
    <Card className={classNames(styles.card, className)}>
      <div className={styles.textBlock}>
        <Text variant="h3" component="h2">
          {t("Accept a wide range of cryptocurrencies")}
        </Text>
        <Trans>
          <Text variant="base" color="gray" component="p">
            Bill any supported cryptocurrencies with asset parameter in{" "}
            <Link href="https://t.me/CryptoBot">GetInvoice</Link> method
          </Text>
        </Trans>
      </div>
      <ul className={styles.currencies}>
        {currencies.map((item, index) => {
          const commonStyle = { animationDelay: `${index * 0.375}s` };
          return (
            <li className={styles.currenciesItem} key={item.name}>
              <item.Icon
                style={commonStyle}
                className={styles.currenciesIcon}
              />
              <Text
                style={commonStyle}
                variant="description"
                className={styles.currenciesText}
              >
                {item.name}
              </Text>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
