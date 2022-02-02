import React from 'react';
import CoinsTable from '../Components/CoinsTable';
import NavBar from '../Components/NavBar';
import { useStyles } from '../Components/Sytles';

const Journey = () => {

      const classes = useStyles();

  return (

      <div>
            <NavBar/>

            <div className={classes.coins}>

           
            <h1>Journey</h1>
            <span>bg-white Hi, my name is Susan. I am very passionate about causes that directly affect people living in underserved communities. My interest in software engineering started back in 2016 when I founded a non-profit Organisation; with limited resources, free and open source platforms were the only option I had to put up a website for my Organisation.</span>


            <CoinsTable/>

            </div>



      </div>
   );
};

export default Journey;
