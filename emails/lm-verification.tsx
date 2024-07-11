import {
    Body,
    Button,
    Container,
    Font,
    Head,
    Html,
    Preview,
    Section,
    Text,
    Img
} from "@react-email/components";
import * as React from "react";
import { main, container, box, button, paragraph, topParagraph, bottomParagraph, footer, anchorOverride, anchorLinkOverride } from "./logmill-styling";

export const VerificationEmail = () => (
    <Html lang='en' dir='ltr'>
        <Head>
            <Font
                fontFamily="Poppins"
                webFont={{
                    url: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
                    format: "woff2"
                }}
                fallbackFontFamily="Arial"
            />
            <title>
                Logmill Verification
            </title>
        </Head>
        <Preview>Logmill Verification</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={box}>
                    <Text style={topParagraph}>
                        Hi,<br /> This is verification change message!
                    </Text>
                    <Text style={paragraph}>
                        Click below to verify your email address.
                    </Text>
                    <Button style={button} href="https://example.com" target="_blank">
                        Verify email
                    </Button>
                    <Text style={bottomParagraph}>

                        If you run into any issues or have a question, comment or <br /> suggestion you can contact us at <a style={anchorLinkOverride} href="mailto:support@logmill.io">support@logmill.io</a>.
                        <br />
                        <br />
                        This message was sent from an automated email address.<br /> Please do not reply to this message.
                        <br />
                        <br />
                        Sincerely,
                        <br />
                        <strong>LogMill Team</strong>
                    </Text>
                </Section>
                <Img style={footer} src="https://rcw-logmill-web-poc-2-slot-01.azurewebsites.net/assets/images/email/Footer.png" />
            </Container>
        </Body>
    </Html>
);

export default VerificationEmail;