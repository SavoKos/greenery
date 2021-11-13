import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FiltersLeft from './Filters/FiltersLeft';
import Sort from './Filters/Sort';
import Tabs from './Filters/Tabs';
import Pagination from './Pagination';
import PlantItem from './PlantItem';

function Plants({ scrollRef }) {
  const { page } = useSelector((state) => state.page);
  const { plants } = useSelector((state) => state.filters);
  const [filterActive, setFilterActive] = useState(false);

  const pagesCount = Math.floor(plants?.length / 9);

  const executeScroll = () =>
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });

  const renderPlants = () => {
    if (typeof plants === 'string') return <h2 className='error'>{plants}</h2>;
    return plants
      ?.slice((page - 1) * 12, page * 12)
      ?.map((plant) => <PlantItem plant={plant} key={plant.name} />);
  };

  return (
    <S.Plants>
      <S.FiltersSidebar filterActive={filterActive}>
        <FiltersLeft
          setFilterActive={setFilterActive}
          executeScroll={executeScroll}
        />
      </S.FiltersSidebar>
      <S.LeftSide>
        <FiltersLeft executeScroll={executeScroll} />
      </S.LeftSide>
      <S.RightSide ref={scrollRef}>
        <S.FiltersTop>
          <Tabs executeScroll={executeScroll} />
          <Sort setFilterActive={setFilterActive} />
        </S.FiltersTop>
        <S.PlantsList>{renderPlants()}</S.PlantsList>
        <Pagination pagesCount={pagesCount} executeScroll={executeScroll} />
      </S.RightSide>
    </S.Plants>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Plants = styled.div`
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

S.FiltersTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  position: relative;

  @media screen and (min-width: 850px) {
    padding-left: 2rem;
  }

  h4 {
    font-weight: 500;
  }
`;

S.PlantsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .error {
    margin-top: 5rem;
  }
`;

S.FiltersSidebar = styled.div`
  position: relative;
  visibility: ${({ filterActive }) => (filterActive ? 'visible' : 'hidden')};
  opacity: ${({ filterActive }) => (filterActive ? '1' : '0')};
  transition: all ease 0.3s;
  z-index: 6;

  @media screen and (min-width: 850px) {
    display: none;
  }

  .filter {
    z-index: 5;
    width: 50%;
    display: block !important;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }
`;

export default Plants;
