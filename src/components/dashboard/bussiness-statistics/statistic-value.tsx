import React from 'react'

//Material
import { Box } from '@mui/system'
import { Typography } from '@mui/material';

//Material UI icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



export interface StatisticValueProps {
    title?: string;
    value?: number;
    increase?: number
}

const StatisticValue: React.FC<StatisticValueProps> = ({title, value, increase}) => {
    return(
        <Box sx={{width: '45%', px:'1rem'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography component="h4" style={{color: 'rgba(163, 163, 163, 1)', fontSize:'1.2rem'}}>{title}</Typography>
                <KeyboardArrowDownIcon sx={{color: 'rgba(163, 163, 163, 1)'}} />
            </Box>
            <Typography component="p" style={{color: 'rgba(0, 0, 0, 1)', fontSize:'4rem', fontWeight: '800'}}>{value}</Typography>
            <Box sx={{display:'flex', alignItems: 'center'}}>
                <ArrowUpwardIcon />
                <Typography component="h4" style={{fontSize: '1.5rem'}}>{increase}%</Typography>
            </Box>
        </Box>
    );
};

export { StatisticValue }