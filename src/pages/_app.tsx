import { Header } from "../components/Header";
import {AppProps} from 'next/app'
import "../styles/global.scss";
import {Provider as NextAuthProxiver} from 'next-auth/client'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <NextAuthProxiver session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProxiver>
  );
}

export default MyApp;
