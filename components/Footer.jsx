import styled from 'styled-components';
import Image from 'next/image';
import Icon from './Icon';

function Footer() {
  return (
    <S.Container>
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
      <h4 className='copyright'>&copy; Greenery. All Rights Reserved.</h4>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Container = styled.div`
  padding: 0 5%;

  .copyright {
    text-align: center;
    font-weight: 500;
    margin: 1rem 0;
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
`;

S.Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.colors.green};
  }
`;

S.RightSide = styled.div``;

S.Payments = styled.div`
  display: flex;
  align-items: center;

  .anticon {
    font-size: 60px;
    margin-right: 1rem;
  }

  .anticon:not(:nth-of-type(1)) {
    margin-left: 1rem;
  }
`;

export default Footer;
