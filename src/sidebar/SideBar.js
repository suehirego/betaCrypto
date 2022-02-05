import React from 'react';
import '../App.css';

// internal
import { useStyles } from '../Components/Sytles';
import MenuItem from '../sidebar/MenuItem';
import routes from './routes';

//External - @material-ui
// import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import MenuIcon from '@material-ui/icons/Menu';



const SideBar = () => {

  const classes = useStyles();

  return (


      <div className="sideBar">

          <div className={classes.sidebarLogoContainer}>

            <img  className={classes.sidebarLogo} src={process.env.PUBLIC_URL + "/newlogo.png"} alt="" />

          </div>

          <List className={classes.sideBarList}>

            {routes.map ((routes, index) => {
              return(

                <MenuItem 
                  label={routes.label} 
                  icon={routes.icon} 
                  activeIcon={routes.activeIcon} 
                  path={routes.path}
               />

              )
            })}

          </List>

          <div className={classes.sidebarFooter}>
            <span>Built by Susan Hirego</span>
          </div>

      

      </div>

  );
};

export default SideBar;
