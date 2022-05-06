import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

//Components
import {DateInfoTag} from '../../common/DateInfoTag'
import {IconButton} from '../../widgets/buttons/IconBotton'
import {StatisticValue } from './StatisticsValue'

// export interface StatisticsProps{
//     title?: string;
//     dateInfo?: string;
//     param1?: string;
//     param1Value: number;
//     param1Increase: number;
//     param2?: string;
//     param2Value: number;
//     param2Increase: number;
// }

const StatisticCard = ({title, dateInfo, param1, param1Value, param1Increase, param2, param2Value, param2Increase}) => {
    return(
        <Grid container sx={{border: '1px solid rgba(216, 194, 149, 1)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        borderRadius: '15px', p: '15px', maxHeight: '150px'}}>
            <Grid item xs={12}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography  component="h4" style={{marginRight: '2rem', fontWeight: 900, fontSize: '1.5rem'}}>{title}</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <DateInfoTag message={dateInfo} />
                        <IconButton />
                    </Box>
                </Box>
            </Grid>
            
            <Grid item xs={6} >
                <StatisticValue title={param1} value={param1Value} increase={param1Increase}/>
            </Grid>
            
            <Grid item sx={6} >
                <StatisticValue title={param2} value={param2Value} increase={param2Increase}/>
            </Grid>
         
        </Grid>
    );
};

export { StatisticCard }