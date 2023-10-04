import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import "./globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default appWithTranslation(MyApp)