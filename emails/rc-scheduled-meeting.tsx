import { Body, Button, Column, Container, Font, Head, Html, Img, Row, Section, Text, } from "@react-email/components";
import React from "react";


export const ScheduledMeeting = () => {
    return (
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
                <title>
                    RareCrew Meeting Invitation
                </title>
            </Head>
            <Body style={main}>
                <Container style={container}>

                    <Section style={content}>
                        <Text style={text}>Hi <span style={semibold}>Ema</span>,
                            <br />
                            <br />
                            thank you for scheduling online meeting with us.<br />
                            Please see invitation in your calendar app.
                        </Text>

                        <Section style={calendarSection}>
                            <Column style={calendarIcon}>
                                <Text style={calendarMonth}>Feb</Text>
                                <Text style={calendarDay}>7</Text>
                            </Column>
                            <Column>
                                <Text style={meetingTimeText}>
                                    Wednesday, February 7, 2024<br />
                                    07:00 - 07:30 (UTC+01:00)
                                </Text>

                                <Button style={meetingButton} href="https://www.rarecrew.com/">Open calendar event</Button>
                            </Column>
                        </Section>

                        <Text style={text2}>We are looking forward to meet you.</Text>
                        <Section>
                            <Column style={avatar}>
                                <Img style={avatar} width={40} height={40} src="https://rarecrew.com/Images/Profile_photo.png" alt="Dusan Tomic" />
                            </Column>
                            <Column>
                                <Text style={avatarName}>Dusan Tomic</Text>
                                <Text style={avatarJob}>Business Development Manager</Text>
                            </Column>
                        </Section>
                    </Section>

                    <Section style={footer}>
                        <Row>
                            <Column>
                                <Img style={rcLogo} width={149} height={28} src="https://rcwrcwebstordevlive0.blob.core.windows.net/public/rc-logo.png" alt="Rarecrew logo"></Img>
                            </Column>
                        </Row>
                    </Section>

                </Container>
            </Body>
        </Html>
    )
}

export default ScheduledMeeting;


export const main = {
    backgroundColor: '#F4F4F4',
    padding: '58px 0',
    color: 'black'
}

export const container = {
    backgroundColor: '#2B2B2B',
    color: 'white',
    borderRadius: '10px',
    width: '552px',
}
export const content = {
    padding: '32px'
}
export const semibold = {
    fontWeight: '600'
}
export const text = {
    margin: '0',
    fontFamily: "Montserrat , Arial",
    fontSize: '16px',
    lineHeight: '24px',
}
export const meetingTimeText = {
    marginTop: '0px',
    fontFamily: "Montserrat , Arial",
    fontSize: '18px',
    lineHeight: '27px',
    fontWeight: '600',
}
export const meetingButton = {
    padding: '14px 23px 14px 23px',
    backgroundColor: '#FE780F',
    borderRadius: '3px',
    // text
    fontFamily: "Montserrat , Arial",
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: '600',
    color: 'white',
    textTransform: "uppercase" as const,
}
export const text2 = {
    fontFamily: "Montserrat , Arial",
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0',
    marginBottom: '24px',
}
export const avatar = {
    width: '40px',
    height: '40px',
    marginRight: '13px',
}
export const avatarName = {
    fontFamily: "Montserrat , Arial",
    fontSize: '16px',
    lineHeight: '1',
    fontWeight: '500',
    margin: '0',
    marginBottom: '4px',
    color: 'white',
}
export const avatarJob = {
    fontFamily: "Montserrat , Arial",
    fontSize: '12px',
    lineHeight: '1',
    margin: '0',
    color: 'rgba(255, 255, 255, .8)',
}
export const rcLogo = {
    width: '149px',
    height: '28px',
}
export const footer = {
    backgroundColor: '#1F1F1F',
    padding: "30px 26px 30px 26px",
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px'
}
export const calendarSection = {
    marginTop: '32px',
    marginBottom: '32px',
    paddingTop: '25px',
    paddingBottom: '25px',
    borderTop: '1px solid rgba(255, 255, 255, .1)',
    borderBottom: '1px solid rgba(255, 255, 255, .1)'
}

export const calendarIcon = {
    width: '113px',
    height: '125px',
    paddingRight: '25px',
    backgroundImage: "url(https://rcwrcwebstordevlive0.blob.core.windows.net/public/rc-meeting-calendar_icon.png)",
    backgroundRepeat: "no-repeat"
}
export const calendarMonth = {
    fontSize: "24px",
    color: "white",
    height: "40px",
    fontWeight: "bold",
    margin: 0,
    marginBottom: 20,
    textAlign: "center" as const,
}
export const calendarDay = {
    fontSize: "48px",
    color: "#FE780F",
    height: "40px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: 0,
}

