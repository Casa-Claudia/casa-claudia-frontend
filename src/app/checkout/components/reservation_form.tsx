export default function ReservationForm() {
  return (
    <div className="mx-auto mt-10 h-[580px] w-[590px] w-full rounded-lg border  border-black bg-white p-8 text-sm text-my-black">
      <form>
        <div className="flex justify-between">
          <div className="mb-4 w-[255px]">
            <label htmlFor="name" className="ml-1 block text-my-grey">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="h[] border-1 border-light-gray w-full rounded-xl border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 w-[255px]">
            <label htmlFor="surname" className=" ml-1 text-my-grey">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="w-full rounded-xl border px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mb-4 w-[255px]">
            <label htmlFor="email" className=" ml-1 text-my-grey">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-xl border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 w-[255px]">
            <label htmlFor="phone" className=" ml-1 text-my-grey">
              Telephone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
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
            className="w-full rounded-xl border px-3 py-2"
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="mb-4 w-[255px]">
            <label htmlFor="city" className=" ml-1 text-my-grey">
              City/Region
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="h[] border-1 border-light-gray w-full rounded-xl border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 w-[255px]">
            <label htmlFor="zipcode" className=" ml-1 text-my-grey">
              Zip code
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              className="w-full rounded-xl border px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mb-4 w-[255px]">
            <label htmlFor="country" className=" ml-1 text-my-grey">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="h[] border-1 border-light-gray w-full rounded-xl border px-3 py-2"
              required
            />
          </div>
          <div className="mb-4 w-[255px]">
            <label htmlFor="guests" className=" ml-1 text-my-grey">
              Number of guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              max={6}
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
            className="w-full rounded-xl border px-3 py-2"
            rows={6}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
