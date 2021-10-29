import Navigation from '../components/Navigation';
import Hero from '@components/Hero';
import Head from 'next/head';
import Plants from '@components/Plants';

export default function Home() {
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
      <Navigation />
      <Hero />
      <Plants />
    </>
  );
}
