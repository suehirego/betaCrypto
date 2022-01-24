import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
      appRoot:{
        display: "flex",
        // margin:0,
        // padding:0,
       
      },
      sidebarLogo:{
        width: '40%'
      },
      
      sidebarToolbar: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center',
      },
      // topIcon:{
      //   border: '2px solid #ffffe1',
      //   color: '#ffffe1',
      //   width:20,
      //   height: 20,
      //   borderRadius: '50%',
      // },
      sidebarLogoContainer:{
        display:"flex",
        alignItems: "center",
        justifyContent: "left"
      },
      sidebarDrawer:{
        width: 230,
        padding: '20px',
        // marginLeft:-10,
        // marginTop:-10,
        // backgroundColor: '#152349 !important',
        // position: 'relative',
        // height: '100vh',
      },
      paper: {
        background: '#152349',
      },
      sideBarList:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        marginTop: '20px',
      },
      menuItemIcon:{
        width: "100%"
      },
      menuItem:{
        color: "#a8b2d1",
        width: '100%',
        borderRadius: 10,
        marginBottom: 10,

        '&:focus': {
          color: "#000080",
        fontWeight: "bold",
        backgroundColor: '#ffffe1',
       },
      },
      menuItemActive:{
        color: "#000080",
        fontWeight: "bold",
        backgroundColor: '#ffffe1',
      },
      sideImg:{
        width: '100%',
        marginTop: '65px',
      },
      sidebarDrawerCollapse:{
        width: 50,
      }


});
    