import Layout from "layouts";
import type { NextPageWithLayout } from "layouts";
import { ReactElement } from "react";


const ErrorPage: NextPageWithLayout = ()=>{
    return (
        <>
        </>
    )
}

ErrorPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

// TODO: Add the error page with its layout.