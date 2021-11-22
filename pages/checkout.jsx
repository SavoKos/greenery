import Address from '@components/Checkout/Address';
import Order from '@components/Checkout/Order';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CartEmpty from '@components/CartEmpty';

function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length < 1)
    return (
      <>
        <Navigation />
        <S.Container>
          <CartEmpty />
        </S.Container>
        <Footer />
      </>
    );

  return (
    <>
      <Navigation />
      <S.Container>
        <S.Checkout>
          <Address />
          <Order />
        </S.Checkout>
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
