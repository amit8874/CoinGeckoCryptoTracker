import { Route, Routes } from 'react-router-dom';
import {lazy,Suspense} from 'react';
import MainLayout from '../../pages/Layout';
import {Facebook} from 'react-content-loader'
import ErrorBoundaryUI from '../ErrorBoundary/ErrorBoundary';

const Home = lazy(()=>import ('../../pages/HomePage'));
const CoinDetailPage = lazy(()=>import ('../../pages/CoinDetailPage'));

function Routing() {
  return (
    <ErrorBoundaryUI>
      <Routes>
        <Route path="/" element={ <MainLayout/> } >

          <Route index element={
            <Suspense fallback= {<Facebook/> }>
              <Home />
            </Suspense>
            
            
            }/>
          <Route path='/details/:coinId' element={
            
            <Suspense fallback={<Facebook/>}>
              <CoinDetailPage/>

            </Suspense>
            
            }/>

        </Route>      
    </Routes>
    </ErrorBoundaryUI>
    
  );
}

export default Routing;
