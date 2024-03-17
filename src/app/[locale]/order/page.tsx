import TopbarCheckout from '../checkout/components/topbar_checkout';
import Footer from '../(general)/components/footer';
import { Metadata } from 'next';
import initTranslations from '@/app/i18';
import TranslationsProvider from '@/utils/translationProvider';

export const metadata: Metadata = {
  title: 'Order',
  description: 'Order page',
};
const i18nNamespaces = ['order', 'topbar','home'];
interface Props {
  params: { locale: string };
}
export default async function Order({ params: { locale } }: Props) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
    <div className="order">
      <TopbarCheckout />
      <main className="bg-my-white md:px-32 px-4 pt-16 pb-16">
      <h1 className="text-3xl font-bold text-black">{t("title")}</h1>
      <p className="mt-5 text-black">
      {t("s1")}
      <br/><br/>
      {t("s2")}
      <br/><br/>
      {t("s3")}
      <br/><br/>
      {t("s4-1")} <strong>{t("s4-2")}. </strong> {t("s4-3")}
      <br/><br/>
      {t("s5")}
      <br/><br/> 
      {t("s6")}
      <br/><br/>
      {t("s7")}
      <br/><br/> 
      </p>
    </main>
      <Footer t={t} />
    </div>
    </TranslationsProvider>
  );
}
