import React from 'react';
import { useStyles } from './Sytles';
import { useHistory } from 'react-router-dom';
import { BetaState } from '../context/BetaContext';
import { 
      AppBar, 
      Container, 
      MenuItem, 
      Toolbar, 
      Typography, 
      Select, 
      createTheme, 
      ThemeProvider 
} from '@material-ui/core';

const NavBar = () => {

      const classes = useStyles();
      const history = useHistory();

      const { currency, setCurrency } = BetaState();


      const darkTheme = createTheme({
            palette:{
                  primary:{ main: "#fff"},
                  type: "dark",
            },
      });

  return (

      <ThemeProvider theme={darkTheme}>

            <AppBar color='transparent' position="static">
                  <Container>
                        <Toolbar>
                              <Typography 
                                    className={classes.appTitle}
                                    onClick={() => history.push("/")}
                              >
                                    Beta Crypto
                              </Typography>
                        
                              <Select 
                                    variant="outlined"
                                    style={{
                                          width: 100,
                                          height: 50,
                                          marginRight: 15,
                                    }}
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                              >
                                    <MenuItem  value={"USD"}>USD</MenuItem>
                                    <MenuItem  value={"UGX"}>UGX</MenuItem>
                              
                              </Select>
                       </Toolbar>

                  </Container>
            

            </AppBar>

      </ThemeProvider>

      );
};

export default NavBar;
