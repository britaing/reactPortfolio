import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Contact';
import './components/About';
import './components/Header';
import './components/Nav';
import './components/Footer';
import './components/Portfolio';
import './components/Resume';
import './components/Home';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;




