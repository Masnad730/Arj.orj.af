import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { SnackbarProvider } from 'notistack'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'yet-another-react-lightbox/styles.css'

import '../css/nprogress.css'
import '../css/base.css'
import '../css/main.css'
import '../css/components.css'
import '../css/grid.css'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='viewport-fit=cover' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </Head>
      <SnackbarProvider maxSnack={3}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </SnackbarProvider>
    </>
  )
}
