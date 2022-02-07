/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './Sytles';
import axios from 'axios';
import { CoinList } from '../config/api';
import { BetaState } from '../context/BetaContext';
import { 
      Container, 
      ThemeProvider,
      Typography, 
      createTheme, 
      Table,
      TableBody,
      TableCell,
      TableContainer,
      TableHead,
      TableRow,
      TablePagination 
} from '@material-ui/core';




      const CoinsTable = () => {

                  //use material ui dark theme
            const darkTheme = createTheme({
                  palette:{
                        primary:{ main: "#fff"},
                        type: "dark",
                  },
            });


            const [coins, setCoins] = useState([]);
      
            const { currency, symbol } = BetaState();
            const classes = useStyles();
            // const history = useHistory();
            
            const [page, setPage] = useState(0);
            const [rowsPerPage, setRowsPerPage] = useState(10);

            const handleChangePage = (event, newPage) => {
                  setPage(newPage);
            };
              
            const handleChangeRowsPerPage = (event) => {
                  setRowsPerPage(+event.target.value);
                  setPage(0);
            };

  
            const fetchAllCoins = async () => {
                  const { data } = await axios.get(CoinList(currency));
                  
                  setCoins(data);
            };
      
            useEffect(() => {
                  fetchAllCoins();
      
            }, [currency]);


            //number with commas function:
            //display price with commas
            const numberWithCommas = (x) => {
                  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            


            return (

                  <ThemeProvider theme={darkTheme}>

                        <Container style={{textAlign: "center", padding: 20, justifyContent:'center'}}>

                              <Typography
                                    variant="h6"
                                     style={{marginTop:5, marginBottom:43, color:'#fff'}}
                              >
                                   Cryptocurrency Rates by Market Cap
                              </Typography>
                              
                              <Paper className={classes.tablePaper}>
      
                              <TableContainer className={classes.tableContainer}>
                                    <Table  aria-label="simple table">
                                          <TableHead style={{backgroundColor:"#eebc1d"}}>
                                                <TableRow>
                                                      {["Coin", "Price", "Change (24h)", "Market Cap"].map((head) => (
                                                            <TableCell
                                                                  style={{color: "black", fontWeight: "700"}}
                                                                  key={head}
                                                                  align={head === "Coin" ? " " : "right"}
                                                            >
                                                                  {head}
                                                            </TableCell>
                                                                    
                                                           
                                                      ))}
                                                </TableRow>
                                          </TableHead>

                                          <TableBody>
                                                
                                                {coins
                                                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                      .map((row) => {

                                                     const profit = row.price_change_percentage_24h >= 0;

                                                     return(


                                                      <TableRow 
                                                            key={row.name} 
                                                            className={classes.tableRow}
                                                            // onClick={() => history.push(`/coins/${row.id}`)}
                                                      >
                                                            <TableCell component="th" scope="row" style={{display: 'flex',flexDirection: 'row', gap: 10}}>
                                                           
                                                                  <img
                                                                        src={row?.image}
                                                                        alt={row.name}
                                                                        height="45"
                                                                        style={{marginBottom: 10}}
                                                                  />
                                                                  <div style={{display:'flex', flexDirection:'column'}}>

                                                                        <span style={{textTransform:'uppercase' , fontSize:20}}>
                                                                              {row.symbol}
                                                                        </span>
                                                                        <span style={{color:'darkgrey'}}>{row.name}</span>

                                                                  </div>

                                                            </TableCell>

                                                            <TableCell align="right">      
                                                                  {symbol}{" "}
                                                                  {numberWithCommas(row.current_price.toFixed(2))}
                                                            </TableCell>
              
                                                            <TableCell 
                                                                  align="right"
                                                                  style={{color: profit > 0 ? "#007500" : "red", fontWeight: 500, marginLeft: 10}}
                                                            >
                                                                  {profit && "+"}
                                                                  {row.price_change_percentage_24h?.toFixed(2)}%
                                                            </TableCell>

                                                            <TableCell align="right">      
                                                                  {symbol}{" "}
                                                                  {numberWithCommas(row.market_cap.toString().slice(0, -6))}
                                                            </TableCell>


                                                      </TableRow>
                                                       );
                                                })}

                                          </TableBody>

                                    </Table>
                              </TableContainer>

                              <TablePagination
                                    style={{backgroundColor: "#020C1B"}}
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={coins.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                             />
                             </Paper>

                        </Container>
                  </ThemeProvider>
            );
      }


      export default CoinsTable;

