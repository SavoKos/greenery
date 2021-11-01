import styled from 'styled-components';
import Image from 'next/image';
import Icon from './UI/Icon';

function PlantItem({ plant }) {
  return (
    <S.PlantItem>
      <S.PlantImageContainer>
        <S.PlantImage>
          <Image src={plant.image} layout='fill' />
        </S.PlantImage>
        <S.Icons className='icons'>
          <Icon type='icon-tubiaozhizuomoban-' className='heart' />
          <Icon type='icon-cart1' className='cart' />
        </S.Icons>
      </S.PlantImageContainer>
      <S.Details>
        <h4 className='name'>{plant.name}</h4>
        <S.Price>
          <h4 className='price'>$ {plant.price}</h4>
          {plant.oldprice && <h4 className='oldprice'>$ {plant.oldprice}</h4>}
        </S.Price>
      </S.Details>
    </S.PlantItem>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PlantImageContainer = styled.div`
  background-color: #f5f5f5;
  padding: 1.5rem;
  position: relative;

  @media screen and (min-width: 992px) {
    padding: 3rem;
  }

  &:hover {
    .icons {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -10%);
    }
  }
`;

S.PlantItem = styled.div`
  margin: 1rem 0 1rem 0.5rem;
  flex: 1 1 auto;
  cursor: pointer;
  border-top: 2px solid transparent;
  transition: all ease 0.3s;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 33%;
    max-width: 350px;
  }

  @media screen and (min-width: 850px) {
    margin: 1rem 0 1rem 2rem;
    width: 30%;
  }

  &:hover {
    border-top: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

S.PlantImage = styled.div`
  position: relative;
  min-height: 250px;
`;

S.Details = styled.div`
  margin-top: 0.5rem;

  .name {
    font-weight: 500;
  }

  .price {
    color: ${({ theme }) => theme.colors.green};
  }
`;

S.Price = styled.div`
  display: flex;
  align-items: center;

  .oldprice {
    margin-left: 1.5rem;
    text-decoration: line-through;
    color: #aaa;
  }
`;

S.Icons = styled.div`
  position: absolute;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, -10%);
  transition: all ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 850px) {
    transform: translate(-50%, 100%);
    opacity: 0;
    visibility: hidden;
  }

  .anticon {
    font-size: 24px;
    color: #3e3e3e;
    transition: all ease 0.3s;
    padding: 0 1rem;

    &.heart:hover {
      color: #ff3131;
    }

    &.cart:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export default PlantItem;
