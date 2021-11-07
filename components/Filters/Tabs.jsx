import { useDispatch, useSelector } from 'react-redux';
import { updatePlants, updateTabsFilter } from 'redux/filtersSlice';
import { goToSpecificPage } from 'redux/pageSlice';
import styled from 'styled-components';

function Tabs({ executeScroll }) {
  const { tabsFilter } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const styleH4 = (filterName) => {
    return {
      color: tabsFilter === filterName && '#50ba64',
      borderBottom: tabsFilter === filterName && '2px solid #50ba64',
    };
  };

  const updateTabsHandler = (value) => {
    dispatch(goToSpecificPage(1));
    dispatch(updateTabsFilter(value));
    dispatch(updatePlants());
    executeScroll();
  };

  return (
    <S.Tabs>
      <h4 style={styleH4('all')} onClick={() => updateTabsHandler('all')}>
        All Plants
      </h4>
      <h4 style={styleH4('new')} onClick={() => updateTabsHandler('new')}>
        New Arrivals
      </h4>
      <h4 style={styleH4('sale')} onClick={() => updateTabsHandler('sale')}>
        Sale
      </h4>
    </S.Tabs>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 850px) {
    width: fit-content;
    margin-bottom: 0rem;

    h4 {
      margin-right: 1.5rem;
    }
  }

  h4 {
    border-bottom: 2px solid transparent;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
      border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    }
  }
`;

export default Tabs;
