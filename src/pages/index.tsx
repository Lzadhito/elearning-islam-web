import type { NextPage } from 'next';
import Home from '@/modules/Home';

const Homepage: NextPage = () => {
  const dummyFetchedData = {
    title: 'judul',
    desc: 'deskripsi',
  };

  return <Home data={dummyFetchedData} />;
};

export default Homepage;
