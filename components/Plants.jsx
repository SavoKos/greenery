import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FiltersLeft from './Filters/FiltersLeft';
import FiltersTop from './Filters/FiltersTop';
import Pagination from './Pagination';
import PlantItem from './PlantItem';

function Plants({ scrollRef }) {
  const { page } = useSelector((state) => state.page);
  const { plants } = useSelector((state) => state.filters);

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
    <S.Container>
      <S.LeftSide>
        <FiltersLeft />
      </S.LeftSide>
      <S.RightSide ref={scrollRef}>
        <FiltersTop />
        <S.PlantsList>{renderPlants()}</S.PlantsList>
        <Pagination pagesCount={pagesCount} executeScroll={executeScroll} />
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
  justify-content: center;

  .error {
    margin-top: 5rem;
  }
`;

export default Plants;
