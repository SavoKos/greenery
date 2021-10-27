import styled from 'styled-components';
import Image from 'next/image';
import Icon from './Icon';

export default function Hero() {
  return (
    <S.Container>
      <S.Hero>
        <S.TextContent>
          <h4>WELCOME TO GREENSHOP</h4>
          <h1>
            LET'S MAKE A BETTER <span>PLANET</span>
          </h1>
          <p className='description'>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <S.ShopNow>
            <Icon type='icon-shopping' />
            <p>Shop Now</p>
          </S.ShopNow>
        </S.TextContent>

        <Image src='/plant.png' height='350' width='300' />
      </S.Hero>
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
`;

S.Hero = styled.div`
  background-color: #f5f5f5;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 3rem;
    flex-direction: row;
  }
`;

S.TextContent = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 50%;

    h1 {
      font-size: 64px;
    }

    .description {
      font-size: 18px;
    }
  }

  align-self: flex-start;

  .description {
    margin-bottom: 3rem;
  }

  h4 {
    letter-spacing: 2px;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      letter-spacing: 3.3px;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.green};
  }
`;

S.ShopNow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  color: #fff;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  p,
  .anticon {
    color: #fff;
  }

  .anticon {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

S.Images = styled.div`
  display: flex;

  .small-plant {
    align-self: flex-end;
  }
`;
