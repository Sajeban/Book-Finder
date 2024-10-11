'use client';
import { memo } from 'react';
import Link from 'next/link';
import Search from '@/components/Search';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  // Check if the current route is the home page
  const isHomePage = pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="border-b border-neutral-200">
          <div className="relative z-10">
            <div className="container flex flex-col items-center justify-between py-5 sm:flex-row">
              {/* LOGO */}
              <div className="flex w-full flex-shrink-0 items-center justify-center sm:w-auto sm:justify-start">
                <Link href="/" className="inline-block">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    className="h-8 w-auto"
                    layout="intrinsic"
                    width={100}
                    height={50}
                  />
                </Link>
              </div>

              {/* Show the Search Bar on the header for pages except home page */}
              {/* Place the Search bar on the right side for larger screens */}
              {!isHomePage && (
                <div className="hidden max-w-xs flex-grow sm:block">
                  <Search />
                </div>
              )}
            </div>
          </div>

          {/* Show the Search Bar on the header for pages except home page */}
          {/* Place the Search bar below the logo for mobile screens */}
          {!isHomePage && (
            <div className="relative mb-2 block flex w-full justify-center sm:hidden">
              <Search />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default memo(Header);
