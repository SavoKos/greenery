import styled from 'styled-components';
import Icon from './Icon';

function FiltersTop() {
  return (
    <S.FiltersTop>
      <S.Tabs>
        <h4>All Plants</h4>
        <h4>New Arrivals</h4>
        <h4>Sale</h4>
      </S.Tabs>
      <S.Sort>
        <h4>
          Sort By: <span>Default</span>
        </h4>
        <Icon type='icon-iov-arrow-down' />
      </S.Sort>
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
    padding-left: 0.5rem;
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
S.Sort = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 850px) {
    display: flex;
  }

  span {
    font-weight: 600;
  }
`;

S.AditionalFilters = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
