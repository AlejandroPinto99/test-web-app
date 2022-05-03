import styled from "@emotion/styled"
import { Theme } from '@mui/system'
import { Button, CircularProgress, Grid, TextField, TextFieldProps, useTheme} from "@mui/material"
import { colors } from "@material-ui/core"

export const CardContainer = styled.div(({ theme, backgroundColor, height, paddingY }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: `${backgroundColor}` ,
    fontFamily: 'Lato',
    borderRadius: '15px', 
    padding: `${paddingY} 2rem`, 
    height: `${height}`
}))

export const TitleHeader = styled.div(({ theme, titleSize, dataSize, spanSize }) => ({
        color: 'white',
        fontFamily: 'Lato',
        h3: {
            fontWeight: 800,
            fontSize: `${titleSize}`
        },
        p:{
            fontSize: `${dataSize}`, 
            fontWeight: 700,
        },
        span:{
            fontSize: `${spanSize}`,
        }
}))

export const CardButton = styled(Button)(({theme}, Btncolor) => ({     
    fontFamily: 'Lato',
    fontSize: '1rem', 
    fontWeight: 600, 
    color: `${Btncolor}`,  
    backgroundColor: '#D8C295', 
    borderRadius: '6px'
}))