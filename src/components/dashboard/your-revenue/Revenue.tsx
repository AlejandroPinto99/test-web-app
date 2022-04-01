import React from 'react'

//Components
import { DateInfoTag } from '../DateInfoTag'
import {IconButton} from '../../widgets/buttons/IconBotton'

//Material UI
import { Container, Box, Typography, Divider } from '@mui/material';

const Revenue = () => {
    return(
        <Box sx={{display: 'flex', mb: '2rem', mx:'1rem', border: '1px solid rgba(216, 194, 149, 1)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        borderRadius: '15px', py: '10px' }}>
            <Box sx={{width: '65%', px: '30px'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', mt: '10px'}}>
                    <Typography  component="h2" style={{marginRight: '2rem', fontWeight: 700, fontSize: '2rem'}}>Your Revenue</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <DateInfoTag message="Last 7 Days" />
                        <IconButton />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                    <Box>
                        <Typography component="h5" style={{color: 'rgba(0, 0, 0, 1)', fontSize: '4rem', fontWeight: '900'}}><span style={{fontSize: '2rem'}}>$</span>15,354.<span style={{fontSize: '2rem'}}>19</span></Typography>
                        <label style={{color: 'rgba(163, 163, 163, 1)', fontWeight: '700'}} >Cost:</label>
                        <Typography component="p" style={{color: 'rgba(82, 82, 82, 1)', fontSize: '1.5rem', fontWeight: '700', marginTop:'-6px'}}>-$ 5,040.00</Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'column'}}>

                        <label>Last 7 Days Revenue</label>
                        <label>Average Revenue</label>
                    </Box>  
                </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ width: '35%', px: '30px'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between',  mt: '10px' }}>
                    <Typography style={{color: 'rgba(0, 0, 0, 1)', fontSize: '1.5rem', fontWeight: '700'}}>Incoming Payments</Typography>
                    <IconButton />
                </Box>
                <Box>
                    <Typography component="p" style={{color: 'rgba(0, 0, 0, 1)', fontWeight: '800', fontSize: '3.5rem'}}><span style={{fontSize: '2rem'}}>$</span>2400<span style={{fontSize: '2rem'}}>.00</span></Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', mr: '2rem', width: '70%'}}>
                        <Box>
                            <label style={{color: 'rgba(163, 163, 163, 1)', fontSize: '1.2rem'}}>Invoices</label>
                            <Typography style={{color: 'rgba(82, 82, 82, 1)', fontSize: '1.4rem', fontWeight: '700'}}>$1,000.00</Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Box>
                            <label style={{color: 'rgba(163, 163, 163, 1)', fontSize: '1.2rem'}}>Services</label>
                            <Typography style={{color: 'rgba(82, 82, 82, 1)', fontSize: '1.4rem', fontWeight: '700'}}>$1,400.00</Typography>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { Revenue };