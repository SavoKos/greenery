import { useSelector } from 'react-redux';
import Navigation from '@components/Navigation';
import styled from 'styled-components';
import Hero from '@components/PlantDetails/Hero';
import Spinner from '@components/UI/Spinner';
import FullDescription from '@components/PlantDetails/FullDescription';
import RelatedProducts from '@components/PlantDetails/RelatedProducts';
import Footer from '@components/Footer';

function PlantDetails({ slug }) {
  const { initialPlants } = useSelector((state) => state.filters);
  const plant = initialPlants.filter(
    (plant) => plant.name.toLowerCase().split(' ').join('-') === slug
  )[0];

  if (!plant) return <Spinner />;

  return (
    <>
      <Navigation />
      <S.Container>
        <Hero plant={plant} />
        <FullDescription plant={plant} />
        <RelatedProducts plant={plant} />
      </S.Container>
      <Footer />
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
`;

export default PlantDetails;
