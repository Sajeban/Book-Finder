import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps {
  id?: string;
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  targetBlank?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({
  className = 'text-neutral-700',
  translate = '',
  sizeClass = 'px-4 py-3 sm:px-6',
  fontSize = 'text-sm sm:text-base font-medium',
  disabled = false,
  children,
  type,
  loading,
  onClick = () => {},
  id = '',
}: ButtonProps) => {
  const CLASSES = `relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${fontSize} ${sizeClass} ${translate} ${className} `;

  return (
    <button
      id={id}
      disabled={disabled || loading}
      className={`${CLASSES}`}
      onClick={onClick}
      type={type}
    >
      {children || `Click`}
    </button>
  );
};

export default Button;
