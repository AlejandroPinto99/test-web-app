import styled from "@emotion/styled"
import { Button, CircularProgress, Grid, TextField, TextFieldProps, useTheme, Typography} from "@mui/material"

export const Title = styled(Typography)(({theme}) => ({     
    fontColor: 'black',
    fontWeight: 800,
    fontSize: '1.7rem',
    fontFamily: 'Lato'
}))

export const SeeList = styled(Typography)(({theme}) => ({
    display: 'flex', 
    alignItems: 'center',
    p: {
        fontFamily: 'Lato',
        fontSize: '1rem',
        color: '#525252',
    },
}))

