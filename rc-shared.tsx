// import defaultTheme from "tailwindcss/defaultTheme";

export const twConfig = {
    theme: {
        extend: {
            colors: {
                rcbg: "#212121",
                rccontent: "#2c2c2c",
                white15: "rgba(204,213,221,0.15)",
                white20: "rgba(204,213,221,0.20)",
                darkened: "rgba(255,255,255,0.8)",
                rcprimary: "#FE780F",

            }
        },
        fontFamily: {
            "main": ['Montserrat', 'Arial', 'sans-serif']
        },
    }
}
/**
 * Rewrite to shared rc stylesheets
 */

export const mainFontFamily = "Montserrat, Arial, sans-serif";

export const main = {
    backgroundColor: "#212121",
};

export const container = {
    backgroundColor: "#2c2c2c",
    color: "white",
    width: '100%',
    maxWidth: 552,
    marginTop: 51,
    marginBottom: 51,
    fontFamily: mainFontFamily,
};

export const header = {
    fontFamily: mainFontFamily,
    padding: "26px 24px 26px 24px"
}
export const headerDivider = {
    backgroundColor: "rgba(204,213,221,0.15)",
    width: 1,
    height: 40,
    lineHeight: "40px",
    marginLeft: 20,
    marginRight: 20,
}
export const headerTitle = {
    fontFamily: mainFontFamily,
    fontSize: 20,
    margin: 0,
    padding: 0,

}

export const divider = {
    width: "100%",
    height: 1,
    backgroundColor: "gray",
}

export const contentContainer = {
    padding: 24,
}

export const icon = {
    marginTop: 46,
    marginBottom: 41,
    marginLeft: "auto",
    marginRight: "auto"
}

export const subtitle = {
    fontFamily: mainFontFamily,
    fontSize: 28,
    lineHeight: '47px',
    textAlign: "center" as const,
    marginTop: 0,
    marginBottom: 24,
}

export const subtitle2 = {
    fontFamily: mainFontFamily,
    textAlign: "center" as const,
    color: "#FFFFFFCC",
    fontSize: 17,
    lineHeight: "25px",
    marginBottom: 28,
}
export const button = {
    backgroundColor: '#FE780F',
    appearance: "none" as const,
    border: 0,
    color: "white",
    width: "100%",
    borderRadius: 3,
    textAlign: "center" as const,
    textTransform: "uppercase" as const,
    padding: "21px auto",
    letterSpacing: 1.8,
    fontFamily: mainFontFamily,
    fontSize: 13,
    lineHeight: "19px",
}

export const buttonSecondary = {
    ...button,
    backgroundColor: 'transparent',
}
export const footer = {
    padding: 24,
    paddingBottom: 29
}

export const footerText = {
    fontFamily: mainFontFamily,
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
    lineHeight: '16px',
    margin: 0,
    marginBottom: 12,
}


export const footerSubText = {
    fontFamily: mainFontFamily,
    fontSize: 13,
    lineHeight: '21px',
    color: "white",
    margin: 0,
}
export const footerSubTextSecondary = {
    ...footerSubText,
    textAlign: "center" as const,
}
export const footerLink = {
    fontFamily: mainFontFamily,
    fontSize: 13,
    lineHeight: '21px',
    color: "#FE780F",
    textDecoration: "underline"
}

// unsub
export const unsubButton = {
    ...button,
    height: 61,
    cursor: "pointer"
}
export const unsubTitle = {
    ...subtitle,
    marginTop: 27,
    marginBottom: 12
}

export const unsubTitle2 = {
    ...subtitle2,
    marginTop: 0,
    marginBottom: 31
}

export const unsubCaption = {
    ...unsubTitle2,
    fontSize: 15,
    lineHeight: "19px",
    marginBottom: 16,
}

export const radioGroup = {
    marginBottom: 18,
}

export const radio = {
    marginBottom: 18,
    width: 18,
    height: 18,
    margin: 0,
    padding: 0,
    position: "relative" as const,
    appearance: "none" as const,
    outline: "2px solid rgba(204,213,221,0.20)",
    borderRadius: "100%",
    verticalAlign: "top" as const,
}
export const radioLabel = {
    fontFamily: mainFontFamily,
    marginLeft: 12,
    fontSize: 15,
    textAlign: "left" as const,
}
export const textarea = {
    fontFamily: mainFontFamily,
    backgroundColor: "transparent",
    border: "2px solid rgba(204,213,221,0.20)",
    height: 88,
    padding: "0 auto",
    color: "white",
    resize: "none" as const,
    boxSizing: "border-box" as const,
    width: "100%"
}