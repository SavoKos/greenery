import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FiltersLeft from './FiltersLeft';
import FiltersTop from './FiltersTop';
import Pagination from './Pagination';
import PlantItem from './PlantItem';

function Plants() {
  const [plants, setPlants] = useState(null);

  useEffect(
    () => axios.get('/plants.json').then((res) => setPlants(res.data)),
    []
  );

  return (
    <S.Container>
      <S.LeftSide>
        <FiltersLeft plants={plants} />
      </S.LeftSide>
      <S.RightSide>
        <FiltersTop />
        <S.PlantsList>
          {plants?.slice(0, 9)?.map((plant) => (
            <PlantItem plant={plant} key={plant.name} />
          ))}
        </S.PlantsList>
        <Pagination plants={plants} />
      </S.RightSide>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
  margin-top: 3rem;
  display: flex;
`;

S.Hero = styled.div`
  background-color: #f5f5f5;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
    flex-direction: row;
  }
`;

S.LeftSide = styled.div`
  width: 50%;

  @media screen and (min-width: 1250px) {
    width: 40%;
  }

  @media screen and (min-width: 1650px) {
    width: 30%;
  }
`;
S.RightSide = styled.div`
  width: 100%;
  margin-left: 1rem;
`;

S.PlantsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Plants;
