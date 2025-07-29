import { useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable({ currency }) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(page, currency),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="my-5 flex flex-col items-center gap-5 w-[80vw] mx-auto">
      {/* Table Header */}
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold">
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h Change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>

      {/* Table Body */}
      <div className="flex flex-col w-full">
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((coin) => (
            <div
              key={coin.id}
              className="w-full bg-gray-900 text-white flex py-4 px-2 border-b border-gray-700 items-center"
            >
              {/* Coin Info */}
              <div className="flex items-center gap-4 basis-[35%]">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-xl font-bold">{coin.name}</div>
                  <div className="text-sm text-gray-400">{coin.symbol.toUpperCase()}</div>
                </div>
              </div>

              {/* Price */}
              <div className="basis-[25%] text-lg">
                {coin.high_24h?.toLocaleString()}
              </div>

              {/* 24h Change */}
              <div
                className={`basis-[20%] text-lg ${
                  coin.price_change_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_24h?.toFixed(2)}
              </div>

              {/* Market Cap */}
              <div className="basis-[20%] text-lg">
                ${coin.market_cap?.toLocaleString()}
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-4 justify-center items-center">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary btn-wide text-white text-xl"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-secondary btn-wide text-white text-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
