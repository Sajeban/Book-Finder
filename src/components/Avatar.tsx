import React from 'react';

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
  userName?: string;
}

const Avatar = ({
  containerClassName = 'ring-1 ring-white',
  sizeClass = 'h-6 w-6 text-sm',
  radius = 'rounded-md',
  imgUrl = '',
  userName,
}: AvatarProps) => {
  const url = imgUrl || '';
  const name = userName || 'John Doe';
  const _setBgColor = () => {
    return ' "#ffdd00"';
  };

  return (
    <div
      className={`wil-avatar relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden font-semibold uppercase text-neutral-100 shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
      style={{ backgroundColor: url ? undefined : _setBgColor() }}
    >
      {url && <img className="absolute inset-0 h-full w-full object-cover" src={url} alt={name} />}
    </div>
  );
};

export default Avatar;
