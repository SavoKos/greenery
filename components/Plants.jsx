import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FiltersLeft from './FiltersLeft';
import FiltersTop from './FiltersTop';
import Pagination from './Pagination';
import PlantItem from './PlantItem';

function Plants() {
  const [plants, setPlants] = useState(null);
  const { page } = useSelector((state) => state.page);
  const pagesCount = Math.floor(plants?.length / 9);
  const scrollRef = useRef(null);

  useEffect(
    () => axios.get('/plants.json').then((res) => setPlants(res.data)),
    []
  );

  console.log(scrollRef.current);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <S.Container>
      <S.LeftSide>
        <FiltersLeft plants={plants} />
      </S.LeftSide>
      <S.RightSide ref={scrollRef}>
        <FiltersTop />
        <S.PlantsList>
          {plants?.slice((page - 1) * 9, page * 9)?.map((plant) => (
            <PlantItem plant={plant} key={plant.name} />
          ))}
        </S.PlantsList>
        <Pagination
          plants={plants}
          pagesCount={pagesCount}
          executeScroll={executeScroll}
        />
      </S.RightSide>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
  margin-top: 10rem;
  display: flex;

  @media screen and (min-width: 850px) {
    margin-top: 3rem;
  }
`;

S.LeftSide = styled.div`
  display: none;
  width: 50%;

  @media screen and (min-width: 850px) {
    display: block;
  }

  @media screen and (min-width: 1250px) {
    width: 40%;
  }

  @media screen and (min-width: 1650px) {
    width: 30%;
  }
`;
S.RightSide = styled.div`
  width: 100%;

  @media screen and (min-width: 850px) {
    margin-left: 1rem;
  }
`;

S.PlantsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Plants;
