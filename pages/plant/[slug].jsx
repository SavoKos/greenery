import { useSelector } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateInitialPlants, updatePlants } from 'redux/filtersSlice';
import Navigation from '@components/Navigation';
import styled from 'styled-components';
import Hero from '@components/PlantDetails/Hero';
import Spinner from '@components/UI/Spinner';
import FullDescription from '@components/PlantDetails/FullDescription';

export const getServerSideProps = async ({ query: { slug } }) => {
  return {
    props: {
      slug,
    },
  };
};

function PlantDetails({ slug }) {
  const dispatch = useDispatch();

  useEffect(
    () =>
      axios.get('/plants.json').then((res) => {
        dispatch(updateInitialPlants(res.data));
        dispatch(updatePlants(res.data));
      }),
    []
  );

  const { initialPlants } = useSelector((state) => state.filters);
  const plant = initialPlants.filter(
    (plant) => plant.name.toLowerCase().split(' ').join('-') === slug
  )[0];

  if (!plant) return <Spinner />;

  return (
    <>
      <Head>
        <title>Greenery | {plant?.name}</title>
        <meta name='description' content={plant?.description} />
        <link
          href={'https://greenery.savokos.com/plants' + slug}
          rel='canonical'
        />
      </Head>
      <Navigation />
      <S.Container>
        <Hero plant={plant} />
        <FullDescription plant={plant} />
      </S.Container>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
`;

export default PlantDetails;