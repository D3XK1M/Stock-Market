import React, { useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';

const Home = () => {
  const [searchString, submitSearchString] = useState ('');
  const handleSearchStringUpdate = (searchString) => {
    searchString(searchString);
  };

  return (
    <>
        <Search searchStringUpdated={handleSearchStringUpdate} />
        <Cards searchString={searchString} />
    </>
  );
}

export default Home;