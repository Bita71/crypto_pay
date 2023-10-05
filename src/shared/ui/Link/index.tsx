import classNames from "classnames";
import React, { FC, LinkHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import {default as NextLink} from "next/link";
import { Text } from "../Text";

interface Props extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string,
}

export const Link: FC<Props> = function Link({
  className,
  children,
  ...props
}) {
  return (
    <NextLink {...props} className={classNames(styles.link, className)}>
      <Text variant="base" isStableColor component="span" color="blue">
        {children}
      </Text>
    </NextLink>
  );
};
