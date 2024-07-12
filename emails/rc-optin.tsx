import * as React from "react";
import { Body, Button, Column, Container, Font, Head, Hr, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components";
import OutlookConditional from "../custom/OutlookConditional";
import { main, container, header, headerDivider, headerTitle, divider, contentContainer, icon, subtitle, button, footer, footerText, footerSubText, footerLink, } from "../rc-shared";

export const OptIn = () => (
    <Html lang='en' dir='ltr'>
        <Head>
            <Font
                fontFamily="Montserrat"
                webFont={{
                    url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap",
                    format: "woff2"
                }}
                fallbackFontFamily="Arial"
            />
        </Head>
        <Preview>Rarecrew Newsletter | Confirm Subscription</Preview>
        <Body style={main}>
            <Container style={container}>
                <Row style={header}>
                    <Column width={'20%'}>
                        <img src="https://web-dev.rarecrew.com/Mailchimp/Assets/rc_logo_black_email.png" />
                    </Column>
                    <Column width={'5%'}>
                        <div style={headerDivider}></div>
                    </Column>
                    <Column width={'80%'}>
                        <Text style={headerTitle}>Newsletter</Text>
                    </Column>
                </Row>

                <Row>
                    <Column style={divider}></Column>
                </Row>

                <Section style={contentContainer}>
                    <OutlookConditional
                        msoStart={`<center>`}
                        msoEnd={`</center>`}
                    >
                        <Img
                            src="https://web-dev.rarecrew.com/Mailchimp/Assets/Confirm_icon_email.png"
                            width={78}
                            height={78}
                            alt="Subscription confirmation"
                            style={icon}
                        />
                    </OutlookConditional>

                    <Text style={subtitle}>Please confirm subscription</Text>
                    <OutlookConditional
                        msoStart={`
                            <center>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="v-text-anchor:middle;width:800px;" arcsize="6%" stroke="false" fillcolor="#FE780F">
                            <w:anchorlock/>
                            <center>
                        `}
                        msoEnd={`
                        </center>
                        </v:roundrect>
                        </center>
                        `}
                    >
                        <Button style={button} href="https://vault-erp.us17.list-manage.com/subscribe/confirm?u=163b0abf0016c86e534b4d375&id=0118685862&e=*|UNIQID|*">Yes,subscribe me to the this list</Button>
                    </OutlookConditional>
                </Section>

                <Row>
                    <Column style={divider}></Column>
                </Row>

                <Row style={footer}>
                    <Column>
                        <Text style={footerText}>If you are received this email by mistake, simply delete it. You won’t be subscribed if you don’t click the confirmation link above.</Text>
                        <Text style={footerSubText}>For questions about this list, please contact: <Link style={footerLink} href="mailto:info@rarecrew.com">info@rarecrew.com</Link>.</Text>
                    </Column>
                </Row>
            </Container>
        </Body>
    </Html>
);
export default OptIn;