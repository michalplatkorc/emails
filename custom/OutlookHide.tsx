import React, { ReactElement } from "react";
import { renderToString } from "react-dom/server";

type OutlookProps = { children?: ReactElement };

export default function OutlookHidden({ children }: OutlookProps) {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
            <!--[if !mso]>-->
            ${renderToString(children!)}
            <!--<![endif]-->
            `}} />
    )
}