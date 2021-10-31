import Icon from '@components/Icon';
import styled from 'styled-components';
import Sort from './Sort';
import Tabs from './Tabs';

function FiltersTop() {
  return (
    <S.FiltersTop>
      <Tabs />
      <Sort />
      <S.Icons>
        <Icon type='icon-filter' />
        <Icon type='icon-sort' />
      </S.Icons>
    </S.FiltersTop>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.FiltersTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (min-width: 850px) {
    padding-left: 2rem;
  }

  h4 {
    font-weight: 500;
  }

  .anticon {
    color: #3e3e3e;
    margin-left: 0.5rem;
    font-size: 24px;
  }
`;

S.Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  @media screen and (min-width: 850px) {
    display: none;
  }

  .anticon {
    color: #3e3e3e;
    cursor: pointer;
  }
`;

export default FiltersTop;
