import Search from '@/components/Search';
import Image from 'next/image';

// Tagline, Home Page Image and Search bar are staged here
const HomeCard2 = ({ className = 'py-8 lg:py-8' }) => {
  return (
    <div className={`relative flex flex-col items-center lg:flex-row ${className}`}>
      <div className="mb-14 flex-shrink-0 text-center lg:mb-0 lg:mr-10 lg:w-2/5 lg:text-left">
        <h2 className="text-4xl font-semibold text-[#0074D9]">
          Find Your Next Favorite Book in <b>Seconds</b> 📘
        </h2>
        <span className="mt-6 block text-neutral-500">Find, Explore, Read</span>
        <div className="relative mx-auto mt-10 max-w-md lg:mx-0 lg:text-left">
          <Search />
        </div>
      </div>

      {/* Image Section */}
      <Image src="/images/home-img.png" alt="Home Image" width={1920} height={1080} />
    </div>
  );
};

export default HomeCard2;
