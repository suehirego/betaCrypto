import axios from 'axios';
import '../Components/single/single.css';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/api';
import { BetaState } from '../context/BetaContext';
import parse from 'html-react-parser';
import { LinearProgress } from "@mui/material";

const SingleCoinPage = () => {

    const { id } = useParams();
    const [coin, setCoin] = useState();
    const { currency, symbol } = BetaState();


    useEffect(() => {
        const fetchCoin = async () => {
            const res = await axios.get(SingleCoin(id));
            setCoin(res.data);
        }
        fetchCoin();
    }, [id]);


    if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;


    return (
        <div className='single'>

            <div className='coinImage'>
                <img
                    src={coin?.image.large}
                    alt={coin?.name}
                    className="largeImg"
                />
            </div>

            <div className='details'>
                <h3 className='coinName'>{coin?.name}</h3>
                <p className='coinDesc'>
                    {parse(coin?.description.en.split(". ")[0])}.
                </p>

                <div className='mrtData'>
                    <div className='mrtDataItem'>
                        <h4>Rank:</h4>
                        <p>{coin?.market_cap_rank}</p>
                    </div>
                    <div className='mrtDataItem'>
                        <h4>Current Price:</h4>
                        <p>
                            {symbol}{" "}
                            {coin?.market_data.current_price[currency.toLowerCase()].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                        </p>
                    </div>
                    <div className='mrtDataItem'>
                        <h4>Market Cap:</h4>
                        <p>
                            {symbol}{" "}
                            {coin?.market_data.market_cap[currency.toLowerCase()].toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SingleCoinPage