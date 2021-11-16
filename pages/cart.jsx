import Navigation from '@components/Navigation';
import styled from 'styled-components';
import Hero from '@components/Cart/Hero';
import RelatedProducts from '@components/PlantDetails/RelatedProducts';
import { useSelector } from 'react-redux';
import Footer from '@components/Footer';
import Head from 'next/head';

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Head>
        <title>Greenery | Cart</title>
        <meta name='description' content='Greenery Cart' />
        <link href='https://greenery.savokos.com/cart' rel='canonical' />
      </Head>
      <S.CartContainer>
        <Navigation />
        <Hero />
        {cartItems.length > 0 && <RelatedProducts />}
        <Footer />
      </S.CartContainer>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.CartContainer = styled.div`
  padding: 0 5%;
`;
