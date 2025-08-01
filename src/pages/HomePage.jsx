// pages/HomePage.jsx
import CoinTable from '../Components/CoinTable/CoinTable'; // ✅ correct path

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Crypto Market</h1>
      <CoinTable />
    </div>
  );
}

export default HomePage;
