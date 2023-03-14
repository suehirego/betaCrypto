/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { useStyles } from './tradingStyle';
import axios from 'axios';
import { CoinList } from '../../config/api';
import { BetaState } from '../../context/BetaContext';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination
} from '@mui/material';
import { useHistory } from 'react-router-dom';


const CoinsTable = () => {

    const [coins, setCoins] = useState([]);

    const { currency, symbol } = BetaState();
    const classes = useStyles();
    const history = useHistory();

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


    return (


        <Container className={classes.container}>

            <Typography
                variant="h6"
                style={{ marginTop: 25, marginBottom: 25, color: '#282828' }}
            >
                Cryptocurrency Rates by Market Cap
            </Typography>

            <Paper className={classes.tablePaper}>

                <TableContainer className={classes.tableContainer}>

                    <Table aria-label="simple table">
                        <TableHead style={{ borderTop: '1px solid lightgray' }}>
                            <TableRow>
                                {["Coin", "Price", "Change (24h)", "Market Cap"].map((head) => (
                                    <TableCell
                                        style={{ color: "#282828", fontWeight: "500", }}
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

                                    return (


                                        <TableRow
                                            key={row.name}
                                            className={classes.tableRow}
                                            onClick={() => history.push(`/single/${row.id}`)}
                                        >
                                            <TableCell component="th" scope="row" style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>

                                                <img
                                                    src={row?.image}
                                                    alt={row.name}
                                                    className={classes.tableImg}
                                                />
                                                <div style={{ display: 'flex', flexDirection: 'column' }}>

                                                    <span className={classes.mrtSymbol} >
                                                        {row.symbol}
                                                    </span>
                                                    <span className={classes.mrtName}>{row.name}</span>

                                                </div>

                                            </TableCell>

                                            <TableCell align="right" className={classes.numbers}>
                                                {symbol}{" "}
                                                {row.current_price?.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                                            </TableCell>

                                            <TableCell
                                                align="right"
                                                className={classes.numbers}
                                                style={{ color: profit > 0 ? "#007500" : "red", fontWeight: 500 }}
                                            >
                                                {profit && "+"}
                                                {row.price_change_percentage_24h?.toFixed(2)}%
                                            </TableCell>

                                            <TableCell align="right" className={classes.numbers}>
                                                {symbol}{" "}
                                                {row.market_cap?.toLocaleString(navigator.language, { minimumFractionDigits: 0 }).slice(0, -6)}M
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

    );
}


export default CoinsTable;

