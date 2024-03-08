"use client";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";


export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: '',
    country: '',
    guests: '',
    comments: ''
  });


  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    window.alert('Form submitted');
    e.preventDefault();
    try {
      const response = await axios.post('/api/clients', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:my-32 my-16 2xl:mt-48 2xl:mb-32 grid grid-cols-1 lg:grid-cols-2 bg-white px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center justify-center lg:px-10">
          <h1 className="text-2xl font-bold text-black">PERSONAL DETAILS</h1>
          <div className="mx-auto mt-10 rounded-lg border  border-black bg-white p-8 text-sm text-my-black">
          <div className="flex flex-wrap justify-between gap-2">
            <div className="mb-4 ">
              <label htmlFor="name" className="ml-1 block text-my-grey">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className=" border-1 border-light-gray w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="surname" className=" ml-1 text-my-grey">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                onChange={handleChange}
                value={formData.surname}
                className="w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-2">
            <div className="mb-4 ">
              <label htmlFor="email" className=" ml-1 text-my-grey">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="phone" className=" ml-1 text-my-grey">
                Telephone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className=" ml-1 text-my-grey">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={handleChange}
              value={formData.address}
              className="w-full rounded-xl border px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-between flex-wrap gap-2">
            <div className="mb-4 ">
              <label htmlFor="city" className=" ml-1 text-my-grey">
                City/Region
              </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={handleChange}
                value={formData.city}
                className=" border-1 border-light-gray w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="zipcode" className=" ml-1 text-my-grey">
                Zip code
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                onChange={handleChange}
                value={formData.zipcode}
                className="w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-2">
            <div className="mb-4 ">
              <label htmlFor="country" className=" ml-1 text-my-grey">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={handleChange}
                value={formData.country}
                className=" border-1 border-light-gray w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="guests" className=" ml-1 text-my-grey">
                Number of guests
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                max={4}
                min={1}
                onChange={handleChange}
                value={formData.guests}
                className="w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="comments">
            <label htmlFor="comments" className=" ml-1 text-my-grey">
              Comments (optional)
            </label>
            <textarea
              id="comments"
              name="comments"
              onChange={handleChange}
              value={formData.comments}
              className="w-full rounded-xl border px-3 py-2"
              rows={6}
            ></textarea>
          </div>
          {/* <div className="flex justify-center mt-4 text-red-400">
            {!isValid && <p>Please fill out the form</p>}
          </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-start my-10 lg:mt-0">
          <div className="flex flex-col items-center justify-start">
            <h1 className="mb-10 text-2xl font-bold text-black">PAYMENT METHODS</h1>
            <div className="flex flex-col items-start">
              <div className="flex max-w-[590px]  justify-between rounded-lg border border-black lg:px-12 px-6 py-5 md:py-10">
                <div className="flex items-center justify-center">
                  <input type="checkbox" id="creditCard" className="mr-3 h-3 w-3 lg:h-4 lg:w-4" required={true} />
                  <label htmlFor="creditCard" className="text-lg font-semibold text-black">
                    CREDIT CARD
                  </label>
                </div>
                <div>
                  <img src="/Cards.svg" alt="credit card" className="" />
                </div>
              </div>

              {/* <div className="mt-8 flex  w-full max-w-[590px] justify-between rounded-lg border border-black lg:px-12 px-6 py-5 md:py-10">
                <div className="flex items-center justify-center">
                  <input type="checkbox" id="creditCard" className="mr-3 h-3 w-3 lg:h-4 lg:w-4" />
                  <label htmlFor="creditCard" className="text-lg font-semibold text-black">
                    CASH
                  </label>
                </div>
              </div> */}
              <div className="mt-6 flex items-center justify-center px-12">
                <input type="checkbox" id="creditCard" className="mr-3 h-3 w-3" required={true} />
                <label htmlFor="creditCard" className="text-sm text-my-light-grey">
                  I agree to terms and conditions
                </label>
              </div>
              <div className="relative mt-6 w-full px-12">
                <button type="submit" className="text-bold absolute right-0 top-0 mr-2 w-[150px] scale-105 transform rounded-br-lg  rounded-tr-lg bg-my-black px-8 py-3 text-white hover:border hover:border-white hover:font-bold">
                  BOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form> 
  );
}
