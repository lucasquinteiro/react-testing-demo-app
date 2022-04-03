import "../styles/globals.css";
import type { AppProps } from "next/app";


require('../tests/mocks/api-interceptor')


const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
