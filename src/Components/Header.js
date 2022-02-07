import React from 'react';
import { useStyles } from './Sytles';
import { Link } from 'react-router-dom';
import { BetaState } from '../context/BetaContext';
import { 
      AppBar, 
      Container, 
      MenuItem, 
      Toolbar, 
      Select, 
      createTheme, 
      ThemeProvider 
} from '@material-ui/core';

const Header = () => {

      const classes = useStyles();

      const { currency, setCurrency } = BetaState();


      const darkTheme = createTheme({
            palette:{
                  primary:{ main: "#fff"},
                  type: "dark",
            },
      });

  return (

      <ThemeProvider theme={darkTheme}>

            <AppBar color='transparent' position="static"  className={classes.appBar}>
                  <Container>
                        <Toolbar className={classes.toolBar}>

                              <div className={classes.appBarLogoContainer}>
                                    <img
                                          className={classes.appBarLogo}
                                          src={process.env.PUBLIC_URL + "/newlogo.png"}
                                          alt=""
                                   />
                              </div>

                              <ul className={classes.appBarList}>

                                    <Link to="/">
                                          <li>Home</li>
                                    </Link>

                                    <Link to="/crypto-trading">
                                          <li>Trading</li>
                                    </Link>

                              </ul>
                              
                              <Select 
                                    variant="outlined"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    style={{
                                          width: 80,
                                          height: 40,
                                          marginRight: 15,
                                    }}
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                              >
                                    <MenuItem  value={"USD"}>USD</MenuItem>
                                    <MenuItem  value={"EUR"}>EUR</MenuItem>
                                    <MenuItem  value={"AED"}>AED</MenuItem>
                                    <MenuItem  value={"GBP"}>GBP</MenuItem>
                              
                              </Select>
                       </Toolbar>

                  </Container>
            

            </AppBar>

      </ThemeProvider>

      );
};

export default Header;
