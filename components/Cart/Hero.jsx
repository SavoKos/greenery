import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import Link from 'next/link';
import Total from '@components/Total';
import CartEmpty from '@components/CartEmpty';

function Hero() {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length < 1) return <CartEmpty />;

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
        <Total />
        <Link href='/checkout'>
          <button>Proceed To Checkout</button>
        </Link>
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
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  h2 {
    margin: 0 auto;
  }
`;

S.Products = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 68%;
  }
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
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 28%;
  }

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

export default Hero;
