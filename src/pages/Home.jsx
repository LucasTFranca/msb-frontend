import React from 'react';
import Header from '../components/Header';
import UserCardList from '../components/UserCardList';

function Home() {
  return (
    <div>
      <Header />
      <div>
        <UserCardList />
      </div>
    </div>
  );
}

export default Home;
