import React from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

// internal
import { useStyles } from './Sytles';

//External - @material-ui
import { Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import clsx from 'clsx';



const MenuItem = ({label, icon, activeIcon, path }) => {

      const classes = useStyles();
      const [active, setActive] = useState(true);
      const location = useLocation();

      useEffect(() => {

            setActive( location.pathname === path);
            
      }, [location]);



  return (
      <div>
            <ListItem 
                  className={clsx(classes.menuItem, active && classes.menuItemActive)} 
                  // button
                  component={Link}
                  to={path}
            >
                  
                  <ListItemIcon>
                        <Icon>
                              <img  className={classes.menuItemIcon} src={ active ? activeIcon : icon} alt={label} />
                        </Icon>
                  </ListItemIcon>

                  <ListItemText 
                        primary={label} 
                        primaryTypographyProps={{variant: "body2"}}
                  />


            </ListItem>

      </div>
   )
};

export default MenuItem;
