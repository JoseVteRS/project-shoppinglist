import UIProvider from '../src/components/providers/ui-provider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp
