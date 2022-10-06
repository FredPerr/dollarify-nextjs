import { Button } from '@mui/material'
import Layout from 'layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from 'layouts'


const Home: NextPageWithLayout = () => {
  return (
    <Button variant="contained">
      TEST
    </Button>
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
