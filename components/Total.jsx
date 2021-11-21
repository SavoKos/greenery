import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Total() {
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = () => {
    if (cartItems.length > 0)
      return cartItems
        .map((item) => item.quantity * item.price)
        .reduce((prevValue, currValue) => prevValue + currValue);
  };

  return (
    <>
      <S.Row>
        <h4>Subtotal</h4>
        <h4 className='price'>$ {subTotal()}.00</h4>
      </S.Row>
      <S.Row>
        <h4>Shipping</h4>
        <h4 className='price'>$ 10.00</h4>
      </S.Row>
      <S.Total>
        <h4>Total</h4>
        <h4 className='price'>$ {subTotal() + 10}.00</h4>
      </S.Total>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    margin-top: 0.5rem;

    &.price {
      font-weight: 600;
    }
  }
`;

S.Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  h4 {
    font-weight: 600;
  }

  .price {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export default Total;
