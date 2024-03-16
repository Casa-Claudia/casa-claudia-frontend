"use client";
import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { InfiniteMovingCards } from './moving_cards';
import ReviewPopup from './review_popup';
import { ApiResponseReview, Review } from '@/api/reviews/review';
import { useTranslation } from 'react-i18next';
export default function Reviews() {
  const { t } = useTranslation('review');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [reviews, setReviews] = useState([] as Review[]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch("http://localhost:4444/api/v1/review", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data: ApiResponseReview = await response.json()
      
        if (data.success) {
          setReviews(data.reviews);
        } else {
          window.alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadReviews();
  }, []);

  return (
    <div className="reviews-container bg-my-white px-4 pb-24 pt-10 md:px-16">
      <h2 className="mb-10 text-3xl font-semibold text-black">{t("reviews")}</h2>
      <div className="review-box w-full overflow-x-auto">
        <div className="flex px-2 md:px-10">
          <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center md:justify-end md:px-16">
        <button
          className="2 flex items-center text-my-brown hover:text-black"
          onClick={() => setIsPopupOpen(true)}
        >
          {t('add')} <Plus className="ml-1  h-5" />
        </button>
      </div>
      {isPopupOpen && (
        <div className="popup-container">
          <div className="popup">
            <ReviewPopup onClick={setIsPopupOpen} t={t} />
          </div>
        </div>
      )}
    </div>
  );
}
