import styled from 'styled-components';
import { useState } from 'react';
import Icon from '../UI/Icon';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateCartItem } from 'redux/cartSlice';

function Quantity({ plant }) {
  const { cartItems } = useSelector((state) => state.cart);
  // const [itemCount, setItemCount] = useState(1);
  const dispatch = useDispatch();

  const cartItemQuantity = JSON.parse(JSON.stringify(cartItems)).filter(
    (item) => item.name === plant.name
  )[0].quantity;

  const checkIsItemInCart = () => {
    return cartItems.filter((item) => item.name === plant.name).length > 0;
  };

  const updateQuantityHandler = (count) => {
    if (!checkIsItemInCart()) return;
    updateQuantity(count);
  };

  const updateQuantity = (count) => {
    console.log(count);

    const plantCopy = [plant].map((item) => ({
      ...item,
      quantity: count,
    }))[0];

    dispatch(updateCartItem(plantCopy));
  };

  return (
    <S.Quantity className='quantity'>
      <Icon
        type='icon-minus-circle-fill'
        onClick={() =>
          updateQuantityHandler(plant.quantity < 2 ? 1 : plant.quantity - 1)
        }
      />
      <h3>{cartItemQuantity || '1'}</h3>
      <Icon
        type='icon-plus-circle-fill'
        onClick={() => updateQuantityHandler(plant.quantity + 1)}
      />
    </S.Quantity>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Quantity = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  h3 {
    font-weight: 500;
    width: 40px;
    margin: 0 10px;
    text-align: center;
  }

  .anticon {
    color: ${({ theme }) => theme.colors.green};
    font-size: 1.7rem;
    cursor: pointer;
    transition: all ease 0.3s;
  }
`;

export default Quantity;
