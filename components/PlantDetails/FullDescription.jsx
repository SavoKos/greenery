import styled from 'styled-components';

function FullDescription({ plant }) {
  return (
    <S.Descripton>
      <h3>Product Description</h3>
      <p>{plant.description}</p>
    </S.Descripton>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Descripton = styled.div`
  margin-top: 3rem;

  h3 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.green};
  }
`;

export default FullDescription;
