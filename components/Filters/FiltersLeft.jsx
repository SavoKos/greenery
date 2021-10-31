import styled from 'styled-components';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { updateHabit, updatePlants, updateSize } from 'redux/filtersSlice';

function FiltersLeft() {
  const { size, habit, initialPlants } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const allHabits = initialPlants?.map((plant) => plant?.habit);
  const habitList = [...new Set(initialPlants?.map((plant) => plant?.habit))];
  const habitHandler = (value) => {
    if (!habit.includes(value)) {
      dispatch(updateHabit([...habit, value]));
      return dispatch(updatePlants());
    }

    const updatedHabit = [...habit].filter((habit) => habit !== value);
    dispatch(updateHabit(updatedHabit));
    dispatch(updatePlants());
  };

  const allSizes = initialPlants?.map((plant) => plant?.size);
  const sizeList = [...new Set(initialPlants?.map((plant) => plant?.size))];
  const sizeHandler = (value) => {
    if (!size.includes(value)) {
      dispatch(updateSize([...size, value]));
      return dispatch(updatePlants());
    }

    const updatedSize = [...size].filter((size) => size !== value);
    dispatch(updateSize(updatedSize));
    dispatch(updatePlants());
  };

  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
  const filterStyle = (arr, el) => {
    return {
      color: arr.includes(el) && '#50ba64',
    };
  };

  return (
    <>
      <S.Filters>
        <S.FilterContainer>
          <h3 className='habit'>Habit</h3>
          {habitList.map((value, i) => (
            <S.Filter key={i} onClick={() => habitHandler(value)}>
              <h4 style={filterStyle(habit, value)}>{capitalize(value)}</h4>
              <h4 style={filterStyle(habit, value)}>
                ({allHabits.filter((habitName) => habitName === value).length})
              </h4>
            </S.Filter>
          ))}
        </S.FilterContainer>
        <S.FilterContainer>
          <h3>Size</h3>
          {sizeList.map((value, i) => (
            <S.Filter key={i} onClick={() => sizeHandler(value)}>
              <h4 style={filterStyle(size, value)}>{capitalize(value)}</h4>
              <h4 style={filterStyle(size, value)}>
                ({allSizes.filter((sizeName) => sizeName === value).length})
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
  background-color: #f5f5f5;
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
