import Icon from '@components/UI/Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updatePlants, updateSort } from 'redux/filtersSlice';
import styled from 'styled-components';

function Sort({ setFilterActive }) {
  const [dropdownActive, setDropdownActive] = useState(false);
  const { sort } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [sortActive, setSortActive] = useState(false);

  const sortValueStyle = (value) => {
    return {
      backgroundColor: value === sort && '#f5f5f5',
      color: value === sort && '#3e3e3e',
    };
  };

  const updateValueHandler = (value) => {
    dispatch(updateSort(value));
    dispatch(updatePlants());
    setSortActive(false);
    setDropdownActive(false);
  };

  return (
    <>
      <S.Sort>
        <h4 onClick={() => setDropdownActive((prevState) => !prevState)}>
          Sort plants
        </h4>
        <Icon
          type='icon-iov-arrow-down'
          onClick={() => setDropdownActive((prevState) => !prevState)}
          className='desktop-arrow'
        />
        <S.Dropdown active={dropdownActive || sortActive}>
          <S.SortValue
            style={sortValueStyle('default')}
            onClick={() => updateValueHandler('default')}
          >
            Default
          </S.SortValue>
          <S.SortValue
            style={sortValueStyle('alphabetical')}
            onClick={() => updateValueHandler('alphabetical')}
          >
            Alphabetical
          </S.SortValue>
          <S.SortValue
            style={sortValueStyle('priceasc')}
            onClick={() => updateValueHandler('priceasc')}
          >
            Price <Icon type='icon-arrowup' />
          </S.SortValue>
          <S.SortValue
            style={sortValueStyle('pricedesc')}
            onClick={() => updateValueHandler('pricedesc')}
          >
            Price <Icon type='icon-arrowdown' />
          </S.SortValue>
        </S.Dropdown>
      </S.Sort>
      <S.Icons>
        <Icon
          type='icon-filter'
          onClick={() => setFilterActive((prevState) => !prevState)}
        />
        <Icon
          type='icon-sort'
          onClick={() => setSortActive((prevState) => !prevState)}
        />
      </S.Icons>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Sort = styled.div`
  align-items: center;
  cursor: pointer;
  position: relative;
  min-width: 9rem;
  justify-content: flex-end;
  display: flex;

  h4,
  .desktop-arrow {
    display: none;

    @media screen and (min-width: 850px) {
      display: block;
    }
  }

  span {
    font-weight: 600;
  }
`;

S.Dropdown = styled.div`
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: all ease 0.3s;
  width: 100%;
  background-color: #3e3e3e;
  position: absolute;
  border-radius: 0.3rem;
  top: 2rem;
  z-index: 5;
  color: #fff;
  overflow: hidden;
`;

S.SortValue = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background-color: #f5f5f5;
    color: #3e3e3e;

    .anticon {
      color: #3e3e3e;
    }
  }

  .anticon {
    font-size: 20px;
  }
`;

S.Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;

  @media screen and (min-width: 850px) {
    display: none;
  }

  .anticon {
    color: #3e3e3e;
    cursor: pointer;
    color: #3e3e3e;
    margin-left: 0.5rem;
    font-size: 24px;
  }
`;

export default Sort;
