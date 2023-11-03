import { useState } from 'react'

import './App.css'
import './pages/Contact';
import './pages/About';
import './pages/Header';
import './pages/Nav';
import './pages/Footer';
import './pages/Portfolio';
import './pages/Resume';
import './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;




