import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrderDetails, updateOrderCompleted } from 'redux/orderSlice';
import styled from 'styled-components';

function Address() {
  const dispatch = useDispatch();
  const { orderDetails } = useSelector((state) => state.order);
  console.log(orderDetails);

  const placeOrderHandler = (e) => {
    e.preventDefault();

    const form = e.target;

    const order = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      country: form.country.value,
      city: form.city.value,
      street: form.street.value,
      appartement: form.appartement.value,
      email: form.email.value,
      phone: form.phone.value,
      note: form.note.value,
    };

    dispatch(updateOrderDetails(order));
    Router.push('/ordercompleted');
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
            <input type='text' id='firstName' name='firstName' required />
          </S.Field>
          <S.Field>
            <label htmlFor='lastName'>
              Last Name <span>*</span>
            </label>
            <input type='text' id='lastName' name='lastName' required />
          </S.Field>
          <S.Field>
            <label htmlFor='Country'>
              Country <span>*</span>
            </label>
            <input type='text' id='Country' name='country' required />
          </S.Field>
          <S.Field>
            <label htmlFor='City'>
              City / Town <span>*</span>
            </label>
            <input type='text' id='City' name='city' required />
          </S.Field>
          <S.Field>
            <label htmlFor='street'>
              Street Address <span>*</span>
            </label>
            <input
              type='text'
              id='street'
              placeholder='Street name and house number'
              name='street'
              required
            />
          </S.Field>
          <S.Field>
            <label htmlFor='appartement'>Appartement</label>
            <input
              type='text'
              id='appartement'
              name='appartement'
              placeholder='Appartement, suite, unit, etc. (optional)'
            />
          </S.Field>
          <S.Field>
            <label htmlFor='email'>
              Email Address <span>*</span>
            </label>
            <input type='email' id='email' name='email' required />
          </S.Field>
          <S.Field>
            <label htmlFor='phone'>
              Phone Number <span>*</span>
            </label>
            <input type='tel' id='phone' name='phone' required />
          </S.Field>
          <S.Field className='note'>
            <label htmlFor='note'>Order Notes (optional)</label>
            <textarea id='note' cols='30' rows='5' name='note'></textarea>
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
  width: 100%;

  h3 {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 992px) {
    width: 58%;
  }

  @media screen and (min-width: 1200px) {
    width: 68%;
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

  label {
    font-size: 14px;

    @media screen and (min-width: 992px) {
      font-size: 16px;
    }
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
