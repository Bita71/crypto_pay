import React, { FC, useCallback, useMemo, useRef, useState } from "react";
import { Button, Text } from "@/shared/ui";
import { PlanetIcon } from "@/shared/icons";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import { useClickOutside } from "@/shared/hooks";
import Link from "next/link";
import classNames from "classnames";

const langMap: Record<string, string> = {
  ru: "Русский",
  en: "Английский",
  de: "Немецкий",
};

interface Props {
  className?: string;
}

export const ChangeLang: FC<Props> = function ChangeLang({ className }) {
  const ref = useRef<HTMLDivElement>(null);
  const [langOpen, setLangOpen] = useState(false);
  const { i18n } = useTranslation("common");
  const handleLangClick = () => {
    setLangOpen(true);
  };

  const handleLangClose = useCallback(() => setLangOpen(false), []);

  useClickOutside({
    callback: handleLangClose,
    elRef: ref,
  });

  const selectedLang = i18n.language ?? "en";
  const langList = useMemo(() => {
    return Object.entries(langMap).filter(([key]) => key !== selectedLang);
  }, [selectedLang]);

  return (
    <div ref={ref} className={classNames(styles.langContainer, className)}>
      <Button
        onClick={handleLangClick}
        className={styles.langButton}
        variant="icon"
      >
        <PlanetIcon className={styles.langIcon} />
        <Text isStableColor variant="button" color="white">
          {langMap[selectedLang]}
        </Text>
      </Button>
      {langOpen && (
        <div className={styles.langDropDown}>
          <ul className={styles.langList}>
            {langList.map(([key, text]) => (
              <li key={key} className={styles.langItem}>
                <Link href="https://t.me/CryptoBot" locale={key}>
                  <Button onClick={handleLangClose} variant="icon">
                    <Text color="dark" variant="button">
                      {text}
                    </Text>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
