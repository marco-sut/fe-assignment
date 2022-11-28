// We would like you to build an accessible, typed button component which:
//
// 1. Forwards its ref to the actual dom element it returns.
//
// 2. Has the following props:
//      - variant<string>: Defines the button style to show, there are two variants, as depicted in 'buttons.png':
//          - 'primary' - the primary button style
//          - 'secondary' - the secondary button style
//
// 3. Also accepts any other props of a regular HTML button, such as disabled, and also any additional classNames.
//
// 4. Can have text and icons as content as depicted in buttons.png. Please use the provided umbrella svg for the icon.
//
// 5. Can be easily themed with a brand colour other than blue.
//
// Notes:
// We are using css modules in this project, so you can add styles from the button module file with styles[className] - https://github.com/css-modules/css-modules
// You may add any helper libraries you need

import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './_button.module.css';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonConfig {
  variant?: ButtonVariant;
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & ButtonConfig;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    type = 'button',
    className,
    children,
    ...rest
  } = props;

  const merged = clsx(styles.button, styles[variant], className);

  return (
    <button ref={ref} type={type} className={merged} {...rest}>
      {children}
    </button>
  );
});
