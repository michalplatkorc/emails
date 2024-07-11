import * as React from "react";
import { Body, Button, Column, Container, Font, Head, Hr, Html, Img, Link, Preview, Section, Tailwind, Text } from "@react-email/components";
import { twConfig } from "../rc-shared";

export const Unsub = () => (
    <Html lang='en' dir='ltr'>
        <Tailwind config={twConfig}>
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
            <Body className="bg-rcbg">
                <Container className="bg-rccontent text-white w-full max-w-[552px] my-[51px] mx-auto">
                    {/* validate */}
                    <Section className="px-6 py-[26px]">
                        <Column className="w-full w-[188px] text-center">
                            <img src="https://web-dev.rarecrew.com/Mailchimp/Assets/rc_logo_black_email.png" />
                            <Text className="hidden font-main w-full text-center text-xl m-0 font-medium">Newsletter</Text>
                        </Column>
                        <Column className="w-[49px]">
                            <div className="bg-white15 w-[1px] h-10 mx-6"></div>
                        </Column>
                        <Column>
                            <Text className="font-main text-xl font-medium ">Newsletter</Text>
                        </Column>
                    </Section>
                    <Hr className="m-0 border-white15" />

                    <Section className="p-6">
                        <Column>
                            <Img
                                src="https://web-dev.rarecrew.com/Mailchimp/Assets/Unsubscribe_icon.svg"
                                width={78}
                                height={78}
                                alt="Unsubscribe cross"
                                className="mt-[69px] mb-[41px] mx-auto"
                            />

                            <Text className="font-main text-[28px] font-medium text-center mt-0 mb-3">Unsubscribe</Text>
                            <Text className="font-main text-[17px] text-center mt-0 mb-7">We’re sorry to see you go! Please confim the action.</Text>
                            <form action="https://vault-erp.us17.list-manage.com/unsubscribe/post" method="POST">
                                <input type="hidden" name="u" value="163b0abf0016c86e534b4d375" />
                                <input type="hidden" name="id" value="0118685862" />
                                <input className="hidden" type="text" name="EMAIL" value="*|EMAIL|*" placeholder="Email Address" />
                                <button className="bg-rcprimary border-0 text-white w-full rounded-[3px] cursor-pointer text-center py-[21px] px-auto tracking-[1.8px] uppercase font-main text-[13px]" type="submit">
                                    Unsubscribe
                                </button>
                            </form>

                        </Column>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

export default Unsub;