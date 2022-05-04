import React from 'react'

//Material UI
import {Box, Typography} from '@mui/material';

import StatisticArrow from '../../icons/StatisticsArrow'

const IncreaseIndicator = ({increase, value}) => {

    const TextColor = `${increase ? '#41CB70' : '#EE5D5D'}`;
    const BackgroundColor = `${increase ? '#41CB7033' : '#EE5D5D33'}`;

    return(
        <Box sx={{display: 'flex'}}>
            <label style={{transform: `${increase ? '' : 'rotate(180deg)'}`,
             background: `${BackgroundColor}`, 
            borderRadius: '100%', padding: '2px 6px 0px 6px'}}>
                <StatisticArrow ArrowColor={TextColor} />
            </label>
            <Typography component="h2" style={{fontFamily: 'Lato', marginLeft: '0.2rem', fontWeight: 700, color: `${TextColor}`}}> {value}% </Typography>
        </Box>
    );
};

export default IncreaseIndicator;