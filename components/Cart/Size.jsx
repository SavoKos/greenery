import { useDispatch } from 'react-redux';
import { updateCartItem } from 'redux/cartSlice';
import styled from 'styled-components';

function Size({ plant }) {
  const dispatch = useDispatch();
  const updateSizeHandler = (size) => {
    const plantCopy = Object.assign({}, plant);
    plantCopy.size = size;

    dispatch(updateCartItem(plantCopy));
  };

  return (
    <S.Size>
      <select
        onChange={(e) => updateSizeHandler(e.target.value)}
        defaultValue={plant.size || 'S'}
      >
        <option value='S'>S</option>
        <option value='M'>M</option>
        <option value='L'>L</option>
        <option value='XL'>XL</option>
      </select>
    </S.Size>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Size = styled.div`
  width: 10%;

  select {
    background: #fff;
    outline: 0;
    border: 1px solid #dbece2;
    border-radius: 0.3rem;
    padding: 0.1rem 0.5rem;
  }
`;

export default Size;
