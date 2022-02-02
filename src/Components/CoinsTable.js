/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CoinList } from '../config/api';
import { BetaState } from '../context/BetaContext';
import { 
      Typography,  
      createTheme, 
      ThemeProvider ,
      Container,
      TextField
} from '@material-ui/core';


const CoinsTable = () => {

      const [coins, setCoins] = useState([]);
      const [loading, setLoading] =useState(false);

      const { currency } = BetaState();

      const fetchAllCoins = async () => {
            setLoading(true);
            const { data } = await axios.get(CoinList(currency));
            
            setCoins(data);
            setLoading(false);

      };

      useEffect(() => {
            fetchAllCoins();

      }, [currency, fetchAllCoins]);

      //use material ui dark theme
      const darkTheme = createTheme({
            palette:{
                  primary:{ main: "#fff"},
                  type: "dark",
            },
      });



      return (

            <ThemeProvider theme={darkTheme}>
                  <Container style={{textAlign: "center", padding: 20}}>
                        <Typography
                              variant="h4"
                              style={{margin:18, }}
                        >
                             Cryptocurrency Price Stats
                        </Typography>

                        <TextField
                              label="Search for Crypto Currency..."
                              variant="outlined"
                              style={{marginBottom: 20, width: "100%"}}
                        />

                  </Container>

            </ThemeProvider>
      );
};

export default CoinsTable;
