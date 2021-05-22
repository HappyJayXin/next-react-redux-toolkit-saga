import { Provider } from 'react-redux';
import store from '../app/store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />F
    </Provider>
  );
}
export default MyApp;
