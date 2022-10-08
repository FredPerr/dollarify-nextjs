import Layout from 'layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from 'layouts'


const Home: NextPageWithLayout = () => {
  return (<></>)
}


Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home
