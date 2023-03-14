import React from 'react';
import '../App.css';
import Benefits from '../Components/home/Benefits';
import HomeBanner from '../Components/home/HomeBanner';
import HomeTrading from '../Components/home/HomeTrading';
import Numbers from '../Components/home/Numbers';
import Starter from '../Components/home/Starter';
import Footer from '../Components/home/Footer';


const Home = () => {

      return (

            <div className='home'>
                  <HomeBanner/>
                  <HomeTrading/>
                  <Benefits/>
                  <Numbers/>
                  <Starter/>
                  <Footer/>
            </div>


      );
};

export default Home;
