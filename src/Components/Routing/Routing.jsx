// Routing.jsx
import { Route, Routes } from 'react-router-dom';
import CoinDetailPage from '../../pages/CoinDetailPage';
import HomePage from '../../pages/HomePage';

// Shared UI components
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import CoinTable from '../CoinTable/CoinTable';

function Routing() {
  return (
    <Routes>
      {/* Home Page with full layout */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Banner />
            <CoinTable />
          </>
        }
      />

      {/* Coin Details Page - separate layout */}
      <Route path="/details/coinId" element={<CoinDetailPage />} />
    </Routes>
  );
}

export default Routing;
