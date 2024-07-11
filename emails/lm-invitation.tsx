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

export const InvitationEmail = () => (
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
                Logmill Invitation
            </title>
        </Head>
        <Preview>Logmill Invitation</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={box}>
                    <Text style={topParagraph}>
                        Hi,<br /> You have been invited to participate in Logmill.io Project! on LogMill.io.
                    </Text>
                    <Text style={paragraph}>
                        Click below button to accept invitation.
                    </Text>
                    <Button style={button} href="https://logmill.io/#/coverpage" target="_blank">
                        Join Logmill.io
                    </Button>
                    <Text style={bottomParagraph}>
                        In case above button not working, paste the below link into <br /> your browser <a style={anchorLinkOverride} href="https://logmill.io/#/coverpage" target="_blank">https://logmill.io/#/coverpage</a>.
                        <br />
                        <br />
                        If you run into any issues or have a question, comment or suggestion you can contact us at <a style={anchorLinkOverride} href="mailto:support@logmill.io">support@logmill.io</a>.
                        <br />
                        <br />
                        This message was sent from an automated email address.<br /> Please do not reply to this message.
                        <br />
                        <br />
                        Sincerely,
                        <br />
                        <strong>LogMill Team</strong>
                        <br />
                        <br />

                        <strong>New to LogMill?</strong> LogMill is tool use by developer to monitor <br /> and manage their personal application, support their <br />business.
                    </Text>
                </Section>
                <Img style={footer} src="https://logmill.io/assets/images/email/Footer.png" />
            </Container>
        </Body>
    </Html>
);

export default InvitationEmail;