import { useSelector, useDispatch } from 'react-redux';
import { next, previous, goToSpecificPage } from 'redux/pageSlice';
import styled from 'styled-components';
import Icon from './Icon';

function Pagination({ plants, pagesCount, executeScroll }) {
  const { page } = useSelector((state) => state.page);
  console.log(page);
  const dispatch = useDispatch();

  const goToSpecificPageHandler = (page) => {
    dispatch(goToSpecificPage(page));
    executeScroll();
  };

  const goToPreviousPage = () => {
    dispatch(previous());
    executeScroll();
  };

  const goToNextPage = () => {
    dispatch(next());
    executeScroll();
  };

  return (
    <S.Pagination>
      {page > 1 && (
        <S.Page onClick={executeScroll}>
          <Icon type='icon--arrowleft' onClick={goToPreviousPage} />
        </S.Page>
      )}
      {plants?.slice(0, pagesCount)?.map((_, i) => (
        <S.Page
          key={i}
          onClick={() => goToSpecificPageHandler(i + 1)}
          style={{ backgroundColor: i + 1 === page && '#50ba64' }}
        >
          <h3 style={{ color: i + 1 === page && '#fff' }}>{i + 1}</h3>
        </S.Page>
      ))}
      {page < pagesCount && (
        <S.Page>
          <Icon type='icon-iov-arrow-right' onClick={goToNextPage} />
        </S.Page>
      )}
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
  width: 2rem;
  height: 2rem;

  @media screen and (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }

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
