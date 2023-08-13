import Head from 'next/head'

import HeaderSection from './header-section'
import FooterSection from './footer-section'

export default function Layout({ children, title, canonical, pageDescription, jsonLD, page }) {
  return (
    <>
      <Head>
        <link rel='canonical' href={canonical} />
        <meta name='description' content={pageDescription} />
        <title>{title}</title>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: jsonLD }} />
      </Head>

      <HeaderSection activePage={page} />
      <main>{children}</main>
      <FooterSection />
    </>
  )
}
