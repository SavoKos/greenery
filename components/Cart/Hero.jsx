import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import Link from 'next/link';

function Hero() {
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = () => {
    if (cartItems.length > 0)
      return cartItems
        .map((item) => item.quantity * item.price)
        .reduce((prevValue, currValue) => prevValue + currValue);
  };

  if (cartItems.length < 1)
    return (
      <S.Hero>
        <h2>Your cart is empty.</h2>
      </S.Hero>
    );

  return (
    <S.Hero>
      <S.Products>
        <S.Header>
          <h4>Products</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Size</h4>
          <h4>Total</h4>
        </S.Header>

        {cartItems.map((item) => (
          <CartItem plant={item} key={item.name} />
        ))}
      </S.Products>
      <S.Totals>
        <S.TotalsHeader>
          <h4>Cart Totals</h4>
        </S.TotalsHeader>
        <S.Row>
          <h4>Subtotal</h4>
          <h4>$ {subTotal()}.00</h4>
        </S.Row>
        <S.Row>
          <h4>Shipping</h4>
          <h4>$ 10.00</h4>
        </S.Row>
        <S.Total>
          <h4>Total</h4>
          <h4 className='price'>$ {subTotal() + 10}.00</h4>
        </S.Total>
        <button>Proceed To Checkout</button>
        <Link href='/'>
          <h4 className='continue'>Continue Shopping</h4>
        </Link>
      </S.Totals>
    </S.Hero>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Hero = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  min-height: 50vh;

  h2 {
    margin: 0 auto;
  }
`;

S.Products = styled.div`
  width: 65%;
`;

S.Header = styled.div`
  display: grid;
  padding-bottom: 0.5rem;
  grid-template-columns: 3fr repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

S.Totals = styled.div`
  width: 25%;

  button {
    background-color: ${({ theme }) => theme.colors.green};
    width: 100%;
    color: #fff;
    text-align: center;
    outline: 0;
    border: 0;
    border-radius: 0.5rem;
    padding: 0.7rem;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }

  .continue {
    text-align: center;
    margin-top: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 500;
  }
`;

S.TotalsHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 0.5rem;
`;

S.Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

S.Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 1rem 0;

  .price {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export default Hero;
