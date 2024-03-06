import React from "react";
import { X } from "lucide-react";
import { useReviewState } from "@/state/review";
import { useMemo, useState, FormEvent } from "react";

interface Props {
  onClick: (value: boolean) => void;
}

export default function ReviewPopup({ onClick }: Props) {
    const [formFilled, setFormFilled] = useState(false);

    const { name, setName, rating, setRating, review, setReview } = useReviewState();
    const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, send the data to your backend
    console.log("Form submitted!");
    console.log(name, rating, review);
    setRating(0);
    setName("");
    setReview("");
    onClick(false);
    // window.alert("Thank you for your feedback!");
    };

    const isValid = useMemo(() => {
        return Boolean(name) && Boolean(rating) && Boolean(review);
      }, [name, rating, review]);
      
  return (
    <div className=" z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-sm mx-auto rounded-lg border border-black bg-white md:p-8 py-6 px-4 text-sm text-black">
            <h2 className="text-xl font-semibold text-black mb-5">Add a review</h2>
            <button onClick={() => onClick(false)} className="absolute md:top-5 md:right-5 right-2 top-2 text-my-brown hover:text-black">
                <X className="h-5" />
            </button>
        <form>
        <div className="flex flex-wrap justify-between gap-2">
            <div className="mb-4 ">
                <label htmlFor="name" className="ml-1 block text-my-grey">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className=" border-1 border-light-gray w-full rounded-xl border px-3 py-2"
                    required = {true}
                    onChange={(e:any) =>setName(e.target.value)}
                />
            </div>
            <div className="mb-4 ">
                <label htmlFor="surname" className=" ml-1 text-my-grey">
                    Number of stars
                </label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min={1}
                    max={5}
                    className="w-full rounded-xl border px-3 py-2"
                    required = {true}
                    onChange={(e:any) =>setRating(e.target.value)}
                />
            </div>
        </div>
        
        <div className="review">
            <label htmlFor="review" className=" ml-1 text-my-grey">
            Review
            </label>
            <textarea
            id="review"
            name="review"
            className="w-full rounded-xl border px-3 py-2"
            rows={6}
            required = {true}
            onChange={(e:any) =>setReview(e.target.value)}
            ></textarea>
        </div>
        <div className="flex md:justify-end justify-center mt-5">
            <button
            aria-disabled={!isValid}
            type="submit"
            onClick={handleSubmit}
            className="bg-my-brown aria-disabled:opacity-50 aria-disabled:pointer-events-none text-white px-5 py-2 rounded-lg">
            Submit
            </button>
        </div>
    </form>
  </div>
  );
}
