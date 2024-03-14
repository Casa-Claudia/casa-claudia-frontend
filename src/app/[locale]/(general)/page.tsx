import { Metadata} from 'next';
// icons
import { Star } from 'lucide-react';

//components
import BookBar from './components/book_bar';
import Info from './components/info';
import Features from './components/features';
import Location from './components/location';
import Booker from './components/booker';
import Reviews from './components/reviews/reviews';
import Gallery from './components/gallery';


import initTranslations from '@/app/i18';
import TranslationsProvider from '@/utils/translationProvider';


const i18nNamespaces = ['home','topbar', 'common'];


export const metadata: Metadata = {
  title: 'Casa Claudia Villa',
  description: 'Casa Claudia Villa in Istria, Croatia. Enjoy the tranquility of the authentic Istrian landscape among olive trees, in complete privacy and  sense of homeliness in a small luxury villa.',
};

export default async function Home({ locale }: { locale: string }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
  <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
    <main>
      <div className=" grid grid-cols-1 md:grid-cols-2">
        <div className="intro items-left bg-light-brown md:pl-16  pl-4 py-2 text-my-black overflow-visible">
          <h1 className=" md:py-12 py-4 md:text-4xl text-3xl font-extrabold">
            {' '}
            {t("fresh")}
            <br /> {t("peaceful")}
          </h1>
          <p className="md:mb-40 ml-5 mb-5 md:text-xl md:pr-16 pr-4">
            {t("subtitle")}
          </p>
            <BookBar />
          <div className="py-5 flex items-center md:mt-45 lg:mt-50 justify-between md:pr-16 pr-4 ">
            <div className="md:ml-20  ml-5 flex flex-col text-sm md:text-lg items-center ">
              <p>{t("prices_per_night")}</p>
              <p className="md:text-xl font-bold">150 €</p>
            </div>
            <div className="md:ml-5 flex flex-col items-center justify-start">
              <ul className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i} className="mr-1">
                      <Star className="md:h-7 md:w-7 h-4 w-4 fill-yellow-300 stroke-1 text-my-black" />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="big-image">
          <img className="h-[110%] object-cover"src="/galerija/1.jpg" alt="Villa" />
        </div>
      </div>

      <Info t={t} />
      <Gallery />
      <Features />
      <Location />
      <Booker />
      <Reviews />
    </main>
  </TranslationsProvider>
  );
}
