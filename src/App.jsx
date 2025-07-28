import  './index.css';
import './App.css'
import CoinTable from './Components/CoinTable/CoinTable';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';

function Hello(){
  return(
    <>
    <Navbar/>
    <Banner/>
    <CoinTable/>
    </>
  );
}
export default Hello;
