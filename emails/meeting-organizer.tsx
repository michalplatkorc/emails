import {
    Body,
    Column,
    Container,
    Html,
    Link,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

export const MeetingOrganizer = () => (
    <Html lang='en' dir='ltr'>
        <Body style={main}>
            <Container>
                <Text>Hi, </Text>
                <Text>new meeting has been booked with <b>Ema Roskova Test</b> with following details:</Text>

                <Section>
                    <Row>
                        <Column style={calendar}>
                            <div style={{ border: "1px solid rgb(200,200,200)" }}>
                                <Text style={calendarHeader}>May</Text>
                                <Text style={calendarDay}>21</Text>
                            </div>

                            <Text style={calendarTime}>8:00 <span style={calendarAMPM}>AM</span> </Text>

                        </Column>

                        <Column style={calendarDetails}>
                            <Text style={label}>Name</Text>
                            <Text style={name}>Ema Roskova Test</Text>

                            <Text style={label}>Email address</Text>
                            <Text style={{ margin: 0, marginBottom: 15 }}>
                                <Link style={link} href="mailto:emaroskova@rarecrew.com" target="_blank">emaroskova@rarecrew.com</Link>
                            </Text>

                            <Text style={label}>Additional details</Text>
                            <Text style={name}>Test 5/17/2024</Text>

                            <Link style={link} href="https://example.com" target="_blank">View calendar event</Link>
                        </Column>
                    </Row>
                </Section>
            </Container>
        </Body>
    </Html >
);

export default MeetingOrganizer;

const main = {
    backgroundColor: "white",
}
const calendar = {
    verticalAlign: "top",
    width: 90,
    margin: 0,
    padding: 0,

}
// border: "1px solid rgb(200,200,200)"
const calendarHeader = {
    backgroundColor: "#00336E",
    textAlign: "center" as const,
    color: "white",
    textTransform: "uppercase" as const,
    fontWeight: "bold",
    fontSize: "16px",
    margin: 0,
    padding: 0
}
const calendarDay = {
    textAlign: "center" as const,
    fontSize: "30px",
    lineHeight: "2em",
    margin: 0
}

const calendarTime = {
    textAlign: "center" as const,
    fontSize: "16px",
    margin: 0,
    fontWeight: "bold",
}

const calendarAMPM = {
    fontWeight: "bold",
    color: "rgb(180,180,180)",
    fontSize: "12px",
    marginLeft: 4,
    textTransform: "uppercase" as const,
}

const calendarDetails = {
    // marginLeft: 16,
    paddingLeft: 16,
}
const name = {
    fontWeight: "bold",
    fontSize: "20px",
    margin: 0,
    marginBottom: 15,
}

const label = {
    color: "rgb(180,180,180)",
    margin: 0,
}

const link = {
    color: "#00336E",
}