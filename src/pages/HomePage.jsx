import CoinTable from '../Components/CoinTable/CoinTable'; 

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <img
      className='w-full h-100 object-cover'
      src= "/crypto.jpg" alt="Crypto image" />
      <CoinTable />
    </div>
  );
}

export default HomePage;
