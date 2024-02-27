"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    review: string;
    name: string;
    n_stars: number;
    date:string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const doAnimation = items.length > 2;

  useEffect(() => {
    if (doAnimation){
        addAnimation();
    }
  }, []);
  const [start, setStart] = useState(false);
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
      if (doAnimation){
        setStart(true);
      }
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden", start && "[mask-image:linear-gradient(to_right,transparent,white_3%,white_97%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[476px] max-w-full relative  border-2 rounded border-my-brown h-[273px] p-8 mr-5 h- flex-shrink-0  px-8 py-6 md:w-[450px]"
            key={item.name}
          >
            <div className="flex justify-between items-center border-b border-black">
                <p className="text-black font-semibold text-lg">{item.name}</p>
                <ul className="flex">{
                    Array(item.n_stars).fill(0).map((_, i) => (
                        <li key={i} className="mr-1"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400"/></li>
                    ))
                }</ul>
            </div>
            <div className="review-text mt-5">
                <p className="font-light text-black">{item.review}</p>
            </div>
            <div className="absolute bottom-0 right-0 py-2 px-4">
                <p className="text-my-light-grey">{item.date}</p>
            </div>            
          </li>
        ))}
      </ul>
    </div>
  );
};
