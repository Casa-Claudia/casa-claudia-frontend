'use client';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useCheckoutState } from '@/state/checkout';
import { Client } from '@/api/clients/clients';
import { useRouter } from 'next/navigation';
import { useLanguageState } from '@/state/language';
import { useTranslation } from 'react-i18next';

export default function ReservationForm() {
  const router = useRouter();
  const { t } = useTranslation('checkout');

  const toISOLikeString = (d: Date): string => {
    return `${d.getFullYear()}-${`${d.getMonth() + 1}`.padStart(
      2,
      '0',
    )}-${`${d.getDate()}`.padStart(2, '0')}T00:00:00Z`;
  };
  const formatName = (name: string) => {
    name.trim();
    const splits = name.split(' ');

    for (let i = 0; i < splits.length; i++) {
      splits[i] = splits[i].charAt(0).toUpperCase() + splits[i].slice(1).toLowerCase();
    }
    return splits.join(' ');
  };
  const {
    range,
    price,
    setPrice,
    setRange,
    discountCode,
    setDiscountCode,
    discountPercent,
    setDiscountPercent,
    resetDiscount,
  } = useCheckoutState();
  const { language } = useLanguageState();
  const [arrivalDate, departureDate] = range;
  const [discountInput, setDiscountInput] = useState(discountCode);
  const [discountStatus, setDiscountStatus] = useState<'idle' | 'valid' | 'invalid'>(
    discountCode ? 'valid' : 'idle',
  );
  const [discountLoading, setDiscountLoading] = useState(false);
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
    language: language,
  });

  const isValid =
    formData.first_name &&
    formData.last_name &&
    formData.mail &&
    formData.phone &&
    formData.address &&
    formData.city &&
    formData.zip_code &&
    formData.country &&
    formData.number_of_guests &&
    formData.arrival_date &&
    formData.departure_date &&
    formData.price;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleApplyDiscount = async () => {
    const code = discountInput.trim();
    if (!code) return;
    setDiscountLoading(true);
    try {
      const apiPath = process.env.NEXT_PUBLIC_API_PATH;
      const response = await fetch(`${apiPath}/discount/${encodeURIComponent(code)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (response.ok && data.success && data.valid) {
        setDiscountCode(data.code ?? code);
        setDiscountPercent(data.percent ?? 0);
        setDiscountStatus('valid');
      } else {
        resetDiscount();
        setDiscountStatus('invalid');
      }
    } catch (error) {
      console.error('Error validating discount:', error);
      resetDiscount();
      setDiscountStatus('invalid');
    } finally {
      setDiscountLoading(false);
    }
  };

  const handleRemoveDiscount = () => {
    resetDiscount();
    setDiscountInput('');
    setDiscountStatus('idle');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formatedData: Client = {
      ...formData,
      first_name: formatName(formData.first_name),
      last_name: formatName(formData.last_name),
      ...(discountStatus === 'valid' && discountCode ? { discount_code: discountCode } : {}),
    };
    if (isValid) {
      try {
        const apiPath = process.env.NEXT_PUBLIC_API_PATH;
        console.log('apiPath:', apiPath);
        const response = await fetch(`${apiPath}/client`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formatedData),
        });

        const data = await response.json();
        console.log(data);

        if (data.success) {
          setRange([new Date(), new Date()]);
          setPrice(0);
          resetDiscount();
          router.push('/order');
        } else {
          window.alert(t('error-1'));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      window.alert(t('error-2'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto my-16 grid max-w-screen-2xl grid-cols-1 bg-white px-4 md:my-32 lg:grid-cols-2 2xl:mb-32 2xl:mt-48">
        <div className="flex flex-col items-center justify-center lg:px-10">
          <h1 className="text-2xl font-bold text-black">{t('personal-details')}</h1>
          <div className="mx-auto mt-10 rounded-lg border  border-black bg-white p-8 text-sm text-my-black">
            <div className="flex flex-wrap justify-between gap-2">
              <div className="mb-4 ">
                <label htmlFor="first_name" className="ml-1 block text-my-grey">
                  {t('first-name')}
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
                  {t('surname')}
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
            <div className="flex flex-wrap justify-between gap-2">
              <div className="mb-4 ">
                <label htmlFor="mail" className=" ml-1 text-my-grey">
                  {t('email')}
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
                  {t('phone')}
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
                {t('address')}
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
            <div className="flex flex-wrap justify-between gap-2">
              <div className="mb-4 ">
                <label htmlFor="city" className=" ml-1 text-my-grey">
                  {t('city')}
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
                  {t('zip')}
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
            <div className="flex flex-wrap justify-between gap-2">
              <div className="mb-4 ">
                <label htmlFor="country" className=" ml-1 text-my-grey">
                  {t('country')}
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
                  {t('n_of_g')}
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
                {t('comments')}
              </label>
              <textarea
                id="comment"
                name="comment"
                onChange={handleChange}
                value={formData.comment}
                className="w-full rounded-xl border px-3 py-2"
                rows={6}
              ></textarea>
            </div>
            <div className="mt-4">
              <label htmlFor="discount_code" className="ml-1 block text-my-grey">
                {t('discount')}
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="discount_code"
                  name="discount_code"
                  placeholder={t('discount-placeholder')}
                  onChange={(e) => {
                    setDiscountInput(e.target.value);
                    if (discountStatus !== 'idle') setDiscountStatus('idle');
                    if (discountPercent) resetDiscount();
                  }}
                  value={discountInput}
                  disabled={discountStatus === 'valid'}
                  className="w-full rounded-xl border px-3 py-2 disabled:bg-gray-100"
                />
                {discountStatus === 'valid' ? (
                  <button
                    type="button"
                    onClick={handleRemoveDiscount}
                    className="rounded-xl border border-my-black px-4 py-2 text-sm text-my-black hover:bg-my-black hover:text-white"
                  >
                    {t('discount-remove')}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleApplyDiscount}
                    disabled={discountLoading || !discountInput.trim()}
                    className="rounded-xl border border-my-black px-4 py-2 text-sm text-my-black hover:bg-my-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {t('discount-apply')}
                  </button>
                )}
              </div>
              {discountStatus === 'valid' && (
                <p className="ml-1 mt-1 text-sm text-green-600">
                  {t('discount-valid')} ({discountPercent}%)
                </p>
              )}
              {discountStatus === 'invalid' && (
                <p className="ml-1 mt-1 text-sm text-red-600">{t('discount-invalid')}</p>
              )}
            </div>
          </div>
        </div>

        <div className="my-10 flex flex-col items-center justify-start lg:mt-0">
          <div className="flex flex-col items-center justify-start">
            <h1 className="mb-10 text-2xl font-bold text-black">{t('payment-methods')}</h1>
            <div className="flex flex-col items-start">
              <div className="flex max-w-[590px]  justify-between rounded-lg border border-black px-6 py-5 md:py-10 lg:px-12">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="creditCard"
                    className="mr-3 h-3 w-3 lg:h-4 lg:w-4"
                    required={true}
                  />
                  <label htmlFor="creditCard" className="text-lg font-semibold text-black">
                    {t('credit')}
                  </label>
                </div>
                <div>
                  <img src="/Cards.svg" alt="credit card" className="" />
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center px-12">
                <input type="checkbox" id="terms" className="mr-3 h-3 w-3" required={true} />
                <label htmlFor="terms" className="text-sm text-my-light-grey">
                  {t('terms')}
                </label>
              </div>
              <div className="relative mt-6 w-full px-12">
                <button
                  type="submit"
                  className="text-bold absolute right-0 top-0 mr-2 w-[150px] scale-105 transform rounded-br-lg  rounded-tr-lg bg-my-black px-8 py-3 text-white hover:border hover:border-white hover:font-bold"
                >
                  {t('book')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
