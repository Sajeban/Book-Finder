'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/books?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
      <div className="max-w-md flex-grow">
        {' '}
        {/* Increased max-w-xs to max-w-md for a wider search bar */}
        <form onSubmit={onSubmit} className="relative">
          <Input
            type="search"
            placeholder="Search your Books..."
            className="w-full border-2 border-[#0074D9] pr-10"
            sizeClass="h-[52px] pl-6 py-4 text-lg"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
