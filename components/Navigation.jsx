import styled from 'styled-components';
import Image from 'next/image';
import Icon from './Icon';

export default function Navigation() {
  return (
    <S.Container>
      <S.Navigation>
        <Image
          src='/logo.png'
          height='70'
          width='70'
          className='logo'
          alt='Greenery Logo'
        />
        <S.Icons>
          <Icon type='icon-search' />
          <Icon type='icon-cart1' />
          <Icon type='icon-login' className='login-icon-only' />
          <S.Login>
            <Icon type='icon-login' />
            <p>Login</p>
          </S.Login>
        </S.Icons>
      </S.Navigation>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
`;

S.Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbece2;
  background-color: #fff;

  .logo {
    cursor: pointer;
  }
`;

S.Icons = styled.div`
  display: flex;
  align-items: center;

  .anticon {
    font-size: 1.5rem;
    margin: 0 1rem;
    cursor: pointer;

    &.login-icon-only {
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;

S.Login = styled.div`
  padding: 0.5rem 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  display: none;
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
