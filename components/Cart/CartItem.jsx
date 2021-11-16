import CartQuantity from '@components/Cart/CartQuantity';
import styled from 'styled-components';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Size from './Size';
import Icon from '@components/UI/Icon';
import { useDispatch } from 'react-redux';
import { deleteCartItem } from 'redux/cartSlice';
import Link from 'next/link';

function CartItem({ plant }) {
  const { cartItems } = useSelector((state) => state.cart);
  const plantInCart = cartItems.filter((item) => item.name === plant.name)[0];
  const dispatch = useDispatch();

  return (
    <S.CartItem>
      <Link href={'/plant/' + plant.name.toLowerCase().split(' ').join('-')}>
        <S.Product>
          <S.Image>
            <Image src={plant.image} layout='fill' />
          </S.Image>
          <h4 className='name'>{plant.name}</h4>
        </S.Product>
      </Link>
      <h4 className='price'>$ {plant.price}</h4>
      <CartQuantity plant={plant} />
      <Size plant={plant} />
      <h4 className='price'>$ {plant.price * plantInCart.quantity + '.00'}</h4>
      <Icon
        type='icon-trashbin-copy'
        onClick={() => dispatch(deleteCartItem(plant))}
      />
    </S.CartItem>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.CartItem = styled.div`
  background-color: #f5f5f5;
  margin-top: 0.7rem;
  padding: 0.3rem 1rem;
  display: grid;
  grid-template-columns: 3fr repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-template-rows: 1fr;
  align-items: center;

  h3 {
    margin: 0;
  }

  .anticon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .price {
    color: #aaa;
    font-weight: 500;
  }
`;

S.Product = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    margin-left: 0.5rem;
  }
`;

S.Image = styled.div`
  position: relative;
  min-height: 50px;
  min-width: 50px;
`;

export default CartItem;
