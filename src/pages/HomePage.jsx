// CoinDetailPage.jsx
import { useParams } from 'react-router-dom';

function CoinDetailPage() {
  const { coinId } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Coin Detail Page {coinId}</h1>
    </div>
  );
}

export default CoinDetailPage;
