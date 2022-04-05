import React from 'react'

//Material
import { Box } from '@mui/system'
import { Typography } from '@mui/material';

//Material UI icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

//components
import IncreaseIndicator from '../IncreaseIndicator'



export interface StatisticValueProps {
    title?: string;
    value?: number;
    increase?: number
}

const StatisticValue: React.FC<StatisticValueProps> = ({title, value, increase}) => {
    return(
        <Box sx={{width: '45%', px:'0.6rem'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography component="h4" style={{color: 'rgba(163, 163, 163, 1)', fontSize:'0.9rem'}}>{title}</Typography>
                <KeyboardArrowDownIcon sx={{color: 'rgba(163, 163, 163, 1)'}} />
            </Box>
            <Typography component="p" style={{color: 'rgba(0, 0, 0, 1)', fontSize:'2rem', fontWeight: '800'}}>{value}</Typography>
            <Box sx={{display:'flex', alignItems: 'center'}}>
                <IncreaseIndicator increase={true} value={25} />
            </Box>
        </Box>
    );
};

export { StatisticValue }