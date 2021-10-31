import Icon from '@components/Icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateSort } from 'redux/filtersSlice';
import styled from 'styled-components';

function Sort() {
  const [dropdownActive, setDropdownActive] = useState(false);
  const { sort } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const sortValueStyle = (value) => {
    return {
      backgroundColor: value === sort && '#f5f5f5',
      color: value === sort && '#3e3e3e',
    };
  };

  const updateValueHandler = (value) => {
    dispatch(updateSort(value));
    setDropdownActive(false);
  };

  return (
    <S.Sort>
      <h4 onClick={() => setDropdownActive((prevState) => !prevState)}>
        Sort plants
      </h4>
      <Icon
        type='icon-iov-arrow-down'
        onClick={() => setDropdownActive((prevState) => !prevState)}
      />
      <S.Dropdown active={dropdownActive}>
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
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Sort = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;
  position: relative;
  min-width: 9rem;
  justify-content: flex-end;

  @media screen and (min-width: 850px) {
    display: flex;
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
    color: #f5f5f5;
    font-size: 20px;
  }
`;

export default Sort;
