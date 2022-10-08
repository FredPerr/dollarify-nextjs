import { ThemeProvider } from "@mui/material/styles"
import Head from 'next/head'
import React from "react"
import defaultTheme from 'styles/themes/default'
import { ReactNode } from "react"
import { NextPage } from "next"
import { ReactElement } from "react"


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}


type LayoutProps = {
    children: ReactNode
}


export default function Layout({ children }: LayoutProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Head>
                <title>Dollarify - Investments Tracking</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Dollarify - Investments Tracking" key="title" />
                <meta property="og:description" content="Why you need to track like us" />
                <meta property="og:image" content="/favicon/favicon-32x32.png" />
                <meta name="description" content="Track your stock and crypto investments with our analysis tools" />
                <meta name="keywords" content="tracker, money, finances, analyze" key="desc" />
                <meta name="msapplication-TileColor" content="#fbfffd" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#40c75e" />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="google" content="notranslate" />
            </Head>
            {children}
        </ThemeProvider>
    )
}