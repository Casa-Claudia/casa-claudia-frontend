import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
    Button,
  } from "@react-email/components";
  import * as React from "react";
  import emailStyles from "./styles";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const OwnerInitialMail = () => {
    const acceptLink = `http://localhost:3001/order`;
    const rejectLink = `http://localhost:3001/order`;
  
    return (
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
          <Preview>Prejeta zahteva za rezervacijo!</Preview>
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
                  Prejeta zahteva za rezervacijo za Villa Casa Claudia:
                </Text>
  
                <Hr style={emailStyles.hr} />
                <Text style={emailStyles.paragraph}>
                  <strong>Podrobnosti rezervacije:</strong><br />
                  - Ime: [reservation.firstName] [reservation.lastName]<br />
                  - Datum prihoda: [reservation.arrivalDate]<br />
                  - Datum odhoda: [reservation.departureDate]<br />
                  - Cena: [reservation.price]<br />
                  - Število gostov: [reservation.numberOfGuests]
                </Text>
  
                <Hr style={emailStyles.hr} />
                <Text style={emailStyles.paragraph}>
                  Prosimo, preglejte zahtevo za rezervacijo in sprejmite ustrezne ukrepe.
                </Text>
  
                <Text>
                <div className="flex justify-center">
                    <Link href={acceptLink} style={emailStyles.button}>Sprejmi rezervacijo</Link>
                    <Link href={rejectLink} style={emailStyles.button}>Zavrni rezervacijo</Link>
                </div>
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
  };
  
  export default OwnerInitialMail;
  