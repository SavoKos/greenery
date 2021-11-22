import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import Icon from '@components/UI/Icon';
import Spinner from '@components/UI/Spinner';
import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCart } from 'redux/cartSlice';
import styled from 'styled-components';

function ordercompleted() {
  const dispatch = useDispatch();
  const { orderDetails } = useSelector((state) => state.order);

  useEffect(() => {
    if (!orderDetails) return Router.push('/');
    dispatch(resetCart());
  }, []);

  if (!orderDetails) return <Spinner />;

  return (
    <>
      <Navigation />
      <S.Container>
        <Icon type='icon-success' />
        <h2>Your order has been processed!</h2>
      </S.Container>
      <Footer />
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
  min-height: 50vh;

  .anticon {
    margin: 3rem auto 0 auto;
    color: ${({ theme }) => theme.colors.green};
    display: block;
    font-size: 7rem;
  }

  h2 {
    text-align: center;
    margin-top: 2rem;
  }
`;

export default ordercompleted;
