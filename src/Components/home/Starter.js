import React from 'react';
import './home.css';
import { IoPersonAdd } from 'react-icons/io5';
import { BsBank2, BsCurrencyExchange, BsArrowRight, BsArrowDown } from 'react-icons/bs';


const Starter = () => {
  return (
   
         <div className='benefit'>
            <h2 className='benefitHeading'>Get started in a few minutes</h2>
            <span className='benefitDesc'>Betacoin supports a variety of the most popular digital currencies.</span>

            <div className='benefits'>

                <div className='benefitItem'>
                    <IoPersonAdd className="benefitIcon" />
                    <span>Create an Account</span>
                </div>

                <BsArrowRight className="benefitIcon2" />
                <BsArrowDown className="benefitIcon3"/>

                <div className='benefitItem'>
                    <BsBank2 className="benefitIcon" />
                    <span>Link your bank account</span>
                </div>

                <BsArrowRight className="benefitIcon2" />
                <BsArrowDown className="benefitIcon3"/>

                <div className='benefitItem'>
                    <BsCurrencyExchange className="benefitIcon" />
                    <span>Start buying & selling</span>
                </div>

            </div>
        </div>
    
  )
}

export default Starter