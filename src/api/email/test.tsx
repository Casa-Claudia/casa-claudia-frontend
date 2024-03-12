import { Resend } from 'resend';
import ClientInitialMail from '@/emails/client-initial-mail';

const resend = new Resend(process.env.RESEND_API_KEY);

export  default async function POST() {
    await resend.emails.send({
    from: 'rok.rajher8@gmail.com',
    to: 'rok.rajher8@gmail.com',
    subject: 'hello world',
    react: <ClientInitialMail />,
    });
}