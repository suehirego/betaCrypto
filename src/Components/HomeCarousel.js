/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import { useStyles } from './Sytles';
import { BetaState } from '../context/BetaContext';
import { TrendingCoins } from '../config/api';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const HomeCarousel = () => {

      const classes = useStyles();

      //Trending state
      const [trending, setTrending] = useState([]);
      
      //currency state
      const { currency, symbol } = BetaState();

      //fetch API
      
      const fetchTrendingCoins = async () => {
            const { data } = await axios.get(TrendingCoins(currency));

            // console.log(data);
            setTrending(data);
      };

      console.log(trending)

      useEffect(() => {
            fetchTrendingCoins();

      }, [currency, fetchTrendingCoins]);

      
      //number with commas function:
      //googled to display price with commas
      const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      
      
      const items = trending.map((coin) => {

            let profit = coin.price_change_percentage_24h >= 0;

            return(

                  <div className={classes.carouselItems}>

                        <img
                              src={coin?.image}
                              alt={coin.name}
                              height='70'
                              style={{marginBottom: 10}}
                        />

                        <span>
                              {coin?.symbol}
                              &nbsp;
                              <span style={{color: profit > 0 ? "#007500" : "red", fontWeight: 500, marginLeft: 10}}>
                                    {profit && "+"}
                                    {coin?.price_change_percentage_24h?.toFixed(2)}%
                              </span>

                        </span>

                        <span style={{ fontSize: 20, fontWeight: 500}}>
                              {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                        </span>
                  </div>


            )
             
           
      });

      //resposive carousel
      const responsive = {
            0: { items: 2, },
            512: { items: 4 },
            1024: { items: 5 },
      };



      return (

            <div className={classes.carousel}>

               
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


