import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

interface Props {
  t: any;
}

export default function Footer({ t }: Props) {
  return (
    <div className="footer-container bg-khaki px-4 py-10 md:px-16" id="footer">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 px-5 md:grid-cols-3">
        <div className="footer-column flex flex-col  items-center md:mt-0">
          <h3 className="font-bold text-my-white md:text-lg">{t('home:footer-contact')}</h3>
          <div className="mt-2 flex items-center">
            <img src="/Mail.svg" alt="mail logo" />
            <p className="ml-2 font-light text-my-white"> casa.claudia.istra@gmail.com</p>
          </div>
          <div className="mt-2 flex items-center">
            <img src="/Phone.svg" alt="phone logo" />
            <p className="ml-2 font-light text-my-white"> +386 41 323 866</p>
          </div>
        </div>
        <div className="footer-column mt-5 flex flex-col  items-center md:mt-0">
          <h3 className="mb-2 font-bold text-my-white md:text-lg">{t('home:footer-our')}</h3>
          <Link
            href="/privacy-policy"
            className="mb-2 font-light text-my-white hover:text-my-black"
          >
            {t('home:footer-pp')}
          </Link>
          <Link
            href="/terms-and-conditions"
            className="font-light text-my-white hover:text-my-black"
          >
            {t('home:footer-tac')}
          </Link>
        </div>
        <div className="footer-column mt-5 flex flex-col  items-center md:mt-0">
          <h3 className="font-bold text-my-white md:text-lg">{t('home:footer-social')}</h3>
          <div className="button-container mt-2 flex items-center">
            <Link
              className="mr-2 text-my-white hover:text-my-black"
              target="_blank"
              href={'https://www.facebook.com/casaclaudiaistra'}
            >
              <Facebook className="text-my-white hover:text-black" />
            </Link>
            <Link
              className="text-my-white hover:text-my-black"
              target="_blank"
              href={'https://www.instagram.com/casaclaudiaistra'}
            >
              <Instagram className="text-my-white hover:text-black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-rights mt-20 flex items-center justify-center text-center">
        <p className="font-light text-my-white">{t('home:footer-rights')}</p>
      </div>
    </div>
  );
}
