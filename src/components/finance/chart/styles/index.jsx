import styled from "@emotion/styled"
import { Button, CircularProgress, Grid, TextField, TextFieldProps, useTheme} from "@mui/material"


export const ChartContainerStyle = styled.div(({ theme }) => ({
    ml: 4, 
    borderRadius: '15px', 
    padding:'1rem', 
    marginBottom:'1rem', 
    backgroundColor: 'white', 
    boxShadow:'0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    fontFamily: 'Lato',
}))

export const CharTimeButton = styled(Button)(({theme}) => ({     
    backgroundColor: '#D8C295', 
    color: 'white', 
    borderRadius:'25px', 
    padding: '1.5px 10px',
    pointerEvents: 'none'
}))

export const SelectedCharTimeButton = styled(Button)(({theme}) => ({   
    backgroundColor: 'white',  
    color: '#A3A3A3', 
    borderRadius:'25px', 
    padding: '1.5px 10px'
}))

export const ChartTag = styled.div(({ theme }) => ({
    h4: {
        fontWeight: 600,
        fontSize: ' 1.2rem',
        color: '#A3A3A3'
    },
    p:{
        fontSize: `2rem`, 
        fontWeight: 600,
    },
    span:{
        fontSize: `1.2rem`,
    }
}))