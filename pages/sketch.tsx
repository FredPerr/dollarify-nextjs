import Layout from 'layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from 'layouts'
import { Button } from '@/components/common/button/'
import { AnchorText } from '@/components/common/anchor'
import { AnchorButton } from '@/components/common/anchor'
import { Box } from '@/components/common/box'
import { Typography } from '@mui/material'
import { Text } from '@/components/common/text'


// TODO: Remove the sketch page in production or when not necessary anymore.

const SketchPage: NextPageWithLayout = () => {
  return (
    <>
      <Button variant="contained" color="error">test</Button>
      <Button color="info">test</Button>
      <Button color="primary">test</Button>
      <Button color="secondary">test</Button>
      <AnchorText href="/test" content="Do ut et commodo eiusmod."/>
      <AnchorButton variant="contained" href="/test" content="Do ut et commodo eiusmod."/>
      <Box variant='filled'><Typography>TEST</Typography></Box>
      <Box variant='outlined'><Typography>TEST</Typography></Box>
      <Text variant="h4">Test</Text>
      <Text variant="overline">Test</Text>
    </>
  )
}


SketchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default SketchPage
