import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'Terms of service',
};

export default function TermsOfService() {
  return (
    <main className="bg-my-white px-32 py-16">
      <h1 className="text-3xl font-bold text-black">Terms of service</h1>
      <p className="mt-5  text-black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis suscipit maxime esse quaerat
        reprehenderit quibusdam molestias iusto facere optio alias expedita itaque aliquam aut,
        cumque delectus, doloremque facilis sunt saepe ab. Porro ex voluptatum tempora,
        exercitationem quas in eum quisquam atque perferendis sunt itaque animi rem quaerat minima
        quia. Amet?
      </p>
    </main>
  );
}
