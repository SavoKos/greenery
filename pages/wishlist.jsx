import Hero from '@components/Wishlist/Hero';
import Navigation from '@components/Navigation';
import styled from 'styled-components';
import Footer from '@components/Footer';

function Wishlist() {
  return (
    <S.Container>
      <Navigation />
      <Hero />
      <Footer />
    </S.Container>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
`;

export default Wishlist;
