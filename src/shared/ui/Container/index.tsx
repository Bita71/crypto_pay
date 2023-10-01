import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  children: ReactNode,
  className?: string
}

export const Container: FC<Props> = function Container({
  children,
  className
}) {
  return (
    <div className={classNames(styles.container, className)}>
      {children}
    </div>
  )
};
