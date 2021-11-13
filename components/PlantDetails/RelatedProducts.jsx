import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PlantItem from '@components/PlantItem';

function RelatedProducts({ plant }) {
  const { initialPlants } = useSelector((state) => state.filters);
  const relatedPlants = initialPlants.filter(
    (p) => p.habit === (plant?.habit || initialPlants[0].habit)
  );

  return (
    <S.Related>
      <h3>You may be interested in</h3>
      <S.Plants>
        {relatedPlants.map((plant) => (
          <PlantItem plant={plant} key={plant.name} />
        ))}
      </S.Plants>
    </S.Related>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Related = styled.div`
  margin: 7rem 0;

  h3 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.green};
  }
`;

S.Plants = styled.div`
  display: flex;
  align-items: center;

  .plant-item {
    margin: 0;

    &:not(:nth-of-type(1)) {
      margin-left: 0.5rem;
    }
  }
`;

export default RelatedProducts;
