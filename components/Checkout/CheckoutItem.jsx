import styled from 'styled-components';
import Image from 'next/image';

function CheckoutItem({ plant }) {
  return (
    <S.CheckoutItem>
      <S.Details>
        <S.Image>
          <Image src={plant.image} layout='fill' alt='Plant Image' />
        </S.Image>
        <h4 className='name'>{plant.name}</h4>
      </S.Details>
      <h4>{plant.size}</h4>
      <h4>x{plant.quantity}</h4>
      <h4 className='price'>$ {plant.price * plant.quantity + '.00'}</h4>
    </S.CheckoutItem>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.CheckoutItem = styled.div`
  background-color: #f5f5f5;
  margin-top: 0.7rem;
  padding: 0.3rem 1rem;
  display: grid;
  grid-template-columns: 5fr repeat(2, 1fr) 3fr;
  grid-column-gap: 20px;
  grid-template-rows: 1fr;
  align-items: center;

  &:nth-last-of-type(4) {
    margin-bottom: 2rem;
  }

  h3 {
    margin: 0;
  }

  .anticon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  h4 {
    justify-self: center;

    &.price {
      color: ${({ theme }) => theme.colors.green};
      font-weight: 600;
      justify-self: flex-end;
    }
  }
`;

S.Details = styled.div`
  display: flex;
  align-items: center;

  .name {
    margin-left: 0.5rem;
  }
`;

S.Image = styled.div`
  position: relative;
  min-height: 50px;
  min-width: 50px;
`;

export default CheckoutItem;
