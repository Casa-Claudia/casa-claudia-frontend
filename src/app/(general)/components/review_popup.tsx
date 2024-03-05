import React from "react";
import { X } from "lucide-react";

interface Props {
  onClick: (value: boolean) => void;
}

export default function ReviewPopup({ onClick }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, for example, send the data to your backend
    console.log("Form submitted!");
    onClick(false); // Close the modal
  };

  return (
    <div className=" z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-screen-sm mx-auto rounded-lg border border-black bg-white p-8 text-sm text-black">
            <h2 className="text-xl font-semibold text-black mb-5">Add a review</h2>
            <button onClick={() => onClick(false)} className="absolute top-5 right-5 text-my-brown hover:text-black">
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
                    required
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
                    required
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
            ></textarea>
        </div>
        <div className="flex justify-end mt-5">
            <button
            type="submit"
            onClick={handleSubmit}
            className="bg-my-brown text-white px-5 py-2 rounded-lg"
            >
            Submit
            </button>
        </div>
    </form>
  </div>
  );
}
