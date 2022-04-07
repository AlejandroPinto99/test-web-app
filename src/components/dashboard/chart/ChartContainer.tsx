import React from 'react'

import {Box, Typography} from '@mui/material';
import ApexChart from './ApexChart'

import {DateInfoTag} from '../DateInfoTag'

export interface ChartContainerProps{
    title: string;
    message: string
}

const ChartContainer: React.FC<ChartContainerProps> = (props) => { 
    return(
        <Box sx={{ml: 4, mt: 2, shadowBox:'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}} >
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
                <Typography style={{fontFamily: 'Lato', fontSize: '1.5rem', fontWeight: 900}}>
                    Your {props.title}<span> . </span>Total {props.title} </Typography>
                <DateInfoTag message="Last 7 Days"/>
            </Box>
            <Typography style={{fontFamily: 'Lato', fontSize: '1rem', color: '#525252'}}>{props.message}</Typography>
            <ApexChart />
        </Box>
    )
}

export default ChartContainer