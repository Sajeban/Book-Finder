import React from 'react';
import Avatar from '@/components/Avatar';

const CardAuthor = ({ className = '', displayName = '', position = '', avatar = '' }) => {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <Avatar
        sizeClass="h-10 w-10 text-base"
        containerClassName="flex-shrink-0 mr-3"
        radius="rounded-full"
        imgUrl={avatar}
        userName={displayName}
      />
      <div>
        <h2 className={`text-sm font-medium text-neutral-700 hover:text-black`}>{displayName}</h2>
        <span className={`mt-1 flex items-center text-xs text-neutral-500`}>
          <span>{position}</span>
        </span>
      </div>
    </div>
  );
};

export default CardAuthor;
