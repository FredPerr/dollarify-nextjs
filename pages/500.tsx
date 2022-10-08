import Layout from "layouts";
import type { NextPageWithLayout } from "layouts";
import { ReactElement } from "react";


const ServerErrorPage: NextPageWithLayout = () => {
    return (
        <>
        </>
    )
}

ServerErrorPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ServerErrorPage

// TODO: Add the 500 error page with its layout.