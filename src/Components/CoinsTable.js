// /* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CoinList } from '../config/api';
// import { BetaState } from '../context/BetaContext';
// import { 
      // Typography,  
      // createTheme, 
//       ThemeProvider ,
//       Container,
//       TextField,
//       TableContainer,
//       Table,
//       TableHead,
//       TableRow,
//       TableCell,
//       TableBody,
// } from '@material-ui/core';
// import { useStyles } from './Sytles';
// import { useHistory } from 'react-router-dom';


// const CoinsTable = () => {

      // const [coins, setCoins] = useState([]);
      // const [search, setSearch] = useState();

      // const { currency, symbol } = BetaState();
      // const classes = useStyles();
      // const history = useHistory();

      // const fetchAllCoins = async () => {
      //       const { data } = await axios.get(CoinList(currency));
            
      //       setCoins(data);


      // };

      // useEffect(() => {
      //       fetchAllCoins();

      // }, [currency, fetchAllCoins]);

      // //use material ui dark theme
      // const darkTheme = createTheme({
      //       palette:{
      //             primary:{ main: "#fff"},
      //             type: "dark",
      //       },
      // });

      // //filter coins when a coin name OR symbol is entered in search bar
      // const handleSearch = () => {
      //       return (
      //             coins.filter(
      //                   (coins) =>
      //                   coins.name.toLowerCase().includes(search) ||
      //                   coins.symbol.toLowerCase().includes(search)
      //             )
      //       );
      // }


      // //number with commas function:
      // //googled to display price with commas
      // const numberWithCommas = (x) => {
      //       return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      // }




      
//       return (

//             <ThemeProvider theme={darkTheme}>

//                   <Container style={{textAlign: "center", padding: 20, justifyContent:'center'}}>
//                         <Typography
//                               variant="h5"
//                               style={{margin:18, }}
//                         >
//                              Cryptocurrency Prices by Market Cap
//                         </Typography>

                        // <TextField
                        //       label="Search for Crypto Currency..."
                        //       variant="outlined"
                        //       onChange={(e => setSearch(e.target.value))}
                        //       style={{marginBottom: 20, width: "100%"}}
                        // />

//                         <TableContainer >
//                               {/* { loading ?  */}
//                               {/* ( <LinearProgress style={{backgroundColor: "gold" }} /> ) : (  */}
//                                     <Table aria-label="simple table">

//                                           <TableHead style={{backgroundColor:"#eebc1d"}}>
                                                // <TableRow>
                                                //       {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                                                //             <TableCell
                                                //                   style={{color: "black", fontWeight: "700"}}
                                                //                   key={head}
                                                //                   align={head === "Coin" ? "" : "right"}
                                                //             >
                                                //                   {head}
                                                //             </TableCell>
                                                                    
                                                           
                                                //       ))}
                                                // </TableRow>
                                                
//                                           </TableHead>
                                        
//                                           <TableBody>
//                                           { handleSearch().map((row) => {

//                                                 const profit = row.price_change_percentage_24h >= 0;

//                                                 return(

//                                                       <TableRow
//                                                             onClick={() => history.push(`/coins/${row.id}`)}
//                                                             className={classes.tableRow}
//                                                             key={row.name}
//                                                       >

//                                                             <TableCell
//                                                                   component="th"
//                                                                   scope="row"
//                                                                   styles={{display: 'flex', gap: 15}}
//                                                             >
                                                                  // <img
                                                                  //      src={row?.image}
                                                                  //      alt={row.name}
                                                                  //      height="40"
                                                                  //      style={{marginBottom: 10}}
                                                                  // />
                                                                  // <div stle={{display:'flex', flexDirection:'column'}}>

                                                                  //       <span style={{textTransform:'uppercase' , fontSize:20}}>
                                                                  //             {row.symbol}
                                                                  //       </span>
                                                                  //       <span style={{color:'darkgrey'}}>{row.name}</span>

                                                                  // </div>

//                                                             </TableCell>

//                                                             <TableCell
//                                                                   align="right"
//                                                                   style={{color: profit > 0 ? "#007500" : "red", fontWeight: 500, marginLeft: 10}}
//                                                             >
                                                                  // {symbol}{""}
                                                                  // {numberWithCommas(row.price_change_percentage_24h?.toFixed(2))}%

//                                                             </TableCell>


//                                                       </TableRow>
//                                                 )


                                                
//                                           })}


//                                           </TableBody>

//                                     </Table>
//                               {/* )     
//                               } */}
//                         </TableContainer>

//                   </Container>

//             </ThemeProvider>
//       );
// };

// export default CoinsTable;

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
      TextField, 
      createTheme, 
      Table,
      TableBody,
      TableCell,
      TableContainer,
      TableHead,
      TableRow,
      TablePagination 
} from '@material-ui/core';



// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



      const CoinsTable = () => {

                  //use material ui dark theme
            const darkTheme = createTheme({
                  palette:{
                        primary:{ main: "#fff"},
                        type: "dark",
                  },
            });


            const [coins, setCoins] = useState([]);
            const [search, setSearch] = useState();
      
            const { currency, symbol } = BetaState();
            const classes = useStyles();
            // const history = useHistory();
            
            const [page, setPage] = React.useState(0);
            const [rowsPerPage, setRowsPerPage] = React.useState(10);

            const handleChangePage = (event, newPage) => {
                  setPage(newPage);
                };
              
                const handleChangeRowsPerPage = (event) => {
                  setRowsPerPage(+event.target.value);
                  setPage(0);
                };

                  //filter coins when a coin name OR symbol is entered in search bar
            const handleSearch = () => {
                  return (
                        coins.filter(
                              (coins) =>
                              coins.name.toLowerCase().includes(search) ||
                              coins.symbol.toLowerCase().includes(search)
                        )
                  );
            }
      
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const fetchAllCoins = async () => {
                  const { data } = await axios.get(CoinList(currency));
                  
                  setCoins(data);
      
      
            };
      
            useEffect(() => {
                  fetchAllCoins();
      
            }, [currency, fetchAllCoins]);


            //number with commas function:
            //googled to display price with commas
            const numberWithCommas = (x) => {
                  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            


            return (

                  <ThemeProvider theme={darkTheme}>

                        <Container style={{textAlign: "center", padding: 20, justifyContent:'center'}}>

                              <Typography
                                    variant="h5"
                                     style={{margin:18, }}
                              >
                                   Cryptocurrency Prices by Market Cap
                              </Typography>

                              <TextField
                                    label="Search for Crypto Currency..."
                                    variant="outlined"
                                    onChange={(e => setSearch(e.target.value))}
                                    style={{marginBottom: 20, width: "100%"}}
                             />

                              <Paper>
      
                              <TableContainer className={classes.tableBody}>
                                    <Table  aria-label="simple table">
                                          <TableHead style={{backgroundColor:"#eebc1d"}}>
                                                <TableRow>
                                                      {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
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

                                          
                                                {/* {coins.map((row) => { */}
                                                       {coins.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {

                                                     const profit = row.price_change_percentage_24h >= 0;

                                                     return(


                                                      <TableRow key={row.name} className={classes.tableRow}>
                                                            <TableCell component="th" scope="row">
                                                           
                                                                  <img
                                                                        src={row?.image}
                                                                        alt={row.name}
                                                                        height="40"
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

