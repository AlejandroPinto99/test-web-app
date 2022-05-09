import React, {useState}  from 'react'

//Material
import { Box } from '@mui/system'
import { Typography } from '@mui/material';

//Material UI icon


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

//components
import IncreaseIndicator from '../../common/IncreaseIndicator'

import { StatisticsValueTitle, StatisticsValueData } from './styles'

// export interface StatisticValueProps {
//     title?: string;
//     value?: number;
//     increase?: number
// }

const StatisticValue = ({title, value, increase}) => {
    const [open, setOpen] = useState(true);

    return(
        <Box sx={{px:'0.6rem', mb: '0.5rem'}}>
            
            <StatisticsValueTitle >
                <Typography component="h4" >{title}</Typography>
                <Box style={{cursor: 'pointer'}}  onClick={() => setOpen(!open)}>
                    <KeyboardArrowDownIcon sx={{color: 'rgba(163, 163, 163, 1)', transform: `${!open ? 'rotate(180deg)': ''}`}} />
                </Box>
            </StatisticsValueTitle>

            <StatisticsValueData open={open}>
                <Typography component="p" >{value}</Typography>
                <Box component="div" >
                    <IncreaseIndicator increase={true} value={25} />
                </Box>
            </StatisticsValueData>
            
        </Box>
    );
};

export { StatisticValue }