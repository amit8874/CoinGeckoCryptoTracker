import  './index.css';
import './App.css'
import CoinTable from './Components/CoinTable/CoinTable';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import { useState } from 'react';

function App(){

  const [currency , setCurrency] = useState('usd')
  return(
    <>
    <Navbar setCurrency={setCurrency}/>
    <Banner/>
    <CoinTable currency = {currency}/>
    </>
  );
}
export default App;
