import { Metadata } from 'next';
import Footer from '../components/footer';
import Topbar from '../components/topbar';

import initTranslations from '@/app/i18';
import TranslationsProvider from '@/utils/translationProvider';

const i18nNamespaces = ['home', 'topbar', 'common'];

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
      <h1 className="text-3xl font-bold">Rental Terms and Conditions</h1>
      <p className="text-my-light-grey mb-3">
        These terms and conditions constitute a binding agreement between the property owner and the tenant for the rental of the holiday villa Casa Claudia, located at Bužijina 32 d, Novigrad, Croatia. By confirming the reservation, the tenant agrees to comply with these conditions.
      </p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Check-in and Check-out</h2>
        <p>
          <span className="font-semibold">Check-in:</span> Check-in time is from 4:00 p.m. on the day of arrival, unless otherwise agreed with the owner. Early check-in is possible subject to availability.
        </p>
        <p>
          <span className="font-semibold">Check-out:</span> Check-out time is until 11:00 a.m. on the day of departure. Late check-out may incur additional charges unless agreed in advance.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Use of the Property and Conditions</h2>
        <p>
          <span className="font-semibold">Occupancy:</span> The maximum occupancy of the villa is 4 people. Exceeding this limit without prior approval may result in additional charges or immediate eviction.
        </p>
        <p>
          <span className="font-semibold">Use of the villa:</span> The villa is intended exclusively for living. Commercial activities, parties, and events require prior approval from the owner.
        </p>
        <p>
          <span className="font-semibold">Care of the villa:</span> The tenant agrees to treat the villa with care and respect and to leave it in the same condition as on arrival. Any damage or excessive cleaning required may result in additional charges.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Liability and Indemnification</h2>
        <p>
          <span className="font-semibold">Liability:</span> The owner is not responsible for any accidents, injuries, or losses that occur in the premises of the villa. The tenant accepts full responsibility for his own safety and the safety of his guests during the stay.
        </p>
        <p>
          <span className="font-semibold">Indemnification:</span> The tenant agrees not to demand compensation from the owner under any circumstances and to protect him from any claims, damages, or liabilities arising from the tenant's use of the villa.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Miscellaneous</h2>
        <p>
          <span className="font-semibold">Pets:</span> Pets are allowed in the villa with the prior approval of the owner and payment of a pet fee.
        </p>
        <p>
          <span className="font-semibold">Smoking:</span> Smoking and vaping are strictly prohibited in the villa. Violation of this policy may result in additional cleaning charges.
        </p>
        <p>
          <span className="font-semibold">Jurisdiction:</span> These terms are governed by the laws of Croatia. Any disputes arising from these conditions will be resolved through mediation in Croatia.
        </p>
      </section>

      <p className="mt-6">
        By confirming the reservation, the tenant confirms that he has read these conditions and agrees with them.
      </p>
    </main>
    <Footer t={t}/>
    </div>
  </TranslationsProvider>
  );
}
