import Footer from './components/footer';
import Topbar from './components/topbar';
import React, { useRef } from 'react';
import i18nConfig from '../../../../i18nConfig';
import { dir } from 'i18next';

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}


interface StaticParams {
  locale: string;
}

export function generateStaticParams(): StaticParams[] {
  return i18nConfig.locales.map(locale => ({ locale }));
}


export default function Layout({ children, params: {locale} }: Props) {
  return (
      <html lang={locale} dir={dir(locale)}>
        {/* <Topbar  /> */}
        {children}
        {/* <Footer/> */}
      </html>
  );
}
