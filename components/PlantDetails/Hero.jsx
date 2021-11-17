import Icon from '@components/UI/Icon';
import styled from 'styled-components';
import { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItem } from 'redux/cartSlice';
import Router from 'next/router';

function Hero({ plant }) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [size, setSize] = useState('S');
  const [image, setImage] = useState(plant.image);
  const [itemCount, setItemCount] = useState(1);

  const addToCartHandler = () => {
    Router.push('/cart');

    const currentPlantInCard = cartItems.find(
      (item) => item.name === plant.name
    );

    if (currentPlantInCard) {
      const plantCopy = JSON.parse(JSON.stringify(currentPlantInCard));
      plantCopy.quantity = itemCount || 1;
      plantCopy.size = size || 'S';

      return dispatch(updateCartItem(plantCopy));
    }

    const plantInfo = {
      name: plant.name,
      price: plant.price,
      image: plant.image,
      quantity: itemCount || 1,
      size: size || 'S',
    };

    return dispatch(addToCart(plantInfo));
  };

  return (
    <S.Hero>
      <S.Images>
        <S.SmallContainer>
          {plant.allImages.map((img) => (
            <S.Small onClick={() => setImage(img)} key={img}>
              <Image src={img} layout='fill' />
            </S.Small>
          ))}
        </S.SmallContainer>
        <S.Large>
          <Image src={image} layout='fill' />
        </S.Large>
      </S.Images>
      <S.Details>
        <h2>{plant.name}</h2>
        <S.Price>
          <h3 className='price'>$ {plant.price}</h3>
          {plant.oldprice && <h3 className='oldprice'>$ {plant.oldprice}</h3>}
        </S.Price>
        <h4>Short description:</h4>
        <p>
          {plant.description.slice(
            0,
            plant.description.slice(200, 600).indexOf('.') + 200
          )}
          .
        </p>
        <h4>Size:</h4>
        <S.SizesList>
          <S.Size onClick={() => setSize('S')} selectedSize={size} value='S'>
            S
          </S.Size>
          <S.Size onClick={() => setSize('M')} selectedSize={size} value='M'>
            M
          </S.Size>
          <S.Size onClick={() => setSize('L')} selectedSize={size} value='L'>
            L
          </S.Size>
          <S.Size onClick={() => setSize('XL')} selectedSize={size} value='XL'>
            XL
          </S.Size>
        </S.SizesList>
        <S.Buy>
          <S.Quantity>
            <Icon
              type='icon-minus-circle-fill'
              onClick={() =>
                setItemCount((count) => (count === 1 ? 1 : count - 1))
              }
            />
            <h3>{itemCount}</h3>
            <Icon
              type='icon-plus-circle-fill'
              onClick={() => setItemCount((prevItemCount) => prevItemCount + 1)}
            />
          </S.Quantity>
          <button className='buynow'>BUY NOW</button>
          <button className='addtocart' onClick={addToCartHandler}>
            ADD TO CART
          </button>
          <button>
            <Icon className='heart' type='icon-tubiaozhizuomoban-' />
          </button>
        </S.Buy>
        <h4 className='habit'>
          <span>Habit:</span> {plant.habit}
        </h4>
      </S.Details>
    </S.Hero>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Hero = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

S.Images = styled.div`
  display: flex;
  height: 30vh;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    width: 50%;
    height: 400px;
  }
`;

S.SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
`;

S.Small = styled.div`
  position: relative;
  width: 100%;
  height: 33%;
  cursor: pointer;
`;

S.Large = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  margin: auto;
`;

S.Details = styled.div`
  width: 100%;
  margin-top: 3rem;

  @media screen and (min-width: 992px) {
    width: 50%;
  }

  h4 {
    margin: 1.5rem 0 1rem 0;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  .habit {
    font-weight: 400;

    span {
      color: #aaa;
    }
  }
`;

S.Price = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1rem;

  .price {
    color: ${({ theme }) => theme.colors.green};
  }

  .oldprice {
    margin-left: 1.5rem;
    text-decoration: line-through;
    color: #aaa;
  }
`;

S.SizesList = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

S.Size = styled.h4`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  font-weight: 500;
  margin: 0 0.8rem 0 0 !important;
  transition: all ease 0.3s;
  cursor: pointer;
  border: ${({ selectedSize, value, theme }) =>
    selectedSize === value
      ? `2px solid ${theme.colors.green}`
      : `2px solid ${theme.colors.border}`};

  color: ${({ selectedSize, value, theme }) =>
    selectedSize === value && theme.colors.green};

  @media screen and (min-width: 768px) {
    width: 2.3rem;
    height: 2.3rem;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.green};
  }
`;

S.Quantity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

S.Buy = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;

  h3 {
    font-weight: 500;
    width: 40px;
    margin: 0 10px;
    text-align: center;
  }

  .anticon {
    color: ${({ theme }) => theme.colors.green};
    font-size: 2.1rem;
    cursor: pointer;
    transition: all ease 0.3s;

    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  button {
    outline: 0;
    border: 0;
    border: 1px solid ${({ theme }) => theme.colors.green};
    padding: 0.3rem 0.7rem;
    background-color: transparent;
    margin-right: 0.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.green};
    font-weight: 600;
    border-radius: 0.5rem;
    font-size: 15px;
    transition: all ease 0.3s;
    margin-top: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      padding: 0.5rem 1.7rem;

      &:nth-of-type(3) {
        padding: 0.35rem 0.5rem 0.15rem 0.5rem !important;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      color: #fff;

      .anticon {
        color: #fff;
      }
    }

    &:nth-of-type(3) {
      padding: 0 0.4rem;
    }

    &:nth-of-type(1) {
      background-color: ${({ theme }) => theme.colors.green};
      color: #fff;
    }
  }

  .heart {
    font-size: 1.9rem;
  }
`;
export default Hero;
