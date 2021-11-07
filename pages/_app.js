import Theme from 'Theme';
import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Login from '@components/Auth/Login';
import { AuthProvider } from 'context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Provider store={store}>
        <AuthProvider>
          <Login />
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </Theme>
  );
}

export default MyApp;
