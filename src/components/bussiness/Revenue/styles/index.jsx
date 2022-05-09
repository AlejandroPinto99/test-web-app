import styled from "@emotion/styled"
import { Theme } from '@mui/system'
import { Button, CircularProgress, Grid, TextField, Typography, useTheme} from "@mui/material"
import { colors } from "@material-ui/core"

export const RevenueContainer = styled.div(({ theme }) => ({
    display: 'flex', 
    marginBottom: '1rem',  
    border: '1px solid rgba(216, 194, 149, 1)', 
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    borderRadius: '15px', 
    paddingTop: '2px', 
    maxHeight: '170px' 
}))

export const RevenueTitleSection = styled.div(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    marginTop: '6px',
    h2: {
        marginRight: '1.5rem',
        fontWeight: 600, 
        fontSize: '1.2rem', 
        fontFamily: 'Lato'
    }
}))

export const RevenueData = styled.div(({theme}) => ({
    h5: {
        color: 'rgba(0, 0, 0, 1)', 
        fontSize: '3rem', 
        fontWeight: '900',
        fontFamily: 'Lato',
        span: {
            fontSize: '2rem'
        }
    },
    label: {
        color: 'rgba(163, 163, 163, 1)', 
        fontWeight: '700', 
        fontFamily: 'Lato', 
        fontSize: '0.8rem'
    },
    p: {
        color: 'rgba(82, 82, 82, 1)', 
        fontSize: '1rem', 
        fontWeight: '800', 
        fontFamily: 'Lato'
    }
}))



export const IncomingPaymentValue = styled.div(({theme}) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    marginRight: '2rem', 
    width: '70%',
    label: {
        color: 'rgba(163, 163, 163, 1)', 
        fontSize: '0.8rem'
    },
    p: {
        color: 'rgba(82, 82, 82, 1)', 
        fontSize: '1rem',
        fontWeight: '700', 
        fontFamily: 'Lato'
    }
}))

export const IncomingPaymentTitle = styled.div(({theme}) => ({
    h4: {
        color: 'rgba(0, 0, 0, 1)', 
    fontSize: '1rem', 
    fontWeight: '700', 
    fontFamily: 'Lato'
    },
    display: 'flex', 
    justifyContent: 'space-between',  
    marginTop: '10px' 
}))