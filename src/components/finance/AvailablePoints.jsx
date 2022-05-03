import {
    Box,
    Button,
    Typography
  } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const AvailablePoints = () => {
    return(
        <Box style={{backgroundColor: 'white', borderRadius: '15px', padding: '0.5rem 2rem', height: '180px', 
        display:'flex', flexDirection: 'column',
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', 
        border: '2px solid #D8C295'}}>
           <Box>
               <Typography component="h3" style={{color: '#525252', fontFamily: 'Lato', fontSize: '1.2rem', fontWeight: 700}}>Available Points</Typography>
               <Typography commponent="p" style={{ fontFamily: 'Lato', fontSize: '3.50rem', fontWeight: 800}}> 37,505 </Typography>
           </Box>
           <Box style={{display: 'flex', flexDirection: 'row-reverse' }}>
            <Button variant="contained" style={{fontFamily: 'Lato', borderRadius: '0px', fontSize: '1rem', fontWeight: 600, backgroundColor: '#D8C295'}} >
                    REDEEM POINTS
                    <ArrowForwardIcon />
                </Button>
           </Box>
        </Box>
    );
}

export default AvailablePoints;