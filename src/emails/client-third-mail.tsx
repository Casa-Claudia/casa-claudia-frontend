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
  
  export const ClientThirdMail = () => (
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
        <Preview>Your payment has been received and your stay is confirmed!</Preview>
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
                We are thrilled to inform you that we have received your payment successfully!
                Your stay at Villa Casa Claudia is now confirmed.
                <br /><br />
                Here are the details of your reservation:
              </Text>
  
              <Hr style={emailStyles.hr} />
              <Text style={emailStyles.paragraph}>
                <strong>Reservation Details:</strong><br />
                - Name: [reservation.firstName] [reservation.lastName]<br />
                - Arrival Date: [reservation.arrivalDate]<br />
                - Departure Date: [reservation.departureDate]<br />
                - Price: [reservation.price]<br />
                - Number of Guests: [reservation.numberOfGuests]
              </Text>
  
              <Hr style={emailStyles.hr} />
              <Text style={emailStyles.paragraph}>
                If you have any further inquiries or require assistance, please feel free to contact us.
                <br /><br />
                We look forward to welcoming you to Villa Casa Claudia!
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
  
  export default ClientThirdMail;
  