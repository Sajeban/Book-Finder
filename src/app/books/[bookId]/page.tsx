'use client';
import { useEffect, useState } from 'react';
import LoadingVideo from '@/components/LoadingVideo';
import parse from 'html-react-parser';
import ErrorComponent from '@/components/ErrorComponent';
import {
  BOOK_CALL_FAIL,
  BOOK_NOT_FOUND,
  GOOGLE_BOOKS_API_CAll,
  RATE_LIMIT_ERROR,
} from '@/app/_lib/constants';
import RatingComponent from '@/components/RatingComponent';
import PagesComponent from '@/components/PagesComponent';
import { notFound } from 'next/navigation';

interface BookDetail {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate?: string;
    averageRating?: string;
    pageCount?: string;
  };
}

export default function BookDetailPage({ params }: { params: { bookId: string } }) {
  const [book, setBook] = useState<BookDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch book details once the component mounts or bookId changes in the params
  useEffect(() => {
    if (params.bookId) {
      fetchBookDetails(params.bookId);
    }
  }, [params.bookId]);

  const fetchBookDetails = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      // fetch the required fields only
      const fields =
        'id,volumeInfo(title,authors,description,imageLinks/thumbnail,publishedDate,averageRating,pageCount)';
      const response = await fetch(`${GOOGLE_BOOKS_API_CAll}/${id}?fields=${fields}`);

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(RATE_LIMIT_ERROR);
        } else {
          throw new Error(BOOK_NOT_FOUND);
        }
      }

      const data: BookDetail = await response.json();
      setBook(data);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message || BOOK_CALL_FAIL);
      setLoading(false);
    }
  };

  // show loading animation till request is completed
  if (loading) {
    return <LoadingVideo />;
  }

  // Errors and Book not found are handled here
  if (!book) {
    if (error === BOOK_NOT_FOUND) {
      notFound();
    } else if (error) {
      return <ErrorComponent errorMessage={error} />;
    }
  }

  if (book) {
    const { volumeInfo } = book;

    return (
      <div className={`relative pb-24 pt-8 lg:pt-16`}>
        <div className="absolute inset-x-0 top-0 h-60 w-full bg-blue-50"></div>
        <header className="container relative">
          <div className="flex flex-col items-center justify-center space-y-10 rounded-2xl bg-white px-5 py-7 shadow-2xl sm:flex-row sm:space-x-11 sm:space-y-0 md:rounded-[40px] md:p-11">
            <div className="w-1/2 flex-shrink-0 sm:w-1/4">
              <img
                src={volumeInfo?.imageLinks?.thumbnail || '/images/bookPlaceHolder.png'}
                alt="Book Thumbnail"
              />
            </div>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                <div></div>
                <span className="text-neutral-500">
                  {volumeInfo?.authors?.join(', ')}
                  <span className="mx-2">·</span>
                  {volumeInfo?.publishedDate || ''}
                </span>
              </div>

              <h1
                className={
                  'max-w-4xl text-3xl font-semibold text-[#0074D9] md:text-4xl md:!leading-[120%] lg:text-5xl'
                }
              >
                {volumeInfo.title}
              </h1>

              <div className="flex items-center space-x-2">
                {volumeInfo?.pageCount && <PagesComponent pageCount={volumeInfo.pageCount} />}
                {volumeInfo?.averageRating && <RatingComponent rating={volumeInfo.averageRating} />}
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-12">
          <div className="space-y-10">
            <div id="single-entry-content" className="prose mx-auto !max-w-screen-md lg:prose-lg">
              {parse(volumeInfo.description || '')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
