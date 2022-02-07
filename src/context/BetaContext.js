import React from 'react';
import {  useContext, useEffect, useState, createContext  } from 'react';


const Beta = createContext();

const BetaContext = ({children}) => {

      // create default state for currencies
      const [currency, setCurrency] = useState("USD");
      const [symbol, setSymbol] = useState("$");

      useEffect(() => {
            
            if(currency === "USD") setSymbol("$");
            else if (currency === "EUR") setSymbol("€");
            else if (currency === "AED") setSymbol("AED");
            else if (currency === "GBP") setSymbol("GBP");


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
