import * as React from "react";
import { Body, Button, Column, Container, Font, Head, Hr, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from "@react-email/components";
import { button, container, contentContainer, divider, footer, footerLink, footerSubTextSecondary, header, headerDivider, headerTitle, icon, main, subtitle, subtitle2, twConfig } from "../rc-shared";
import OutlookConditional from "../custom/OutlookConditional";

export const Unsub = () => (
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
        <Preview>Rarecrew Newsletter | Unsubscribe</Preview>
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
                            src="https://web-dev.rarecrew.com/Mailchimp/Assets/Unsubscribe_icon.svg"
                            width={78}
                            height={78}
                            alt="Unsubscribe icon with circular border"
                            style={icon}
                        />
                    </OutlookConditional>

                    <Text style={subtitle}>Unsubscribe</Text>
                    <Text style={subtitle2}>We're sorry to see you go! Please confirm the action.</Text>
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
                        <form action="https://vault-erp.us17.list-manage.com/unsubscribe/post" method="POST">
                            <input type="hidden" name="u" value="163b0abf0016c86e534b4d375" />
                            <input type="hidden" name="id" value="0118685862" />
                            <input type="hidden" name="EMAIL" value="*|EMAIL|*" placeholder="Email Address" />
                            <Button style={button} href="*|UNSUB|*" type="submit">Unsubscribe</Button>
                        </form>
                    </OutlookConditional>

                </Section>

            </Container>
        </Body>
    </Html>
);

export default Unsub;