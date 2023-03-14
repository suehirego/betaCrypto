import React from 'react';
import './home.css';

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footerLogoWrapper">
                <img
                    className="footerLogo"
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    alt=""
                />
                <span className="footerLogoText">betacoin</span>
            </div>

            <div className='footerItem'>
                <span className='footerHeading'>About Us</span>
                <div className='footerList'>
                    <ul className='footerUl'>
                        <li className='footerListItem'>About</li>
                        <li className='footerListItem'>Legal</li>
                        <li className='footerListItem'>Terms</li>
                        <li className='footerListItem'>Privacy</li>
                        <li className='footerListItem'>News</li>
                        <li className='footerListItem'>Community</li>
                    </ul>
                </div>
            </div>

            <div className='footerItem'>
                <span className='footerHeading'>Product</span>
                <div className='footerList'>
                    <ul className='footerUl'>
                        <li className='footerListItem'>Exchange</li>
                        <li className='footerListItem'>NFT</li>
                        <li className='footerListItem'>Wallet</li>
                        <li className='footerListItem'>Card</li>
                        <li className='footerListItem'>Prime</li>
                        <li className='footerListItem'>Assets Hub</li>
                    </ul>
                </div>
            </div>

            <div className='footerItem'>
                <span className='footerHeading'>Support</span>
                <div className='footerList'>
                    <ul className='footerUl'>
                        <li className='footerListItem'>Help Center</li>
                        <li className='footerListItem'>Contact us</li>
                        <li className='footerListItem'>Create Account</li>
                        <li className='footerListItem'>ID Verification</li>
                        <li className='footerListItem'>Account Access</li>
                        <li className='footerListItem'>Payment Methods</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer