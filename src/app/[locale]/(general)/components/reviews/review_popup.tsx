import React from 'react';
import { X } from 'lucide-react';
import { useMemo, useState, FormEvent } from 'react';
import { Star } from 'lucide-react';

interface Props {
  onClick: (value: boolean) => void;
  t: any;
}

export default function ReviewPopup({ onClick, t }: Props) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (value: number) => {
    setRating(value);
    setHoverRating(0); // Reset hover rating after click
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nameParts = name.split(' ');
    const first_name = nameParts[0]?.charAt(0).toUpperCase() + nameParts[0]?.slice(1).toLowerCase();
    const last_name =
      nameParts[1]?.charAt(0).toUpperCase() + nameParts[1]?.slice(1).toLowerCase() || 'None';
    const apiPath = process.env.API_PATH;
    console.log('apiPath:', apiPath);
    try {
      const response = await fetch(`${apiPath}/review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ first_name, last_name, rating, comment }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Review submitted successfully!');
        onClick(false);
      } else {
        window.alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const isValid = useMemo(() => {
    return name && rating && comment;
  }, [name, rating, comment]);

  return (
    <div className=" fixed left-1/2 top-1/2 z-20 mx-auto w-4/5 max-w-screen-sm -translate-x-1/2 -translate-y-1/2 transform rounded-lg border border-black bg-white px-4 py-6 text-sm text-black md:w-3/5 md:p-8">
      <h2 className="mb-5 text-xl font-semibold text-black">{t('add')}</h2>
      <button
        onClick={() => onClick(false)}
        className="absolute right-2 top-2 text-my-brown hover:text-black md:right-5 md:top-5"
      >
        <X className="h-5" />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="mb-4 ">
            <label htmlFor="name" className="ml-1 block text-my-grey">
              {t('name')}
            </label>
            <input
              type="text"
              placeholder="John D."
              id="name"
              name="name"
              className=" border-1 border-light-gray w-full rounded-xl border px-2 py-1 md:px-3 md:py-2"
              required={true}
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="ml-1 text-my-grey">
              {t('rating')}
            </label>
            <div className="flex items-center justify-start py-1 pr-2 md:py-2 md:pr-3 ">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <Star
                    key={starValue}
                    className={`cursor-pointer ${
                      starValue <= (hoverRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    } h-4 w-4 hover:fill-yellow-500 hover:text-yellow-500 md:h-5 md:w-5`}
                    onMouseEnter={() => handleMouseEnter(starValue)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleStarClick(starValue)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="review">
          <label htmlFor="review" className=" ml-1 text-my-grey">
            {t('review')}
          </label>
          <textarea
            id="review"
            name="review"
            className="w-full rounded-xl border px-2 py-1 md:px-3 md:py-2"
            rows={6}
            maxLength={500}
            required={true}
            onChange={(e: any) => setComment(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-5 flex justify-center md:justify-end">
          <button
            aria-disabled={!isValid}
            type="submit"
            className="rounded-lg bg-my-brown px-5 py-2 text-white aria-disabled:pointer-events-none aria-disabled:opacity-50"
          >
            {t('submit')}
          </button>
        </div>
      </form>
    </div>
  );
}
