import styled from "@emotion/styled"
import { Theme } from '@mui/system'
import { Button, CircularProgress, Grid, TextField, Typography, useTheme} from "@mui/material"

export const ClientContainer = styled.div(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    marginBottom: '1rem'
}))

export const InitialsContainer = styled.div(({ theme }) => ({
    border: '1px solid rgba(216, 194, 149, 1)', 
    borderRadius:'100%',
    boxShadow: '10px', 
    marginLeft: '1rem',
    p:{
        fontSize: '1.2rem',
        fontWeight: '600',
        padding: '15px 17px'
    }
}))

export const InformationContainer = styled.div(({ theme }) => ({
    marginLeft: '2rem', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'start',
    p:{
        color: 'rgba(82, 82, 82, 1)', 
        fontFamily: 'Lato', 
        fontSize: '0.8rem'
    },
    h4: {
        fontSize: '1.2rem', 
        fontWeight: '600', 
        fontFamily: 'Lato'
    }
}))

export const RevenueContainer = styled.div(({theme}) => ({
    display: 'flex', 
    flexDirection: 'column',  
    marginLeft: '2rem', 
    marginRight: '1rem',
    h4: {
        fontWeight: '600',
        fontSize: '1rem', 
        textAlign:'right',
        span: {
            fontSize: '1rem'
        }
    },
    p: {
        color: 'rgba(163, 163, 163, 1)', 
        textAlign: 'right'
    }
}))

export const SeeAllListContainer = styled.div(({theme}) => ({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    h2: {
        marginRight: '2rem', 
        fontWeight: 900, 
        fontSize: '1.5rem', 
        fontFamily: 'Lato'
    },
    p: {
        fontSize: '0.8rem', 
        marginLeft: '2rem', 
        marginRight: '0.5rem',
        color: 'rgba(82, 82, 82, 1)', 
        cursor: 'pointer'
    },
    svg: {
        color: 'rgba(216, 194, 149, 1)', 
        fontSize: 25, 
        cursor: 'pointer'
    }
}))

export const ListContainer = styled.div(({theme}) => ({
    width: '85%', 
    height: '300px', 
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    borderRadius: '20px', 
    overflow: "hidden", 
    overflowY: 'scroll'
    
}))

