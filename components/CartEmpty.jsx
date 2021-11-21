import styled from 'styled-components';
import Link from 'next/link';
import Icon from './UI/Icon';

function CartEmpty() {
  return (
    <S.CartEmpty>
      <h2>Your cart is empty.</h2>
      <Link href='/'>
        <S.BackToShopping>
          <Icon type='icon-shopping' />
          <p>Back To Shopping</p>
        </S.BackToShopping>
      </Link>
    </S.CartEmpty>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.CartEmpty = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  margin-top: 3rem;
`;

S.BackToShopping = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  color: #fff;
  margin-bottom: 5rem;
  margin-top: 2em;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  p,
  .anticon {
    color: #fff;
  }

  .anticon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

export default CartEmpty;
