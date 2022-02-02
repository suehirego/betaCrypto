import React from 'react';
import {  useContext, useEffect, useState, createContext  } from 'react';


const Beta = createContext();

const BetaContext = ({children}) => {

      // create default state for currencies
      const [currency, setCurrency] = useState("USD");
      const [symbol, setSymbol] = useState("$");

      useEffect(() => {
            
            if(currency === "USD") setSymbol("$");
            if(currency === "UGX") setSymbol("UGX");


      },[currency]);

      return (

            <Beta.Provider value={{currency, symbol, setCurrency}}>

                  {children}

            </Beta.Provider>

      );
};

export default BetaContext;


// create initial state
export const  BetaState = () => {

      return( 

            useContext(Beta)
      );
};
