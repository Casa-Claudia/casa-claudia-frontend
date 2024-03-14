"use client";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useCheckoutState } from "@/state/checkout";
import { Client } from "@/api/clients/clients";
import { useRouter } from "next/navigation";
import { useLanguageState } from "@/state/language";


export default function ReservationForm() {
  const router = useRouter();
  
  const toISOLikeString = (d: Date): string => {
    return `${d.getFullYear()}-${
        `${d.getMonth() + 1}`.padStart(2, '0')
    }-${
        `${d.getDate()}`.padStart(2, '0')
    }T00:00:00Z`;
};
  const formatName = (name:string) => {
    name.trim();
    const splits = name.split(' ');

    for (let i = 0; i < splits.length; i++) {
      splits[i] = splits[i].charAt(0).toUpperCase() + splits[i].slice(1).toLowerCase();
    }
    return splits.join(' ');
  }
  const { range, price, setPrice, setRange } = useCheckoutState();
  const { language } = useLanguageState();
  const [arrivalDate, departureDate] = range;
  const [formData, setFormData] = useState<Client>({ 
    first_name: '',
    last_name: '',  
    mail: '',
    phone: '',
    address: '',
    city: '',
    zip_code: '',
    country: '',
    number_of_guests: 1,
    comment: '',
    arrival_date: toISOLikeString(arrivalDate),
    departure_date: toISOLikeString(departureDate),
    price: price,
    language: language
  });


  const isValid = formData.first_name && formData.last_name && formData.mail && formData.phone && formData.address && formData.city && formData.zip_code && formData.country && formData.number_of_guests && formData.arrival_date && formData.departure_date && formData.price;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formatedData = {
      ...formData,
      first_name: formatName(formData.first_name),
      last_name: formatName(formData.last_name),
    };
    if(isValid) {
      try {
          const response = await fetch("http://localhost:4444/api/v1/client", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formatedData),
          });
    
          const data = await response.json();
          console.log(data);
        
          if (data.success) {
            setRange([new Date(), new Date()]);
            setPrice(0);
            router.push('/order');
          } else {
            window.alert('Something went wrong. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }else {
        window.alert('Please check your details and try again.');
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="md:my-32 my-16 2xl:mt-48 2xl:mb-32 grid grid-cols-1 lg:grid-cols-2 bg-white px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center justify-center lg:px-10">
          <h1 className="text-2xl font-bold text-black">PERSONAL DETAILS</h1>
          <div className="mx-auto mt-10 rounded-lg border  border-black bg-white p-8 text-sm text-my-black">
          <div className="flex flex-wrap justify-between gap-2">
            <div className="mb-4 ">
              <label htmlFor="first_name" className="ml-1 block text-my-grey">
                Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={handleChange}
                value={formData.first_name}
                className=" border-1 border-light-gray w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="last_name" className=" ml-1 text-my-grey">
                Surname
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={handleChange}
                value={formData.last_name}
                className="w-full rounded-xl border px-3 py-2"
                required
              />
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-2">
            <div className="mb-4 ">
              <label htmlFor="mail" className=" ml-1 text-my-grey">
                E-mail
              </label>
              <input
                type="mail"
                id="mail"
                name="mail"
                onChange={handleChange}
                value={formData.mail}
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
              <label htmlFor="zip_code" className=" ml-1 text-my-grey">
                Zip code
              </label>
              <input
                type="text"
                id="zip_code"
                name="zip_code"
                onChange={handleChange}
                value={formData.zip_code}
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
              <label htmlFor="number_of_guests" className=" ml-1 text-my-grey">
                Number of guests
              </label>
              <input
                type="number"
                id="number_of_guests"
                name="number_of_guests"
                max={4}
                min={1}
                onChange={handleChange}
                value={formData.number_of_guests}
                defaultValue={1}
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
              value={formData.comment}
              className="w-full rounded-xl border px-3 py-2"
              rows={6}
            ></textarea>
          </div>
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
