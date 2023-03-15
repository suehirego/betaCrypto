import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({

    container: {
        textAlign: "center", padding: '20px 60px', justifyContent: 'center',
    },
    tableContainer: {},
    tableImg: {
        height: 45,
        marginBottom: '10px',
    },
    mrtSymbol: {
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#5E17EB',
    },
    mrtName: {
        fontSize: '14px',
        color: 'rgba(94,23,235,0.66)',
    },
    mrtCap: {
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
    numbers: {
        fontSize: 14,
    },
    tableCell: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        fontSize: '14px',
    },
    tablePaper: {
        backgroundColor: '#FAFAFA',
    },

    "@media (max-width: 720px)": {
        container: {
            padding: '20px 10px',
        },
        tableContainer: {
            padding: '0px',
        },
        tableImg: {
            height: 35,
        },
        mrtSymbol: {
            fontSize: 15,
        },
        mrtName: {
            fontSize: 12,
        },
        numbers: {
            fontSize: 11.5,
            width: '100%',
        },

    }


}));
