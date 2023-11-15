import { Outlet } from 'react-router-dom';
import Menu from './components/menu';
import Footer from "./components/footer";
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