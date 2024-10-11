import React from 'react';

function PagesComponent({ pageCount }: { pageCount: string }) {
  return (
    <div className="flex flex-row items-center space-x-2.5">
      <div
        className={`text-neutral-6000 group relative flex h-9 min-w-[68px] items-center rounded-full bg-neutral-50 px-4 text-sm leading-none`}
      >
        <p>Pages</p>
        <span className={`text-neutral-6000 ml-1`}>{pageCount}</span>
      </div>
    </div>
  );
}

export default PagesComponent;
