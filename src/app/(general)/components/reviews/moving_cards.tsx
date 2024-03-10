'use client';

import { cn } from '@/utils/cn';
import { memo, useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { Review } from '@/api/reviews/review';

export const InfiniteMovingCards = memo(
  ({
    items,
    direction = 'left',
    speed = 'slow',
    pauseOnHover = true,
    className,
  }: {
    items:Review[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
      if (items.length > 2) {
        addAnimation();
      }
    }, []);

    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }

    const getDirection = () => {
      if (containerRef.current) {
        if (direction === 'left') {
          containerRef.current.style.setProperty('--animation-direction', 'forwards');
        } else {
          containerRef.current.style.setProperty('--animation-direction', 'reverse');
        }
      }
    };

    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === 'fast') {
          containerRef.current.style.setProperty('--animation-duration', '20s');
        } else if (speed === 'normal') {
          containerRef.current.style.setProperty('--animation-duration', '40s');
        } else {
          containerRef.current.style.setProperty('--animation-duration', '80s');
        }
      }
    };

    return (
      <div
        ref={containerRef}
        className={cn(
          'scroller relative z-20 overflow-hidden',
          start &&
            '[mask-image:linear-gradient(to_right,transparent,white_3%,white_97%,transparent)]',
          className,
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            ' flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
            start && 'animate-scroll ',
            pauseOnHover && 'hover:[animation-play-state:paused]',
          )}
        >
          {items.map((item) => (
            <li
              className="relative mr-5  md:h-[273px] md:w-[476px] max-w-full flex-shrink-0 rounded border-2 border-my-brown px-4 py-6  md:px-8 md:py-6 h-[200px] w-[250px]"
              key={item.first_name}
            >
              <div className="flex items-center justify-between border-b border-black">
                <p className="md:text-lg text-medium font-semibold text-black">{item.last_name}</p>
                <ul className="flex">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i} className="mr-1">
                        <Star className="md:h-4 md:w-4 w-3 h-3 fill-yellow-400 text-yellow-400" />
                      </li>
                    ))}
                </ul>
              </div>
              <div className="review-text mt-5">
                <p className="font-light text-sm text-black">{item.comment}</p>
              </div>
              <div className="absolute bottom-0 right-0 px-4 py-2">
                <p className="text-my-light-grey text-sm">{item.created_at.toLocaleDateString()}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
