'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BookCard from '@/components/BookCard';
import LoadingVideo from '@/components/LoadingVideo';
import { Book } from '@/app/_types/types';
import ErrorComponent from '@/components/ErrorComponent';
import {
  BOOKS_NOT_FOUND,
  GOOGLE_BOOKS_API_CAll,
  RATE_LIMIT_ERROR,
  SEARCH_BOOK_NOW,
  SOMETHING_WENT_WRONG,
} from '@/app/_lib/constants';
import ButtonPrimary from '@/components/ButtonPrimary';

interface GoogleBooksApiBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    imageLinks?: {
      smallThumbnail?: string;
    };
  };
}

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams(); // Get search params from the URL
  const searchQuery = searchParams.get('search') || ''; // Extract the 'search' query param

  // We fetch data from api as soon as the component mounts and everytime the searchQuery changes.
  // Search Query is received from the query params
  useEffect(() => {
    if (searchQuery) {
      fetchBooks(searchQuery, 0); // Fetch books on initial load
    } else {
      // edge case - if there are no query params, we show a message to the user
      setLoading(false);
      setError(SEARCH_BOOK_NOW);
    }
  }, [searchQuery]);

  // Fetch books make paginated calls  to the google books API.
  // 20 Books are fetched at a time.
  const fetchBooks = async (query: string, startIdx = 0) => {
    setLoading(true);
    setError(null);

    // Fetch the relevant fields
    const fields = 'items(id,volumeInfo(title,authors,publishedDate,imageLinks/smallThumbnail))';

    try {
      // Concatenate the pagination and fields variable into the request URL
      const res = await fetch(
        `${GOOGLE_BOOKS_API_CAll}?q=${query}&startIndex=${startIdx}&maxResults=20&fields=${fields}`,
      );

      if (res.status === 429) {
        throw new Error(RATE_LIMIT_ERROR);
      }

      const data = await res.json();

      const formattedBooks =
        data.items?.map((item: GoogleBooksApiBook) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors || ['Unknown'],
          publishedDate: item.volumeInfo.publishedDate || 'Unknown',
          smallThumbnail:
            item.volumeInfo.imageLinks?.smallThumbnail || '/images/bookPlaceHolder.png',
        })) || [];

      if (startIdx === 0) {
        setBooks(formattedBooks); // Set the new list of books
      } else {
        setBooks((prevBooks) => [...prevBooks, ...formattedBooks]); // Append additional books
      }

      if (formattedBooks.length < 20) {
        setHasMore(false); // No more data to fetch
      }
    } catch (error) {
      setError((error as Error).message || SOMETHING_WENT_WRONG);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the next 20 books if the user clicks show more button
  const handleShowMore = () => {
    setStartIndex((prevIndex) => prevIndex + 20);
    fetchBooks(searchQuery, startIndex + 20);
  };

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Conditionally render the text and action for Paginated Calls to show more books or move to top
  const renderShowMoreButton = () => {
    let text = 'Loading...';
    let handlerFunction = handleShowMore;

    if (!loading && hasMore) {
      text = 'Find me more';
    } else if (!loading && !hasMore) {
      text = 'Move to top';
      handlerFunction = handleMoveToTop;
    }

    return (
      <ButtonPrimary
        className="bg-[#0074D9] p-2 text-white"
        onClick={handlerFunction}
        disabled={loading} // Disable only when loading
      >
        {text}
      </ButtonPrimary>
    );
  };

  // Display respective error messages
  if (error) {
    if (!searchQuery) {
      return <ErrorComponent errorMessage={error} errorTitle="Hello!" />;
    }
    return <ErrorComponent errorMessage={error} />;
  }

  // if api response is empty, display the below error
  if (!loading && books.length == 0) {
    return <ErrorComponent errorMessage={BOOKS_NOT_FOUND} />;
  }

  return (
    <div className="container mx-auto py-8 lg:py-14">
      {loading && books.length === 0 && (
        <div className="flex h-96 items-center justify-center">
          <LoadingVideo />
        </div>
      )}

      {/*Populate the fetched books*/}
      {books.length > 0 && (
        <div>
          <h2 className="flex justify-center font-mono text-xl font-light tracking-tighter text-[#0074D9] md:text-3xl">
            We found these books for you 👇
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-8 lg:mt-10 lg:grid-cols-4 xl:grid-cols-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}

      {books.length > 0 && (
        <div className="mt-12 flex justify-center">{renderShowMoreButton()}</div>
      )}
    </div>
  );
};

// useSearchParams() should be wrapped in a suspense boundary as per next js guidelines
export default function SearchWithSuspense() {
  return (
    <Suspense fallback={<ErrorComponent errorMessage={SEARCH_BOOK_NOW} />}>
      <Home />
    </Suspense>
  );
}
