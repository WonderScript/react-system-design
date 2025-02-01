import React from 'react';

type ButtonProps = {
  disabled?: boolean;
};

type ButtonWithOnClick = ButtonProps & {
  onClick: () => void;
  href?: never;
};

type ButtonWithHref = ButtonProps & {
  onClick?: () => void;
  href: string;
};

type Button = ButtonWithOnClick | ButtonWithHref;

export function Button({
  disabled,
}: Button):
  | React.ReactElement<HTMLButtonElement>
  | React.ReactElement<HTMLAnchorElement> {
  return <button disabled={disabled}></button>;
}
