import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const solarData = useSelector((state) => state.solarData);
  const { sunrise } = solarData;

  return (
    <div>
      Sunrise:
      {' '}
      {sunrise}
    </div>
  );
};

export default Home;
