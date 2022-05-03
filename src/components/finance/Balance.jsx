import {
    Box,
    Button,
    Typography
  } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//Styles
import { TitleHeader, CardContainer, CardButton  } from './styles'

const Balance = () => {
    return(
        <CardContainer backgroundColor='#000000' paddingY='1.2rem' height='210px'>
            <Box>
                <TitleHeader titleSize="1.3rem" dataSize='2.6rem' spanSize='2rem'>
                    <Typography component="h3">Balance</Typography>
                    <Typography component="p">
                        $  47,168<span>.00</span>
                    </Typography>
                </TitleHeader>
                <TitleHeader titleSize="1rem" dataSize='2.6rem' spanSize='2rem'>
                    <Typography component="h3" style={{fontWeight: 600}}>Incoming Payments</Typography>
                    <Typography component="p" >
                        <span >+$ </span> 
                        5,478
                        <span >.00</span>
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