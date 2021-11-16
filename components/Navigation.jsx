import styled from 'styled-components';
import Image from 'next/image';
import Icon from './UI/Icon';
import Router from 'next/router';
import { setLoginActive } from 'redux/authSlice';
import { useDispatch } from 'react-redux';

import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import Spinner from './UI/Spinner';
import { useSelector } from 'react-redux';

export default function Navigation() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const { cartItems } = useSelector((state) => state.cart);
  const itemsCount = cartItems.length;

  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => setUser(user));

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const wishlistHandler = () => {
    if (!auth.currentUser) return dispatch(setLoginActive(true));
  };

  const authIcon = () => {
    if (user)
      return (
        <S.Auth onClick={logout} className='logout'>
          <Icon type='icon-logout' />
          <p>Logout</p>
        </S.Auth>
      );

    return (
      <S.Auth onClick={() => dispatch(setLoginActive(true))}>
        <Icon type='icon-login' />
        <p>Login</p>
      </S.Auth>
    );
  };

  if (loading) return <Spinner />;

  return (
    <S.Container>
      <S.Navigation>
        <S.Logo onClick={() => Router.push('/')}>
          <Image
            src='/logo.webp'
            height='70'
            width='70'
            className='logo'
            alt='Greenery Logo'
          />
          <h3>GREENERY</h3>
        </S.Logo>

        <S.Icons>
          <Icon type='icon-tubiaozhizuomoban-' onClick={wishlistHandler} />
          <Icon
            type='icon-cart1'
            className='cart'
            dataItems={itemsCount}
            itemsCount={0}
            onClick={() => Router.push('/cart')}
          />
          <Icon type='icon-login' className='login-icon-only' />
          {authIcon()}
        </S.Icons>
      </S.Navigation>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 40;
`;

S.Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: #fff;
`;

S.Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.colors.green};
  }
`;

S.Icons = styled.div`
  display: flex;
  align-items: center;

  .anticon {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;

    &.login-icon-only {
      @media screen and (min-width: 768px) {
        display: none;
      }
    }

    &.cart {
      position: relative;

      &::before {
        content: attr(data-items);
        font-size: 12px;
        position: absolute;
        right: -0.45rem;
        top: -0.45rem;
        color: #fff;
        background-color: ${({ theme }) => theme.colors.green};
        border-radius: 50%;
        min-width: 13px;
        min-height: 13px;
        padding: 0.15rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

S.Auth = styled.div`
  padding: 0.5rem 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  display: none;

  &.logout {
    background-color: #e15b5b;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  .anticon {
    margin: 0;
  }

  p {
    margin-left: 0.5rem;
    color: #fff;
  }
`;
