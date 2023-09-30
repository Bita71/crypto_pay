import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import styles from './styles.module.scss';

const inter = Inter({ subsets: ['latin'] })

interface Props extends HTMLAttributes<HTMLParagraphElement & HTMLSpanElement> {
  variant?: 'base' | 'button' | 'description',
  component?: 'span' | 'p',
}

export const Text: FC<Props> = function Text({
  variant = 'base',
  component = 'p',
  className,
  children,
  ...props
}) {
  const Component = component
  return (
    <Component
      {...props}
      className={classNames(
        inter.className,
        styles.text,
        styles[variant],
        className
      )}
    >
      {children}
    </Component>
  )
};
