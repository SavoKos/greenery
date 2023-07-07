import Address from '@components/Checkout/Address';
import Order from '@components/Checkout/Order';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartEmpty from '@components/CartEmpty';
import Head from 'next/head';

function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Head>
        <title>Greenery | Checkout</title>
        <meta
          name='description'
          content='Enter your information to complete order.'
        />
        <link href='https://greenery.savo-kos.com' rel='canonical' />
      </Head>
      <Navigation />
      <S.Container>
        {cartItems.length < 1 ? (
          <CartEmpty />
        ) : (
          <S.Checkout>
            <Address />
            <Order />
          </S.Checkout>
        )}
      </S.Container>
      <Footer />
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
`;

S.Checkout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export default Checkout;
