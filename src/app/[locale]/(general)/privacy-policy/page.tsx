import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Casa Claudia Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-my-white md:px-32 px-4 py-16 text-black">
      <h1 className='text-3xl font-bold'>Privacy Policy</h1>
      <p className='text-my-light-grey mb-3'>This Privacy Policy describes how we collect, use, and safeguard the personal information you provide when using our services.</p>

      <h2 className='text-xl font-semibold mt-3'>Information We Collect</h2>

      <p>When you use our services, we may collect the following personal information:</p>
      <ul>
          <li>Client Identity: Including but not limited to first name, last name, email, phone number, address, city, zip code, country, number of guests, arrival date, departure date, price, comment, and reservation status.</li>
      </ul>

      <h2 className='text-xl font-semibold mt-3' >How We Use Your Information</h2>

      <p className=''>We use the information collected for the following purposes:</p>
      <ul className='list-decimal list-inside pl-2'>
          <li>To provide and maintain our services.</li>
          <li>To process reservations and bookings.</li>
          <li>To communicate with you regarding your reservations, inquiries, or feedback.</li>
          <li>To improve our services and offerings.</li>
          <li>To comply with legal obligations.</li>
      </ul>

      <h2 className='text-xl font-semibold mt-3'>Data Sharing</h2>

      <p>We do not share your personal information with third parties, except as required by law or with your consent.</p>

      <h2 className='text-xl font-semibold mt-3'>Data Security</h2>

      <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>

      <h2 className='text-xl font-semibold mt-3'>Data Retention</h2>

      <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When no longer needed, we securely dispose of or anonymize your information.</p>

      <h2 className='text-xl font-semibold mt-3'>Your Rights</h2>

      <p>You have the right to access, update, or delete your personal information. You may also have the right to restrict or object to certain processing activities. To exercise these rights, please contact us using the information provided below.</p>

      <h2 className='text-xl font-semibold mt-3'>Changes to This Privacy Policy</h2>

      <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and the updated policy will become effective immediately upon posting. We encourage you to review this Privacy Policy periodically for any updates.</p>

      <h2 className='text-xl font-semibold mt-3'>Contact Us</h2>

      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at [contact email or address].</p>
    </main>
  );
}