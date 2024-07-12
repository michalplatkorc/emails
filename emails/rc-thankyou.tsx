import * as React from "react";
import { Body, Button, Column, Container, Font, Head, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from "@react-email/components";
import { button, buttonSecondary, container, contentContainer, divider, footer, footerLink, footerSubTextSecondary, header, headerDivider, headerTitle, icon, main, subtitle, subtitle2, twConfig } from "../rc-shared";
import OutlookConditional from "../custom/OutlookConditional";

export const ThankYou = () => (

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
        <Preview>Rarecrew Newsletter | Thank you</Preview>
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
                            src="https://web-dev.rarecrew.com/Mailchimp/Assets/Thank_you_icon.svg"
                            width={78}
                            height={78}
                            alt="Thank you icon with circular border"
                            style={icon}
                        />
                    </OutlookConditional>

                    <Text style={subtitle}>Thank you for your trust</Text>
                    <Text style={subtitle2}>Your subscription to our list has been confirmed.</Text>
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
                        <Button style={button} href="https://rarecrew.com">Continue to our website</Button>
                    </OutlookConditional>

                    <OutlookConditional
                        msoStart={`
                            <center>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="v-text-anchor:middle;width:800px;" arcsize="6%" stroke="false" fill="false">
                            <w:anchorlock/>
                            <center>
                        `}
                        msoEnd={`
                        </center>
                        </v:roundrect>
                        </center>
                        `}
                    >
                        <Button style={buttonSecondary} href="*|UNSUB|*">Unsubscribe</Button>
                    </OutlookConditional>

                </Section>

                <Row>
                    <Column style={divider}></Column>
                </Row>

                <Row style={footer}>
                    <Column>
                        <Text style={footerSubTextSecondary}>If you'd like a free demo, <Link style={footerLink} href="https://rarecrew.com/#getintouch">you can book one here</Link>.</Text>
                    </Column>
                </Row>
            </Container>
        </Body>
    </Html>
);

export default ThankYou;