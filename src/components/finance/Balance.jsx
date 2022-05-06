import {
    Box,
    Button,
    Typography
  } from '@mui/material';

import { formatDollars, formatCentsToDollars } from '../../helpers/formatters'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



//Styles
import { TitleHeader, CardContainer, CardButton  } from './styles'

const Balance = ({accountBalance, paymentsBalance}) => {

    return(
        <CardContainer backgroundColor='#000000' paddingY='1.2rem' height='210px' >
                    <Box>
                        <TitleHeader titleSize="1.3rem" dataSize='2.6rem' spanSize='2rem'>
                            <Typography component="h3">Balance</Typography>
                            <Typography component="p">
                            {formatDollars(formatCentsToDollars(accountBalance))}
                            </Typography>
                        </TitleHeader>
                        <TitleHeader titleSize="1rem" dataSize='2.6rem' spanSize='2rem'>
                            <Typography component="h3" style={{fontWeight: 600}}>Incoming Payments</Typography>
                            <Typography component="p" >
                            {formatDollars(formatCentsToDollars(paymentsBalance))}
                            </Typography>
                        </TitleHeader>
                    </Box>
                    
                    <Box style={{color: 'white', display: 'flex', alignItems: 'end'}}>
                        <CardButton variant="contained" Btncolor='black'>
                            SEND MONEY
                            <ArrowForwardIcon />
                        </CardButton>
                    </Box>
        </CardContainer>
    );
}

export default Balance