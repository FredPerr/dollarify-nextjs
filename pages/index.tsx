import Layout from 'layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from 'layouts'
import { Button } from '@/components/common/button/'
import { AnchorText } from '@/components/common/anchor'
import { AnchorButton } from '@/components/common/anchor'


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Button variant="contained" color="error">test</Button>
      <Button color="info">test</Button>
      <Button color="primary">test</Button>
      <Button color="secondary">test</Button>
      <AnchorText href="/test" content="Do ut et commodo eiusmod."/>
      <AnchorButton variant="contained" href="/test" content="Do ut et commodo eiusmod."/>
    </>
  )
}


Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home
