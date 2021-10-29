import styled from 'styled-components';
import Image from 'next/image';

function PlantItem({ plant }) {
  return (
    <S.PlantItem>
      <S.PlantImageContainer>
        <S.PlantImage>
          <Image src={plant.image} layout='fill' />
        </S.PlantImage>
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
  background-color: #fbfbfb;
  padding: 3rem;
`;

S.PlantItem = styled.div`
  width: 30%;
  max-width: 50%;
  margin: 1rem 0 1rem 2rem;
  flex: 1 1 auto;
  cursor: pointer;
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

export default PlantItem;
