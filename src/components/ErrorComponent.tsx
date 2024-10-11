import { SOMETHING_WENT_WRONG } from '@/app/_lib/constants';

const ErrorComponent = ({
  errorMessage = SOMETHING_WENT_WRONG,
  errorTitle = 'Oops!',
}: {
  errorMessage?: string;
  errorTitle?: string;
}) => (
  <div>
    <div className="container relative py-16 lg:py-20">
      <header className="mx-auto max-w-2xl space-y-7 text-center">
        <h2 className="text-7xl md:text-8xl">📚️</h2>
        <h1 className="text-8xl font-semibold tracking-widest text-[#0074D9] md:text-9xl">
          {errorTitle}
        </h1>
        <span className="block text-sm font-medium tracking-wider text-neutral-800 sm:text-base">
          {errorMessage}
        </span>
      </header>
    </div>
  </div>
);

export default ErrorComponent;
