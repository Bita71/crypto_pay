import classNames from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Card: FC<Props> = function Card({
  children,
  className,
  ...props
}) {
  return (
    <div {...props} className={classNames(styles.card, className)}>
      {children}
    </div>
  )
};
