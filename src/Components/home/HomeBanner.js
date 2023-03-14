import React from 'react';
import './home.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HomeBanner = () => {

    return (
        <div className="landingWrapper">

            <div className="leftText">
                <div className='subHeading'>
                    <img className='bannerLogo' src="assets/whitelogo.png" alt="" />
                    <p>Trade Betacoin for free</p>
                    <ArrowForwardIcon className='bannerIcon' />
                </div>
                <div className='heading'>
                    <h2 className='bannerHeadingText'>Jump start your crypto portfolio</h2>
                    <span className='bannerHeadingDesc'>BetaCoin is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</span>
                </div>
                <div className='bannerBtns'>
                    <button className='btnOne'>Enter Email Address</button>
                    <button className='btnTwo'>Get Started</button>
                </div>

            </div>

            <div className="rightImage">
                <img className="bannerImage" src="assets/two.png" alt="" />
                <img className="bannerImage2" src="assets/one.png" alt="" />
            </div>

        </div>


    );
};

export default HomeBanner;