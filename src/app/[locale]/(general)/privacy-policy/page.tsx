import { Metadata } from 'next';
import Footer from '../components/footer';
import Topbar from '../components/topbar';

import initTranslations from '@/app/i18';
import TranslationsProvider from '@/utils/translationProvider';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Casa Claudia Privacy Policy',
};

const i18nNamespaces = ['privacy','home', 'topbar', 'common'];


export default async function PrivacyPolicy({ params: { locale } }: { params: { locale: string } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
  <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
    <div>
    <Topbar />
    <main className="bg-my-white md:px-32 px-4 py-16 text-black">
      <h1 className='text-3xl font-bold'>{t("title")}</h1>
      <p className='text-my-light-grey mb-3'>{t("sub")}</p>

      <h2 className='text-xl font-semibold mt-3'>{t("t1")}</h2>

      <p>{t("s1-list")}</p>
      <ul>
          <li>{t("s1-list-element-1")}</li>
      </ul>

      <h2 className='text-xl font-semibold mt-3' >{t("t2")}</h2>

      <p>{t("s2-list")}</p>
      <ul className='list-decimal list-inside pl-2'>
          <li>{t("s2-list-el-1")}</li>
          <li>{t("s2-list-el-2")}</li>
          <li>{t("s2-list-el-3")}</li>
          <li>{t("s2-list-el-4")}</li>
          <li>{t("s2-list-el-5")}</li>
      </ul>

      <h2 className='text-xl font-semibold mt-3'>{t("t3")}</h2>

      <p>{t("s3")}</p>

      <h2 className='text-xl font-semibold mt-3'>{t("t4")}</h2>

      <p>{t("s4")}</p>

      <h2 className='text-xl font-semibold mt-3'>{t("t5")}</h2>

      <p>{t("s5")}</p>

      <h2 className='text-xl font-semibold mt-3'>{t("t6")}</h2>

      <p>{t("s6")}</p>

      <h2 className='text-xl font-semibold mt-3'>{t("t7")}</h2>

      <p>{t("s7")}</p>

      <h2 className='text-xl font-semibold mt-3'>{t("t8")}</h2>

      <p>{t("s8")}</p>
    </main>
    <Footer t={t} />
    </div>
  </TranslationsProvider>
  );
}