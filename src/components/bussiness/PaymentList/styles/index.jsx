import styled from "@emotion/styled"
import { Theme } from '@mui/system'
import { Button, CircularProgress, Grid, TextField, Typography, useTheme} from "@mui/material"


export const PaymentTitle = styled(Typography)(({theme, props, getPaymentStatusColor}) => ({
    fontSize: '1.2rem', 
    fontWeight: '400', 
    color: 'rgba(82, 82, 82, 1)',
    fontFamily: 'Lato'
}))

export const PaymentInfo = styled.div(({theme}) => ({
    display: 'flex', 
    flexDirection: 'column', 
    marginLeft: '2rem', 
    marginRight: '1rem',
    h3: {
        fontWeight: '600', 
        fontSize: '1.2rem', 
        textAlign:'right', 
        color: 'rgba(82, 82, 82, 1)'
    },
    p: {
        textAlign: 'right', 
        color: `${getPaymentStatusColor(props.status, props.created).A100}`
    
        }
}))

export const TitleContainer = styled.div(({theme}) => ({
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'start',
        h2: {
            marginLeft: '2.5rem', 
            fontWeight: 900, 
            fontSize: '1.5rem', 
            fontFamily: 'Lato' 
        }
}))