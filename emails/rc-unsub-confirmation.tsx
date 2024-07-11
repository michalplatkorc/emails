import * as React from "react";
import { Body, Button, Column, Container, Font, Head, Hr, Html, Preview, Row, Section, Tailwind, Text } from "@react-email/components";
import { twConfig } from "../rc-shared";

const radioGroupStyles = "flex items-center gap-[18px] mb-[18px]";
const radioStyles = "mb-[18px] w-[18px] h-[18px] m-0 relative appearance-none outline outline-2 outline-white20 rounded-full";
const radioLabelStyles = "font-main text-[15px] text-left";

export const UnsubConfirm = () => (
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
            <Preview>Rarecrew Newsletter | Confirmation</Preview>
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

                            <Text className="font-main text-[28px] font-medium text-center m-0">Unsubscribe Successful</Text>
                            <Text className="font-main text-[17px] text-center mt-3 mb-[31px]">You will no longer receive Rarecrew Newsletter.</Text>
                            <Hr className="border-t-white15 m-0 mb-6" />
                            <div className={radioGroupStyles}>
                                <input type="checkbox" id="nolonger" className={radioStyles} />
                                <label htmlFor="nolonger" className={radioLabelStyles}>I no longer want to receive these emails</label>
                            </div>
                            <div className={radioGroupStyles}>
                                <input type="checkbox" id="neversignedup" className={radioStyles} />
                                <label htmlFor="neversignedup" className={radioLabelStyles}>I never signed up for this mailing list</label>
                            </div>
                            <div className={radioGroupStyles}>
                                <input type="checkbox" id="inappropriate" className={radioStyles} />
                                <label htmlFor="inappropriate" className={radioLabelStyles}>The emails are inappropriate</label>
                            </div>

                            <div className={radioGroupStyles}>
                                <input type="checkbox" id="emailspam" className={radioStyles} />
                                <label htmlFor="emailspam" className={radioLabelStyles}>The emails are spam and should be reported</label>
                            </div>

                            <div className={radioGroupStyles}>
                                <input type="checkbox" id="other" className={radioStyles} />
                                <label htmlFor="other" className={radioLabelStyles}>Other (fill in reason below)</label>
                            </div>
                            <Row>
                                <textarea rows={3} className="bg-transparent border-2 border-white20 w-full h-[88px] font-main px-auto text-white resize-none box-border" />
                            </Row>
                            <div className="mt-6">
                                <Button className="bg-rcprimary text-white w-[260px] rounded-[3px] text-center py-[21px] px-auto tracking-[1.8px] uppercase font-main text-[13px]" type="submit">Submit</Button>
                                <Button className="text-white rounded-[3px] ml-[30px] text-center py-[21px] px-auto tracking-[1.8px] uppercase font-main text-[13px]" href="https://www.rarecrew.com">return to our website</Button>
                            </div>
                        </Column>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html >
);

export default UnsubConfirm;