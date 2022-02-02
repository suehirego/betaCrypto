import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideBar from './sidebar/SideBar';
import routes from './sidebar/routes';
// import { useStyles } from './Components/Sytles';

const App = () => {

  // const classes = useStyles();

  return (

    
    <Router>

    <div className="appRoot">
    {/* className={classes.appRoot} */}
    {/* className="appRoot" */}

      <SideBar/>

      {/* <Router> */}

        <div className='others'>

          <Switch>

            {routes.map((route, index) => {
              return(

                <Route exact  key={index} path={route.path}>
                  {route.component}
                </Route>

              );
            })}
       
          </Switch>


        </div>

      
      {/* </Router> */}

    </div>

    </Router>


  );
};

export default App;
