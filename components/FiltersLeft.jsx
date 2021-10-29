import styled from 'styled-components';
import Image from 'next/image';

function FiltersLeft({ plants }) {
  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

  const allHabits = plants?.map((plant) => plant?.habit);
  const habit = [...new Set(plants?.map((plant) => plant?.habit))];

  const allSizes = plants?.map((plant) => plant?.size);
  const size = [...new Set(plants?.map((plant) => plant?.size))];

  return (
    <>
      <S.Filters>
        <S.FilterContainer>
          <h3 className='habit'>Habit</h3>
          {habit.map((habit, i) => (
            <S.Filter key={i}>
              <h4>{capitalize(habit)}</h4>
              <h4>
                ({allHabits.filter((habitName) => habitName === habit).length})
              </h4>
            </S.Filter>
          ))}
        </S.FilterContainer>
        <S.FilterContainer>
          <h3>Size</h3>
          {size.map((size, i) => (
            <S.Filter key={i}>
              <h4>{capitalize(size)}</h4>
              <h4>
                ({allSizes.filter((sizeName) => sizeName === size).length})
              </h4>
            </S.Filter>
          ))}
        </S.FilterContainer>
      </S.Filters>
      <S.SaleImg>
        <Image src='/sale.webp' layout='fill' />
      </S.SaleImg>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Filters = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  padding: 1rem 2rem;
`;

S.FilterContainer = styled.div`
  h3:not(.habit) {
    margin-top: 3rem;
  }
`;

S.Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 1.5rem 1rem;

  &:hover {
    h4 {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  h4 {
    transition: all ease 0.3s;
    font-weight: 500;
  }
`;

S.SaleImg = styled.div`
  position: relative;
  width: 100%;
  min-height: 580px;
`;

export default FiltersLeft;
