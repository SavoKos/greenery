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
        <CheckoutItem plant={item} />
      ))}
      <Total />
    </S.Order>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Order = styled.div`
  width: 28%;
  margin-top: 3rem;

  h3 {
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: 500;
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
