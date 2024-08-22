import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import 'node_modules/react-modal-video/css/modal-video.css'
// import '../styles/index.css'
import 'flowbite'

import './globals.css'

// import './node_modules/@material-tailwind/html/scripts/ripple.js'
export const revalidate = 1 // revalidate at most 1800 seconds

export default function RootLayout ({ children }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head>
        {/* <link rel='icon' href='./fav-icon.svg' /> */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        {/* <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            // // // // // crossOrigin='true'
          /> */}
        {/* <meta property='og:site_url' content='http://localhost:3000' /> */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body className=''>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}

import { Providers } from './providers.jsx'
