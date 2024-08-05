import React from 'react';
import Header from './header/Header';
import Maincards from './carousel/Maincards'; // Ensure this component exists
import List from './movies-list/List';

const Home = () => {
  return (
    <>
      <div>
        <Maincards />         
        <List />
      </div>
    </>
  );
};

export default Home;