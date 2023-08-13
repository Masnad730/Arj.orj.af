import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='keywords' content='' />
        <meta name='robots' content=' index, follow' />

        {/* Facebook Open Graph  */}
        <meta property='og:title' content='' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='' />
        <meta property='og:image' content='' />
        <meta property='og:site_name' content='' />
        <meta property='og:description' content='' />
        <meta property='og:image:secure_url' content='' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='' />
        <meta name='twitter:description' content='' />
        <meta name='twitter:image' content='' />

        {/* Links To External Resources */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossOrigin='anonymous'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Monoton&display=swap'
          rel='stylesheet'
        />
        {/* End - Links To External Resources */}

        {/* Favicon For Different Browser */}
        {/* Favicon - End */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
