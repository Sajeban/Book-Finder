import React from 'react';
import CardAuthor from '@/components/CardAuthor';

const HomeCard = () => {
  return (
    <div className={`relative flex flex-col-reverse justify-end md:flex-row`}>
      <div className="z-10 -mt-8 w-full px-3 sm:px-6 md:absolute md:left-0 md:top-1/2 md:mt-0 md:w-3/5 md:-translate-y-1/2 md:px-0 lg:w-1/2 xl:w-2/5">
        <div className="space-y-3 rounded-3xl !border-opacity-0 bg-white bg-opacity-40 p-4 shadow-lg backdrop-blur-lg backdrop-filter sm:space-y-5 sm:p-8 md:px-10 xl:py-14">
          <div className="mb-12 text-neutral-900 md:mb-16">
            <span className="mt-2 block text-base font-normal text-[#0074D9] sm:text-xl md:mt-3">
              Find Your Next Favorite Book in <b>Seconds</b>
            </span>
          </div>

          <h2 className="text-xl font-semibold text-neutral-500 sm:text-2xl">
            <p>
              Reading is important. If you know how to read, then the whole world opens up to you.
            </p>
          </h2>

          <CardAuthor
            className="relative"
            displayName="Barrack Obama"
            position="44th U.S. President"
            avatar="images/obama.webp"
          />

          <div className="mt-auto flex items-center justify-between"></div>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-2/3">
        <div className="relative block">
          <div
            className={`aspect-h-12 aspect-w-16 relative sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9`}
          >
            <img
              src="https://images.unsplash.com/photo-1440778303588-435521a205bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
              className="absolute inset-0 rounded-3xl object-cover"
              alt="Book Stack"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
