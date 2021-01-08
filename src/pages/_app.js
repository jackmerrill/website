import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Head from 'next/head'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Jack Merrill</title>
        <meta name="description" content="The personal website of Jack Merrill, a great graphic designer. (I could be biased)."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >

        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
