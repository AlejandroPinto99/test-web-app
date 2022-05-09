import styled from "@emotion/styled"
import { Theme } from '@mui/system'
import { Button, CircularProgress, TextField, Typography, Grid} from "@mui/material"


export const StatisticGrid = styled(Grid)(({theme}) => ({
    border: '1px solid rgba(216, 194, 149, 1)',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    borderRadius: '15px',
    padding: '15px', 
    maxHeight: '180px'
}))

export const TitleContainer = styled.div(({theme}) => ({
    display: 'flex', 
    justifyContent: 'space-between',
    marginBottom: '0.8rem',
    h4: {
        marginRight: '2rem', 
        fontWeight: 900, 
        fontSize: '1.3rem'
    },
    div: {
        display: 'flex', 
        alignItems: 'center'
    }
}))

export const StatisticsValueTitle = styled.div(({theme}) => ({
    display: 'flex', 
    justifyContent: 'space-between',
    h4: {
        color: 'rgba(163, 163, 163, 1)', 
        fontSize:'0.9rem'
    }
}))

export const StatisticsValueData = styled.div(({theme, open}) => ({
    display:`${!open ? 'none' : 'flex'}`, 
    flexDirection: 'column',
    p: {
        color: 'rgba(0, 0, 0, 1)', 
        fontSize:'2rem', 
        fontWeight: '800'
    },
    div: {
        display:'flex', 
        alignItems: 'center'
    }
}))
