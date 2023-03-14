import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({

    container:{
        textAlign: "center", padding: '20px 60px', justifyContent:'center',
        // [theme.breakpoints.down('sm')]: {
        //     padding: '20px 10px',
        // },
    },
    tableContainer:{
        // [theme.breakpoints.down('sm')]: {
        //     padding: '0px',
        // },
    },
    tableImg:{
        height: 45,
        marginBottom: '10px',
        // [theme.breakpoints.down('sm')]: {
        //     height: 35,
        // },
    },
    mrtSymbol:{
        textTransform:'uppercase' , 
        fontSize:20, 
        color:'#5E17EB',
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: 15, 
        // },
    },
    mrtName:{
        fontSize: '14px',
        color:'rgba(94,23,235,0.66)',
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: 12, 
        // },
    },
    mrtCap:{
        fontSize: '14px',
    },
    coins: {
        // padding: 10,
    },
    tableRow: {
        backgroundColor: '#FAFAFA',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "gary"
        },
    },
    numbers:{
        fontSize: 14,
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: 11.5, 
        //     width: '100%',
        // },
    },
    tableCell: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        fontSize:'14px',
    },
    tablePaper: {
        backgroundColor: '#FAFAFA',
    },


}));
