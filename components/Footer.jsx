import styled from 'styled-components';
import Image from 'next/image';
import Icon from './UI/Icon';

function Footer() {
  return (
    <S.FooterContainer>
      <S.Footer>
        <S.Logo>
          <Image
            src='/logo.webp'
            height='70'
            width='70'
            className='logo'
            alt='Greenery Logo'
          />
          <h3>GREENERY</h3>
        </S.Logo>
        <S.RightSide>
          <h3>We Accept</h3>
          <S.Payments>
            <Icon type='icon-Paypal' />
            <Icon type='icon-visa' />
            <Icon type='icon-mastercard' />
            <Icon type='icon-american_express' />
          </S.Payments>
        </S.RightSide>
      </S.Footer>
      <h4 className='copyright'>
        &copy; Greenery by{' '}
        <a href='https://savo-kos.com' target='_blank' rel='noreferrer'>
          Savo Kos
        </a>
        . All Rights Reserved.
      </h4>
    </S.FooterContainer>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.FooterContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0 5%;
  }

  .copyright {
    text-align: center;
    font-weight: 500;
    margin: 1rem 0;

    a {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

S.Footer = styled.div`
  width: 100%;
  background-color: #eef6ef;
  border-bottom: 2px solid #deeade;
  border-top: 2px solid #deeade;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  padding: 1rem 0;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

S.Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  h3 {
    color: ${({ theme }) => theme.colors.green};
  }
`;

S.RightSide = styled.div`
  h3 {
    font-size: 18px;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 22px;
    }
  }
`;

S.Payments = styled.div`
  display: flex;
  align-items: center;

  .anticon {
    font-size: 40px;
    margin-right: 0.5rem;

    @media screen and (min-width: 768px) {
      font-size: 60px;
    }
  }

  .anticon:not(:nth-of-type(1)) {
    margin-left: 1rem;
  }
`;

export default Footer;
