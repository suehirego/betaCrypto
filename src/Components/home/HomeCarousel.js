/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './home.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BetaState } from '../../context/BetaContext';
import { TrendingCoins } from '../../config/api';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';


const HomeCarousel = () => {

    //Trending state
    const [trending, setTrending] = useState([]);

    //currency state
    const { currency, symbol } = BetaState();

    //fetch Coin
    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        // console.log(data);
        setTrending(data);
    };

    console.log(trending);

    useEffect(() => {
        fetchTrendingCoins();

    }, [currency, fetchTrendingCoins]);



    const items = trending.map((coin) => {

        let profit = coin.price_change_percentage_24h >= 0;

        return (

            <Link to={`/single/${coin.id}`}>

            <div className="carouselItems">

                <img
                    src={coin?.image}
                    alt={coin.name}
                    height='70'
                    style={{ marginBottom: 10 }}
                    className="coin"
                />

                
                    <div className='groupItem'>

                        {coin?.symbol}
                        &nbsp;
                        <div style={{ color: profit > 0 ? "#007500" : "red", fontWeight: 500, marginLeft: 10 }}>
                            {profit && "+"}
                            {coin?.price_change_percentage_24h?.toFixed(2)}%
                        </div>

                    </div>
               

                <div style={{ fontSize: 18, fontWeight: 500 }}>
                    {symbol + ""} 
                    {coin?.current_price.toFixed(2).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                </div>
            </div>
            </Link>


        )


    });

    const responsive = {
        0: { items: 2, },
        576: { items: 3 },
        720: { items: 3 },
        1024: { items: 5 },
    };


    return (

        <div className="carousel">

            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            />

        </div>
    );
};

export default HomeCarousel;


