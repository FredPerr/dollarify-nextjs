import Layout from 'layouts'
import { ReactElement } from 'react'
import { NextPageWithLayout } from 'layouts'
import { Button } from '@/components/common/button/'
import { AnchorText } from '@/components/common/anchor'
import { AnchorButton } from '@/components/common/anchor'
import { Box } from '@/components/common/box'
import { Typography } from '@mui/material'
import { Text } from '@/components/common/text'
import { NameLogo, SquareLogo } from '@/components/logo'


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
      <Text variant="subtitle1">Test</Text>
      <NameLogo width={300} height={300}/>
      <SquareLogo width={100} height={100}/>
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
