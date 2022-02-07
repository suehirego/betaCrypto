import { Container, Typography } from '@material-ui/core';
import React from 'react';
import HomeCarousel from './HomeCarousel';
import { useStyles } from './Sytles';

const HomeBanner = () => {

      const classes = useStyles();

      return (

            <div className={classes.banner}>
                  <Container className={classes.bannerWrapper}>

                        <div className={classes.bannerText}>

                              <Typography
                                    variant='h4'
                                    style={{
                                          fontWeight: 'bold',
                                          marginBottom: 15,
                                          color: '#fff',
                                    }}
                              >
                                    The World's Trusted Cryptourrency Rates
                              </Typography>

                              <Typography
                                    variant='h5'
                                    style={{
                                          marginBottom: 15,
                                          color: '#fff',
                                    }}
                              >
                                    Live Cryptocurrency and forex exchange rates

                              </Typography>


                        </div>

                        <div className={classes.bannerCarousel}>

                              <HomeCarousel/>

                        </div>
                        
                  </Container>

            </div>
      );
};

export default HomeBanner;
