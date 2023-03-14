import React from 'react';
import './home.css';

const Numbers = () => {
    return (
        <div  className='numbersContainer'>
            <div className='numbers'>

                <div className='numbersItem'>
                    <h2 className='numbersHeading'>14M+</h2>
                    <span className='numbersDesc'>Registered Users</span>
                </div>

                <div className='numbersItem'>
                    <h2 className='numbersHeading'>62M+</h2>
                    <span className='numbersDesc'>Quarterly volume traded</span>
                </div>

                <div className='numbersItem'>
                    <h2 className='numbersHeading'>250+</h2>
                    <span className='numbersDesc'>Cryptocurrencies listed</span>
                </div>

            </div>
        </div>
    )
}

export default Numbers