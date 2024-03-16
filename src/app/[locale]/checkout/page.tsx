import TopbarCheckout from './components/topbar_checkout';
import Details from './components/details';
import ReservationForm from './components/reservation_form';
import Footer from '../(general)/components/footer';
import { Metadata } from 'next';
import initTranslations from '@/app/i18';
import TranslationsProvider from '@/utils/translationProvider';

const i18nNamespaces = ['checkout', 'topbar_checkout', 'details', 'reservation_form','home'];

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Checkout page',
};

interface Props {
  params: { locale: string };
}
export default async function CheckoutPage({ params: { locale } }: Props) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
    <div className="checkout-page">
      <TopbarCheckout />
      <Details />
      <ReservationForm />
      <Footer t={t} />
    </div>
    </TranslationsProvider>
  );
}
