import React from 'react';
import './SideBar.css';

// internal
import { useStyles } from './Sytles';
import MenuItem from './MenuItem';
import routes from './routes';

//External - @material-ui
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import MenuIcon from '@material-ui/icons/Menu';



const SideBar = () => {

  const classes = useStyles();

  return (


      <div className="sideBar">

        <Drawer  
          classes={{ paper: classes.sidebarDrawer}}
          variant='permanent' open={true}
        >

          {/* open and collapse icons */}
          {/* <div className={classes.sidebarToolbar}>
            <ChevronLeftIcon className={classes.topIcon} /> 
          </div> */}

          <div className={classes.sidebarLogoContainer}>

            <img  className={classes.sidebarLogo} src={process.env.PUBLIC_URL + "/logoyello.png"} alt="" />

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

          <img  className={ classes.sideImg} src={process.env.PUBLIC_URL + "/sideimg.png"}  alt=""/>

        </Drawer>

      </div>

  );
};

export default SideBar;
