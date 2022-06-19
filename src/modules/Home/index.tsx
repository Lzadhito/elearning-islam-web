import type { NextPage } from 'next';

import Button from 'components/Button';
import Header from './components/Header';

import type { Promotion } from './types';
import generatePromoData from './helpers/generatePromoData';

interface Props {
  data: Promotion;
}

const Home: NextPage<Props> = ({ data }) => {
  const mappedData = generatePromoData(data);
  return (
    <main>
      <Header />
      <h1>{mappedData.title}</h1>
      <p>{mappedData.desc}</p>
      <Button variant="outlined">Submit</Button>
    </main>
  );
};

export default Home;
