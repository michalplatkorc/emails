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
    marginLeft: 20,
    marginRight: 20,
}
export const headerTitle = {
    fontFamily: mainFontFamily,
    fontSize: 20,
    margin: 0,
    padding: 0,

}

// FIXME: need to rewrite this t use some block level element because mso is rendering extra line 
export const divider = {
    borderTop: "1px solid rgba(204,213,221,0.15)",
    outline: "none",
    margin: 0,
    padding: 0,
    fontSize: 0,
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