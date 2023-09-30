import React, 
{ 
  FC, 
  HTMLAttributes, 
} from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary',
  color?: 'light' | 'dark',
}

export const Button: FC<Props>  = function Button({
  color = 'light',
  variant = 'primary',
  children,
  className,
  ...props
}) {
  return (
    <button 
      className={classNames(
        styles.button,
        styles[variant],
        styles[color],
        className
      )}
      {...props}
    >
      <Text 
        variant='button' 
        component='span' 
        className={classNames(
          styles.text,
          styles[variant],
          styles[color],
        )}
      >
        {children}
      </Text>
    </button>
  )
};
