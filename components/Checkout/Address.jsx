import styled from 'styled-components';

function Address() {
  const placeOrderHandler = (e) => {
    e.preventDefault();
  };

  return (
    <S.Address>
      <h3>Billing Address</h3>
      <S.Form>
        <form onSubmit={(e) => placeOrderHandler(e)}>
          <S.Field>
            <label htmlFor='firstName'>
              First Name <span>*</span>
            </label>
            <input type='text' id='firstName' required />
          </S.Field>
          <S.Field>
            <label htmlFor='lastName'>
              Last Name <span>*</span>
            </label>
            <input type='text' id='lastName' required />
          </S.Field>
          <S.Field>
            <label htmlFor='Country'>
              Country / Region <span>*</span>
            </label>
            <input type='text' id='Country' required />
          </S.Field>
          <S.Field>
            <label htmlFor='City'>
              City / Town <span>*</span>
            </label>
            <input type='text' id='City' required />
          </S.Field>
          <S.Field>
            <label htmlFor='address'>
              Street Address <span>*</span>
            </label>
            <input
              type='text'
              id='address'
              placeholder='Street name and house number'
              required
            />
          </S.Field>
          <S.Field>
            <label htmlFor='appartement'>Appartement</label>
            <input
              type='text'
              id='appartement'
              placeholder='Appartement, suite, unit, etc. (optional)'
            />
          </S.Field>
          <S.Field>
            <label htmlFor='email'>
              Email Address <span>*</span>
            </label>
            <input type='email' id='email' required />
          </S.Field>
          <S.Field>
            <label htmlFor='phone'>
              Phone Number <span>*</span>
            </label>
            <input type='tel' id='phone' required />
          </S.Field>
          <S.Field className='note'>
            <label htmlFor='note'>Order Notes (optional)</label>
            <textarea id='note' cols='30' rows='5'></textarea>
          </S.Field>
          <S.Field>
            <button>Place Order</button>
          </S.Field>
        </form>
      </S.Form>
    </S.Address>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Address = styled.div`
  width: 68%;

  h3 {
    margin-bottom: 1rem;
  }
`;

S.Field = styled.div`
  width: 35%;
  margin: 0 1.5rem 1.5rem 0;
  flex: 1 1 auto;

  &.note {
    width: 100%;
  }

  textarea,
  input {
    margin-top: 0.5rem;
    display: block;
    resize: none;
    outline: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.6rem 1rem;
    background-color: transparent;
    border-radius: 0.5rem;
    font-size: 14px;
    width: 100%;
  }

  span {
    color: red;
  }
`;

S.Form = styled.div`
  form {
    display: flex;
    flex-wrap: wrap;

    button {
      outline: 0;
      max-width: 300px;
      border: 0;
      padding: 0.3rem 0.7rem;
      background-color: ${({ theme }) => theme.colors.green};
      margin-right: 0.5rem;
      cursor: pointer;
      color: #fff;
      font-weight: 600;
      border-radius: 0.5rem;
      font-size: 15px;
      transition: all ease 0.3s;
      margin-top: 1rem;
      width: 60%;

      @media screen and (min-width: 768px) {
        font-size: 16px;
        padding: 0.5rem 1.7rem;
      }
    }
  }
`;

export default Address;
