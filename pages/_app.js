import Theme from 'Theme';
import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Login from '@components/Auth/Login';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Provider store={store}>
        <Login />
        <Component {...pageProps} />
      </Provider>
    </Theme>
  );
}

export default MyApp;
