import styled from 'styled-components';
import Image from 'next/image';
import Icon from './Icon';

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
        <h4 className='price'>$ {plant.price}</h4>
      </S.Details>
    </S.PlantItem>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.PlantImageContainer = styled.div`
  background-color: #f5f5f5;
  padding: 3rem;
  position: relative;

  &:hover {
    .icons {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -10%);
    }
  }
`;

S.PlantItem = styled.div`
  width: 30%;
  max-width: 50%;
  margin: 1rem 0 1rem 2rem;
  flex: 1 1 auto;
  cursor: pointer;
  border-top: 2px solid transparent;
  transition: all ease 0.3s;

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

S.Icons = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  left: 50%;
  bottom: 1%;
  transform: translate(-50%, 100%);
  transition: all ease 0.3s;

  .anticon {
    font-size: 30px;
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
