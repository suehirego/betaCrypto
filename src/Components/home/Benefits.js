import React from 'react';
import './home.css';
import { BsSafeFill } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi';
import { AiTwotoneInsurance } from 'react-icons/ai';


const Benefits = () => {
    return (

        <div className='benefit'>
            <h2 className='benefitHeading'>The most trusted cryptocurrency platform</h2>
            <span className='benefitDesc'>Here are a few reasons why you should choose Betacoin</span>

            <div className='benefits'>

                <div className='benefitItem'>
                    <BsSafeFill className="benefitIcon" />
                    <span className='benefitTitle'>Secure storage</span>
                    <p className='desc'>We have secure offline storage for all digital assets.</p>
                </div>

                <div className='benefitItem'>
                    <AiTwotoneInsurance className="benefitIcon" />
                    <span className='benefitTitle'>Protected by insurance</span>
                    <p className='desc'>Betacoin maintains crypto insurance  with uptp $250,000 covered by FDIC insurance.</p>
                </div>

                <div className='benefitItem'>
                    <HiBadgeCheck className="benefitIcon" />
                    <span className='benefitTitle'>Industry best practices</span>
                    <p className='desc'>Betacoin supports a variety of the most popular digital currencies.</p>
                </div>

            </div>
        </div>


    )
}

export default Benefits