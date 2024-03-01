import { Plus } from 'lucide-react';
import { InfiniteMovingCards } from './moving_cards';

export default function Reviews() {
  return (
    <div className="reviews-container bg-my-white md:px-16 px-4 pb-24 pt-10">
      <h2 className="mb-10 text-3xl font-semibold text-black">Reviews</h2>
      <div className="review-box w-full overflow-x-auto">
        <div className="flex md:px-10 px-2">
          <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end mt-5 md:px-16">
        <button className="2 text-my-brown hover:text-black flex items-center">Add a review <Plus className='ml-1  h-5'/></button>
      </div>
    </div>
  );
}
const reviews = [
  {
    review:
      'Lorem ipsum dolor perspiciatis? Harum in rerum hic ab minus pariatur officiis reiciendis dolorem unde corrupti? Labore laudantium suscipit non consequuntur odio.',
    name: 'Charles D.',
    n_stars: 5,
    date: '2021-10-10',
  },
  {
    review:
      "To be, or not to be, that is the question: W.",
    name: 'William S.',
    n_stars: 5,
    date: '2021-10-10',
  },
  {
    review: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar A. P.',
    n_stars: 5,
    date: '2021-10-10',
  },
  // {
  //   review:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   n_stars: 3,
  //   date: "2021-10-10"
  // },
  // {
  //   review:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   n_stars: 1,
  //   date: "2021-10-10"
  // },
];
