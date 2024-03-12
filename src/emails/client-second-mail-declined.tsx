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
  
  export const ClientSecondEmailDeclined = () => (
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
        <Preview>Your reservation submission has been declined</Preview>
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
                We regret to inform you that your reservation submission has been declined.
                <br /><br />
                Upon review, we found that the requested dates are not available or do not meet our reservation criteria.
                Therefore, we are unable to accommodate your reservation at this time.
              </Text>
  
              <Hr style={emailStyles.hr} />
              <Text style={emailStyles.paragraph}>
                If you have any questions or need further clarification, please do not hesitate to contact us.
                <br /><br />
                We apologize for any inconvenience caused.
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
  
  export default ClientSecondEmailDeclined;