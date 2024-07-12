import * as React from "react";
import { Body, Button, Column, Container, Font, Head, Hr, Html, Img, Preview, Row, Section, Tailwind, Text } from "@react-email/components";
import { button, container, contentContainer, divider, header, headerDivider, headerTitle, icon, main, unsubTitle, subtitle2, twConfig, unsubTitle2, unsubCaption, radioGroup, radio, radioLabel, textarea, buttonSecondary } from "../rc-shared";
import OutlookConditional from "../custom/OutlookConditional";
import OutlookHidden from "../custom/OutlookHide";



export const UnsubConfirm = () => (
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
        <Preview>Rarecrew Newsletter | Confirmation</Preview>
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

                <Row>
                    <Text style={unsubTitle}>Unsubscribe Successful</Text>
                </Row>
                <Row>
                    <Text style={unsubTitle2}>You will no longer receive Rarecrew Newsletter.</Text>
                </Row>

                <Row>
                    <Column style={divider}></Column>
                </Row>

                <Section style={contentContainer}>
                    <OutlookHidden>
                        <>
                            <Text style={unsubCaption}>If you have a moment, please let us know why you unsubscribed:</Text>
                            <Row style={radioGroup}>
                                <input type="checkbox" id="nolonger" style={radio} />
                                <label htmlFor="nolonger" style={radioLabel}>I no longer want to receive these emails</label>
                            </Row>

                            <Row style={radioGroup}>
                                <input type="checkbox" id="neversignedup" style={radio} />
                                <label htmlFor="neversignedup" style={radioLabel}>I never signed up for this mailing list</label>
                            </Row>
                            <Row style={radioGroup}>
                                <input type="checkbox" id="inappropriate" style={radio} />
                                <label htmlFor="inappropriate" style={radioLabel}>The emails are inappropriate</label>
                            </Row>

                            <Row style={radioGroup}>
                                <input type="checkbox" id="emailspam" style={radio} />
                                <label htmlFor="emailspam" style={radioLabel}>The emails are spam and should be reported</label>
                            </Row>

                            <Row style={radioGroup}>
                                <input type="checkbox" id="other" style={radio} />
                                <label htmlFor="other" style={radioLabel}>Other (fill in reason below)</label>
                            </Row>

                            <textarea rows={3} style={textarea} />
                        </>
                    </OutlookHidden>

                    <Row style={{ marginTop: 24 }}>
                        <OutlookHidden>
                            <Column width="50%">
                                <Button style={button}>SUBMIT</Button>
                            </Column>
                        </OutlookHidden>
                        <Column width="50%">
                            <OutlookConditional
                                msoStart={`
                            <center>
                        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="v-text-anchor:middle;width:400px;" arcsize="6%" stroke="false" fill="false">
                            <w:anchorlock/>
                            <center>
                        `}
                                msoEnd={`
                        </center>
                        </v:roundrect>
                        </center>
                        `}
                            >
                                <Button style={buttonSecondary} href="https://www.rarecrew.com">Return to our website</Button>
                            </OutlookConditional>
                        </Column>

                    </Row>
                </Section>

            </Container>
        </Body>
    </Html >
);

export default UnsubConfirm;

/**
 * 
 * <Html lang='en' dir='ltr'>
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
            <Body style="bg-rcbg">
                <Container style="bg-rccontent text-white w-full max-w-[552px] my-[51px] mx-auto">
                    <Section style="px-6 py-[26px]">
                        <Column style="w-full w-[188px] text-center">
                            <img src="https://web-dev.rarecrew.com/Mailchimp/Assets/rc_logo_black_email.png" />
                            <Text style="hidden font-main w-full text-center text-xl m-0 font-medium">Newsletter</Text>
                        </Column>
                        <Column style="w-[49px]">
                            <div style="bg-white15 w-[1px] h-10 mx-6"></div>
                        </Column>
                        <Column>
                            <Text style="font-main text-xl font-medium ">Newsletter</Text>
                        </Column>
                    </Section>
                    <Hr style="m-0 border-white15" />

                    <Section style="p-6">
                        <Column>

                            <Text style="font-main text-[28px] font-medium text-center m-0">Unsubscribe Successful</Text>
                            <Text style="font-main text-[17px] text-center mt-3 mb-[31px]">You will no longer receive Rarecrew Newsletter.</Text>
                            <Hr style="border-t-white15 m-0 mb-6" />
                            <div style={radioGroupStyles}>
                                <input type="checkbox" id="nolonger" style={radioStyles} />
                                <label htmlFor="nolonger" style={radioLabelStyles}>I no longer want to receive these emails</label>
                            </div>
                            <div style={radioGroupStyles}>
                                <input type="checkbox" id="neversignedup" style={radioStyles} />
                                <label htmlFor="neversignedup" style={radioLabelStyles}>I never signed up for this mailing list</label>
                            </div>
                            <div style={radioGroupStyles}>
                                <input type="checkbox" id="inappropriate" style={radioStyles} />
                                <label htmlFor="inappropriate" style={radioLabelStyles}>The emails are inappropriate</label>
                            </div>

                            <div style={radioGroupStyles}>
                                <input type="checkbox" id="emailspam" style={radioStyles} />
                                <label htmlFor="emailspam" style={radioLabelStyles}>The emails are spam and should be reported</label>
                            </div>

                            <div style={radioGroupStyles}>
                                <input type="checkbox" id="other" style={radioStyles} />
                                <label htmlFor="other" style={radioLabelStyles}>Other (fill in reason below)</label>
                            </div>
                            <Row>
                                <textarea rows={3} style="bg-transparent border-2 border-white20 w-full h-[88px] font-main px-auto text-white resize-none box-border" />
                            </Row>
                            <div style="mt-6">
                                <Button style="bg-rcprimary text-white w-[260px] rounded-[3px] text-center py-[21px] px-auto tracking-[1.8px] uppercase font-main text-[13px]" type="submit">Submit</Button>
                                <Button style="text-white rounded-[3px] ml-[30px] text-center py-[21px] px-auto tracking-[1.8px] uppercase font-main text-[13px]" href="https://www.rarecrew.com">return to our website</Button>
                            </div>
                        </Column>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html >
 */