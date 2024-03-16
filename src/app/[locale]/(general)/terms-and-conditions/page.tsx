import { Metadata } from 'next';
import Footer from '../components/footer';
import Topbar from '../components/topbar';

import initTranslations from '@/app/i18';
import TranslationsProvider from '@/utils/translationProvider';

const i18nNamespaces = ['terms','home', 'topbar', 'common'];

export const metadata: Metadata = {
  title: 'Rental Terms and Conditions',
  description: 'Casa Claudia Rental Terms and Conditions',
};

export default async function RentalTermsAndConditions({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
  <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
    <div>
    <Topbar />
    <main className="bg-my-white md:px-32 px-4 py-16 text-black">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="text-my-light-grey mb-3">
      {t("subtitle")}
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">{t("check")}</h2>
        <p>
          <span className="font-semibold">{t("check-in")}</span> {t("check-in-text")}
        </p>
        <p>
          <span className="font-semibold">{t("check-out")}</span> {t("check-out-text")}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">{t("use-of-prop")}</h2>
        <p>
          <span className="font-semibold">{t("occ")}</span> {t("occ-text")}
        </p>
        <p>
          <span className="font-semibold">{t("use")}</span> {t("use-text")}
        </p>
        <p>
          <span className="font-semibold">{t("care")}</span> {t("care-text")}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">{t("liability-and-ind")}</h2>
        <p>
          <span className="font-semibold">{t("liability")}</span> {t("liab-text")}
        </p>
        <p>
          <span className="font-semibold">{t("ind")}</span> {t("ind-text")}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">{t("miss")}</h2>
        <p>
          <span className="font-semibold">{t("pets")}</span> {t("pets-text")}
        </p>
        <p>
          <span className="font-semibold">{t("smoking")}</span> {t("smoking-text")}
        </p>
        <p>
          <span className="font-semibold">{t("jury")}</span> {t("jury-text")}
        </p>
      </section>

      <p className="mt-6">
        {t("end")}
      </p>
    </main>
    <Footer t={t}/>
    </div>
  </TranslationsProvider>
  );
}
