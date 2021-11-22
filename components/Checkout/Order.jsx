import Total from '@components/Total';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CheckoutItem from './CheckoutItem';

function Order() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <S.Order>
      <h3>Your Order</h3>
      <S.OrderHeader>
        <h4>Products</h4>
        <h4>Total</h4>
      </S.OrderHeader>
      {cartItems.map((item) => (
        <CheckoutItem plant={item} key={item.name} />
      ))}
      <Total />
    </S.Order>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Order = styled.div`
  width: 100%;
  margin-top: 3rem;

  h3 {
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: 500;
  }

  @media screen and (min-width: 992px) {
    width: 38%;
  }

  @media screen and (min-width: 1200px) {
    width: 28%;
  }
`;

S.OrderHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Order;
