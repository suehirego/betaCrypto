import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({


  // ### NavBar ###
  appTitle:{
    flex: 1,
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: 21,
    color: "#eebc1d"
  },

  // ### SIDEBAR ###
     
  sidebarLogo:{
    width: '50%'
  },
  sidebarLogoContainer:{
    display:"flex",
    alignItems: "center",
    justifyContent: "left",
  },
  // sidebarDrawer:{
  //   width: "430px",
  //   padding: '20px',
  //   backgroundColor: '#152349',
  //   position: "sticky",
  //   height: '100vh',
  // },
  // paper: {
  //   background: '#152349',
  // },
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
    marginTop: '46px',
  },
  sidebarDrawerCollapse:{
    width: 50,
  },

  // ### HOME PAGE ###

  banner: {
    // height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
  },
  bannerText: {
    display: 'flex',
    height: '40%',
    paddingTop: 55,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerCarousel: {
    width: "900px",
    padding: 45,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  carousel: {
    padding: "35px 0 35px 35px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItems: {
    paddingTop: 35,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transform: 'uppercase',
    color: '#fff !important',
  },


  // ### TRADING PAGE ###
  coins:{
    padding: 35,
  },
  tableRow: {
    backgroundColor: "#152349",
    cursor: 'pointer',
      "&:hover": {
        backgroundColor: "#0f1a36"
      },
  },
  tableBody: {
    overflowY: 'scroll',
    scrollbarColor: 'gold',
    height: "50.2vh",
  },


});
    