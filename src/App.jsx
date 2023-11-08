import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from "./components/Footer";
import './App.css'



function App() {
  return (
    <>
    <Menu/>
    <Outlet/>
    <Footer/>
    
    </>
   
  );
}

export default App;