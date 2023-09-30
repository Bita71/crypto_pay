import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] })

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Title: FC<Props> = function Title({
  variant = 'h1',
  className,
  children,
  ...props
}) {
  const Component = variant;

  return (
    <Component
      {...props}
      className={classNames(
        inter.className,
        styles.title,
        styles[variant],
        className,
      )}
    >
      {children}
    </Component>
  )
};
