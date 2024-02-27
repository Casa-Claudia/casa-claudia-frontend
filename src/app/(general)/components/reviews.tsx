import { InfiniteMovingCards } from './moving_cards';

export default function Reviews() {
  return (
    <div className="reviews-container bg-my-white px-16 pb-24 pt-10">
      <h2 className="mb-10 text-3xl font-semibold text-black">Reviews</h2>
      <div className="review-box w-full overflow-x-auto">
        <div className="flex px-10">
          <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
        </div>
      </div>
    </div>
  );
}
const reviews = [
  {
    review:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    n_stars: 5,
    date: '2021-10-10',
  },
  {
    review:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    n_stars: 5,
    date: '2021-10-10',
  },
  {
    review: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
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
