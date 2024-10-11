import ErrorComponent from '@/components/ErrorComponent';
import { BOOK_NOT_FOUND } from '@/app/_lib/constants';

function NotFound() {
  return <ErrorComponent errorMessage={BOOK_NOT_FOUND} />;
}

export default NotFound;
