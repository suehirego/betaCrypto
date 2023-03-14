import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

    // ### NavBar ###
    appBar: {
        top: 0,
        display: 'flex',
        position: 'sticky',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF !important',
        borderBottom: '0.3px solid lightgray',
    },
    toolBar: {
        display: 'flex',
        padding: '0px 30px',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 0px',
        },

    },
    appBarLogo: {
        width: '30px',
        marginTop: '-5px',
    },
    logoText: {
        fontSize: '22px',
        color: '#5E17EB',
        fontWeight: '500',
        fontFamily: `'Varela Round', sans-serif`,
        [theme.breakpoints.down('sm')]: {
           display: 'none',
        },
    },
    appBarLogoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
    },
    appBarList: {
        display: 'flex',
        gap: 50,
        color: '#282828',
        listStyle: 'none',
        cursor: 'pointer',
        height: '40px',
        alignItems: 'cetnter',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            gap: 20,
        },
    },
    listItem: {
        padding: '10px',
        fontFamily: `'Varela Round', sans-serif`,
        "&:hover": {
            color: "#5E17EB",
            borderBottom: '3px solid #5E17EB',
        },
        "&:focus": {
            color: "#5E17EB",
            fontWeight: '500',
        },
    },
    select:{
        width: 80,
        height: 40,
        color: '#282828',
        fontSize: '15px',
        "&:focus": {
            outline: "none",
        },
    },
    menuItem:{
        fontSize: '14px'
    }

}));
