import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <p>This can be a Header</p>
      <Component {...pageProps} />
      <p style={{ marginTop: '1rem' }}>This can be a Footer</p>
    </>
  )
}

export default MyApp
