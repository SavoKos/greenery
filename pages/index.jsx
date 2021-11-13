import Navigation from '../components/Navigation';
import Hero from '@components/Hero';
import Head from 'next/head';
import Plants from '@components/Plants';
import Footer from '@components/Footer';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInitialPlants, updatePlants } from 'redux/filtersSlice';
import axios from 'axios';
import Spinner from '@components/UI/Spinner';
import styled from 'styled-components';

export default function Home() {
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const { plants } = useSelector((state) => state.filters);

  useEffect(
    () =>
      axios.get('/plants.json').then((res) => {
        dispatch(updateInitialPlants(res.data));
        dispatch(updatePlants(res.data));
      }),
    []
  );

  if (plants.length < 1) return <Spinner />;

  return (
    <>
      <Head>
        <title>Greenery | Online plant shop</title>
        <meta
          name='description'
          content='We are an online plant shop offering a wide range of cheap and
          trendy plants. Use our plants to create an unique Urban Jungle.
          Order your favorite plants!'
        />
        <link href='https://greenery.savokos.com' rel='canonical' />
      </Head>
      <S.Container>
        <Navigation />
        <Hero scrollRef={scrollRef} />
        <Plants scrollRef={scrollRef} />
        <Footer />
      </S.Container>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  padding: 0 5%;
`;
