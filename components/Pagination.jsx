import styled from 'styled-components';
import Icon from './Icon';

function Pagination({ plants }) {
  const pages = Math.floor(plants?.length / 9);
  for (let i = 0; i < pages; i++) {}
  console.log();
  return (
    <S.Pagination>
      <S.Page>
        <Icon type='icon--arrowleft' />
      </S.Page>
      {plants?.slice(0, pages)?.map((page, i) => (
        <S.Page>
          <h3>{i + 1}</h3>
        </S.Page>
      ))}
      <S.Page>
        <Icon type='icon-iov-arrow-right' />
      </S.Page>
    </S.Pagination>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
S.Page = styled.div`
  padding: 0.4rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  transition: all ease 0.3s;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;

  .anticon {
    font-size: 20px;
    color: #3e3e3e;
  }

  h3 {
    font-weight: 500;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};

    h3,
    .anticon {
      color: #fff;
    }
  }
`;

export default Pagination;
