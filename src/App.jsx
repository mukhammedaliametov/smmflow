import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Orders from './components/Orders';
import Reviews from './components/Reviews';
import Questions from './components/Questions';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Orders />
        <Reviews />
        <Questions />
      </main>
      <Footer />
    </>
  );
};

export default App;