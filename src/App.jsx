import { useState } from "react";
import "./App.css";
import Menu from './components/menu';
import Footer from "./components/footer";
import About from "./components/about";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div>
      <Menu/>
    </div>
    <div>
    <About/>
    </div>
    <Footer/>
    </>
  )
}

export default App;