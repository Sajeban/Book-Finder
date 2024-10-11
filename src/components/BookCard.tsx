import Link from 'next/link';
import FeaturedMedia from '@/components/FeaturedMedia';
import { Book } from '@/app/_types/types';

interface CardProps {
  className?: string;
  book: Book;
}

const BookCard = ({ className = 'h-full', book }: CardProps) => {
  return (
    <div
      className={`group relative flex flex-col rounded-3xl border border-neutral-200 border-opacity-70 bg-white transition-shadow hover:border-transparent hover:bg-neutral-50 hover:shadow-xl ${className}`}
    >
      <Link href={`/books/${book.id}`}>
        {/* Featured Media (Book Image) */}
        <div className="relative block h-60 w-full flex-shrink-0 overflow-hidden rounded-t-xl">
          {/* Changed aspect ratio to 3:4 to make the image smaller */}
          <FeaturedMedia
            imageSrc={book.smallThumbnail || '/images/placeholder.jpg'}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col space-y-3 p-4">
          <h2 className="block text-base font-semibold text-neutral-900">
            <Link href={`/books/${book.id}`}>
              <span className="line-clamp-2" title={book.title}>
                {book.title}
              </span>
            </Link>
          </h2>
          <p className="truncate text-xs text-neutral-500">By: {book.authors.join(', ')}</p>
          <p className="text-xs text-neutral-500">Published: {book.publishedDate}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
