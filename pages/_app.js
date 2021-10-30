import Theme from 'Theme';
import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Theme>
  );
}

export default MyApp;
