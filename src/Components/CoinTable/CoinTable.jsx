import {useEffect,useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable(){

    const [page,setPage] = useState(1);
    const{data,isLoading, isError, error , isFetching } = useQuery({
        queryKey:['coins',page],
        queryFn: () => fetchCoinData(page, 'usd'),
        retry:2,
        retryDelay: 1000,
        cacheTime: 1000*60 *2,
    });

    useEffect(() => {
            console.log(data)
            
        },{data});

    if(isLoading){
        return <div>Loding...</div>
    }
    if(isError){
        return <div>Error:{error.message}</div>
    }
    
    return(
        <>
            Coin table
            <button onClick={()=>setPage(page+1)}>Click</button>
            {page}
        </>
    );
}
export default CoinTable;