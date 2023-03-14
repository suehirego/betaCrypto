import React from 'react';
import { useStyles } from './TopbarSytles';
import { Link } from 'react-router-dom';
import { BetaState } from '../../context/BetaContext';
import {
    AppBar,
    Container,
    MenuItem,
    Toolbar,
    Select,
} from '@material-ui/core';

const Topbar = () => {

    const classes = useStyles();

    const { currency, setCurrency } = BetaState();

    return (

        <AppBar color='inherit' position="sticky" className={classes.appBar}>
            <Container>
                <Toolbar className={classes.toolBar}>

                    <Link to="/">
                        <div className={classes.appBarLogoContainer}>
                            <img
                                className={classes.appBarLogo}
                                src={process.env.PUBLIC_URL + "/logo.png"}
                                alt=""
                            />
                            <span className={classes.logoText}>betacoin</span>
                        </div>
                    </Link>

                    <ul className={classes.appBarList}>

                        <Link to="/" className='link'>
                            <li className={classes.listItem}>Home</li>
                        </Link>

                        <Link to="/crypto-trading" className='link'>
                            <li className={classes.listItem}>Trading</li>
                        </Link>

                    </ul>

                    <Select
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currency}
                        className={classes.select}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem className={classes.menuItem} value={"USD"}>USD</MenuItem>
                        <MenuItem className={classes.menuItem} value={"EUR"}>EUR</MenuItem>
                        <MenuItem className={classes.menuItem} value={"AED"}>AED</MenuItem>
                        <MenuItem className={classes.menuItem} value={"GBP"}>GBP</MenuItem>

                    </Select>

                </Toolbar>

            </Container>

        </AppBar>

    );
};

export default Topbar;
