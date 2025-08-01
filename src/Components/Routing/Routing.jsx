import { Route, Routes } from 'react-router-dom';
import CoinDetailPage from '../../pages/CoinDetailPage';
import MainLayout from '../../pages/Layout';
import HomePage from '../../pages/HomePage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={ <MainLayout/> } >

        <Route index element={<HomePage />}/>
        <Route path='/details/:coinId' element={<CoinDetailPage/>}/>

      </Route>      
    </Routes>
  );
}

export default Routing;
