import { PAGE_NOT_FOUND } from '@/app/_lib/constants';

const NotFound = () => (
  <div className="nc-Page404">
    <div className="container relative py-16 lg:py-20">
      {/* HEADER */}
      <header className="mx-auto max-w-2xl space-y-7 text-center">
        <h2 className="text-7xl md:text-8xl">📚️</h2>
        <h1 className="text-8xl font-semibold tracking-widest text-[#0074D9] md:text-9xl">404</h1>
        <span className="block text-sm font-medium tracking-wider text-neutral-800 sm:text-base">
          {PAGE_NOT_FOUND}
        </span>
        {/*<ButtonPrimary href="/" className="mt-4">*/}
        {/*  Return Home Page*/}
        {/*</ButtonPrimary>*/}
      </header>
    </div>
  </div>
);

export default NotFound;
