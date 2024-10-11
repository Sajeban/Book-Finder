import Button from '@/components/Button';
import React from 'react';

const ButtonPrimary = ({ className = '', ...args }) => {
  return (
    <Button
      className={`text-neutral-50 hover:bg-blue-400 disabled:bg-opacity-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
