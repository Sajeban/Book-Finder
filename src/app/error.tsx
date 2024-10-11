'use client'; // Error components must be Client Components

import ErrorComponent from '@/components/ErrorComponent';
import { SOMETHING_WENT_WRONG } from '@/app/_lib/constants';

export default function Error() {
  return <ErrorComponent errorMessage={SOMETHING_WENT_WRONG} />;
}
