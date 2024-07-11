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
    Img,
    Row
} from "@react-email/components";
import * as React from "react";
import { main, container, box, button, paragraph, topParagraph, bottomParagraph, footer, anchorOverride } from "./logmill-styling";
import MSOConditional from "../custom/OutlookConditional";

export const PasswordResetEmail = () => (
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
                Logmill Password Reset
            </title>
        </Head>
        <Preview>Logmill Password Reset</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={box}>
                    <Text style={topParagraph}>
                        Hi,<br />​You have requested a password change!
                    </Text>
                    <Text style={paragraph}>
                        Click below button to change password​.
                    </Text>
                    <MSOConditional
                        msoStart={`
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="v-text-anchor:middle;width:600px;" arcsize="18%" stroke="false" fillcolor="#FEA31E">
                        <w:anchorlock/>
                        <center>
                        `}
                        msoEnd={`
                        </center>
                        </v:roundrect>
                        `}
                    >
                        <Button style={button} href="https://example.com" target="_blank">
                            Change Password
                        </Button>
                    </MSOConditional>

                    <Text style={bottomParagraph}>
                        This message was sent from an automated email address.
                        <br />
                        Please do not reply to this message. If you run into any issues <br /> or have a question, comment or suggestion you can contact <br />us at <a style={anchorOverride} href="mailto:support@logmill.io">support@logmill.io</a>.
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

export default PasswordResetEmail;