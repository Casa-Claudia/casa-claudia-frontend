
export default function ReservationForm() {
  return (
    <div className="w-full mx-auto w-[590px] h-[580px] border border-black text-sm  p-8 bg-white text-my-black rounded-lg mt-10">
      <form >
        <div className="flex justify-between">
            <div className="mb-4 w-[255px]">
                <label htmlFor="name" className="block text-my-grey ml-1">Name</label>
                <input type="text" id="name" name="name"  className="w-full h[] px-3 py-2 border border-1 border-light-gray rounded-xl" required />
            </div>
            <div className="mb-4 w-[255px]">
                <label htmlFor="surname" className=" text-my-grey ml-1">Surname</label>
                <input type="text" id="surname" name="surname"  className="w-full px-3 py-2 border rounded-xl" required />
            </div>
        </div>
        <div className="flex justify-between">
            <div className="mb-4 w-[255px]">
                <label htmlFor="email" className=" text-my-grey ml-1">E-mail</label>
                <input type="email" id="email" name="email"  className="w-full px-3 py-2 border rounded-xl" required />
            </div>
            <div className="mb-4 w-[255px]">
                <label htmlFor="phone" className=" text-my-grey ml-1">Telephone number</label>
                <input type="tel" id="phone" name="phone"  className="w-full px-3 py-2 border rounded-xl" required />
            </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className=" text-my-grey ml-1">Address:</label>
          <input type="text" id="address" name="address"  className="w-full px-3 py-2 border rounded-xl" required />
        </div>
        <div className="flex justify-between">
            <div className="mb-4 w-[255px]">
                <label htmlFor="city" className=" text-my-grey ml-1">City/Region</label>
                <input type="text" id="city" name="city"  className="w-full h[] px-3 py-2 border border-1 border-light-gray rounded-xl" required />
            </div>
            <div className="mb-4 w-[255px]">
                <label htmlFor="zipcode" className=" text-my-grey ml-1">Zip code</label>
                <input type="text" id="zipcode" name="zipcode"  className="w-full px-3 py-2 border rounded-xl" required />
            </div>
        </div>
        <div className="flex justify-between">
            <div className="mb-4 w-[255px]">
                <label htmlFor="country" className=" text-my-grey ml-1">Country</label>
                <input type="text" id="country" name="country"  className="w-full h[] px-3 py-2 border border-1 border-light-gray rounded-xl" required />
            </div>
            <div className="mb-4 w-[255px]">
                <label htmlFor="guests" className=" text-my-grey ml-1">Number of guests</label>
                <input type="number" id="guests" name="guests" max={6} className="w-full px-3 py-2 border rounded-xl" required />
            </div>
        </div>
        <div className="comments">
            <label htmlFor="comments" className=" text-my-grey ml-1">Comments (optional)</label>
            <textarea id="comments" name="comments" className="w-full px-3 py-2 border rounded-xl" rows={6}></textarea>
        </div>
      </form>
    </div>
  );
};

