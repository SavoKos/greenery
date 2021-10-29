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
    </S.FiltersTop>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.FiltersTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 2rem;
`;

S.Tabs = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    margin-right: 1.5rem;
    font-weight: 500;
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
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-weight: 600;
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

export default FiltersTop;
