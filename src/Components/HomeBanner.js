import { Container, Typography } from '@material-ui/core';
import React from 'react';
import HomeCarousel from './HomeCarousel';
import { useStyles } from './Sytles';

const HomeBanner = () => {

      const classes = useStyles();

      return (

            <div>
                  <Container className={classes.banner}>

                        <div className={classes.bannerText}>

                              <Typography
                                    variant='h5'
                                    style={{
                                          marginBottom: 15,
                                    }}
                              >
                                    Trade Crypto
                              </Typography>
                              <Typography
                                    variant='h3'
                                    style={{
                                          fontWeight: 'bold',
                                          marginBottom: 15,
                                    }}
                              >
                                    Like a Pro
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
