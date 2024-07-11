import React, { ReactElement } from "react";
import { renderToString } from "react-dom/server";

type OutlookProps = { msoStart: string, msoEnd: string, children: ReactElement };

export default function OutlookConditional({ msoStart, msoEnd, children }: OutlookProps) {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
            <!--[if mso]>
            ${msoStart}
            <![endif]-->
            ${renderToString(children)}
            <!--[if mso]>
            ${msoEnd}
            <![endif]-->
            `}} />
    )
}