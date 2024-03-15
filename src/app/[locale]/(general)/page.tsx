import { Metadata } from 'next';
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
import Topbar from './components/topbar';
import Footer from './components/footer';

import initTranslations from '@/app/i18';
import TranslationsProvider from '@/utils/translationProvider';

const i18nNamespaces = ['home', 'topbar', 'common'];

export const metadata: Metadata = {
  title: 'Casa Claudia Villa',
  description:
    'Casa Claudia Villa in Istria, Croatia. Enjoy the tranquility of the authentic Istrian landscape among olive trees, in complete privacy and  sense of homeliness in a small luxury villa.',
};

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <Topbar />
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="intro items-left overflow-visible bg-light-brown  py-2 pl-4 text-my-black md:pl-16">
            <h1 className=" py-4 text-3xl font-extrabold md:py-12 md:text-4xl">
              {' '}
              {t('fresh')}
              <br /> {t('peaceful')}
            </h1>
            <p className="mb-5 ml-5 pr-4 md:mb-40 md:pr-16 md:text-xl">{t('subtitle')}</p>
            <BookBar />
            <div className="md:mt-45 lg:mt-50 flex items-center justify-between py-5 pr-4 md:pr-16 ">
              <div className="ml-5  flex flex-col items-center text-sm md:ml-20 md:text-lg ">
                <p>{t('prices_per_night')}</p>
                <p className="font-bold md:text-xl">150 €</p>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-5">
                <ul className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i} className="mr-1">
                        <Star className="h-4 w-4 fill-yellow-300 stroke-1 text-my-black md:h-7 md:w-7" />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="big-image">
            <img className="h-[110%] object-cover" src="/galerija/1.jpg" alt="Villa" />
          </div>
        </div>

        <Info t={t} />
        <Gallery />
        <Features t={t} />
        <Location />
        <Booker />
        <Reviews />
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
