import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import { GlobalStyles } from '../styles/globalStyles'
import { theme } from '../styles/theme'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  ); 
}

export default MyApp
