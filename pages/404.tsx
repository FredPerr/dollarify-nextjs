import Layout from "layouts";
import type { NextPageWithLayout } from "layouts";
import { ReactElement } from "react";


const NotFoundPage: NextPageWithLayout = () => {
    return (
        <>
        </>
    )
}

NotFoundPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default NotFoundPage;

// TODO: Add the 404 error page with its layout.