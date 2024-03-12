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
  
  export const ClientSecondEmailSuccess = () => (
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
        <Preview>Your reservation has been approved!</Preview>
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
                We are delighted to inform you that your reservation has been approved!
                <br /><br />
                Please note that you have <strong>5 working days</strong> to complete the payment process.
                Below are the payment details:
              </Text>
  
              <Hr style={emailStyles.hr} />
              <Text style={emailStyles.paragraph}>
                <strong>Payment Details:</strong><br />
                - Bank Name: [Bank Name]<br />
                - Account Number: [Account Number]<br />
                - Payment Amount: [Payment Amount]<br />
                - Payment Deadline: [Deadline]
              </Text>
  
              <Hr style={emailStyles.hr} />
              <Text style={emailStyles.paragraph}>
                If you have any questions or need further assistance, feel free to contact us.
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

  export default ClientSecondEmailSuccess;