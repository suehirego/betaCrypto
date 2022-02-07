import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

  // ### NavBar ###
  toolBar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  appBarLogo:{
    width: '80px'
  },
  appBarLogoContainer:{
    display:"flex",
    alignItems: "center",
    justifyContent: "left",
  },
  appBarList:{
    display: 'flex',
    gap: 30,
    listStyle: 'none',
    cursor: 'pointer',
  },
 

  // ### HOME PAGE ###

  banner: {
    backgroundImage: 'url(./banner3.png)'
  },
  bannerWrapper:{
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  bannerText: {
    display: 'flex',
    height: '40%',
    paddingTop: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerCarousel: {
    padding: 45,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItems: {
    paddingTop: 25,
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
    padding: 25,
  },
  tableRow: {
    backgroundColor: '#020c1b',
    cursor: 'pointer',
      "&:hover": {
        backgroundColor: "#0a192f"
      },
  },
  tableCell:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  tablePaper:{
    backgroundColor: '#020c1b',
  },


}));
    