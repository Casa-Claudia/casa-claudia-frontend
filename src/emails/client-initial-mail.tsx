import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import emailStyles from "./styles";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ClientInitialMail = () => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>Your reservation submission has been sent!</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          <Section style={emailStyles.box}>
            <Img
              src={`${baseUrl}/static/stripe-logo.png`}
              width="49"
              height="21"
              alt="Stripe"
            />
            <Hr style={emailStyles.hr} />
            <Text style={emailStyles.paragraph}>
              Dear [Name], <br /><br />
              Thank you for submitting your reservation. We have received the details and will process your request promptly.
              <br /><br />
              Within the next 2 working days, we will verify the availability and contact you to confirm your reservation.
              If the reservation is confirmed, we will provide you with the payment details for further processing
              in the followup email. If the reservation is not available, you will be notified accordingly.
              <br /><br />
              Here are the details of your reservation submission:
            </Text>

            <Hr style={emailStyles.hr} />
            <Text style={emailStyles.paragraph}>
              <strong>Reservation Details:</strong><br />
              - Name: [reservation.firstName] [reservation.lastName]<br />
              - Arrival Date: [reservation.arrivalDate]<br />
              - Departure Date: [reservation.departureDate]<br />
              - Price: [reservation.price]<br />
              - Number of Guests: [reservation.numberOfGuests]
              <br />
            </Text>

            <Hr style={emailStyles.hr} />
            <Text style={emailStyles.paragraph}>
              If you have any questions or need further assistance, feel free to reach out to us.
              <br /><br />
              Best Regards,<br />
              Villa Casa Claudia
            </Text>
            <Text style={emailStyles.footer}>
              Villa Casa Claudia, 354 Oyster Point Blvd, South San Francisco, CA 94080
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default ClientInitialMail;