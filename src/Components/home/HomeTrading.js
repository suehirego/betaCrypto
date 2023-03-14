import React from 'react';
import HomeCarousel from './HomeCarousel';


const HomeTrading = () => {


      return (

            <div className="slide">
                  <h2 className='slideText'>Popular Cryptocurrencies</h2>

                  <div className="slideWrapper">

                        <div className="slideCarousel">

                              <HomeCarousel/>

                        </div>
                        
                  </div>

            </div>
      );
};

export default HomeTrading;
