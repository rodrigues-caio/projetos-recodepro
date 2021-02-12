import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div className='container'>
      <Header />

      <main className='content'>
        <Card />
      </main>

      <Footer />
    </div>
  );
}

export default App;
