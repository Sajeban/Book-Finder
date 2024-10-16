import React from 'react';

function RatingComponent({ rating }: { rating: string }) {
  return (
    <div className="flex flex-row items-center space-x-2.5">
      <div
        className={`group relative flex h-9 min-w-[68px] items-center rounded-full bg-rose-50 px-4 text-sm leading-none text-rose-600`}
      >
        <svg width="24" height="24" fill={'currentColor'} viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className={`ml-1 text-rose-600`}>{rating}</span>
      </div>
    </div>
  );
}

export default RatingComponent;
