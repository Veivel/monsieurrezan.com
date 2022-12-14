import '../styles/globals.css'
import '../styles/burger.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { AxiosProvider } from '../components/utils/context/AxiosProvider';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      <Navbar />
      <AxiosProvider>
        <Component {...pageProps} />
      </AxiosProvider>
      <Footer />
    </div>
  );
}
