import React from 'react';

const Home = () => {
  return (
    <div>
      <div>home component now with webpack watching</div>
      <button onClick={() => console.log('clicked')}>Press me</button>
    </div>
  );
};

export default Home;
