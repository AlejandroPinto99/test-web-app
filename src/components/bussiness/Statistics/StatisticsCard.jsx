import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

//Components
import {DateInfoTag} from '../../common/DateInfoTag'
import {IconButton} from '../../widgets/buttons/IconBotton'
import {StatisticValue } from './StatisticsValue'

//Styles
import { StatisticGrid, TitleContainer } from './styles'

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
        <StatisticGrid container>
            <Grid item xs={12}>
                <TitleContainer >
                    <Typography  component="h4" >{title}</Typography>
                    <Box component="div">
                        <DateInfoTag message={dateInfo} />
                        <IconButton />
                    </Box>
                </TitleContainer>
            </Grid>
            
            <Grid item xs={6} >
                <StatisticValue title={param1} value={param1Value} increase={param1Increase}/>
            </Grid>
            
            <Grid item sx={6} >
                <StatisticValue title={param2} value={param2Value} increase={param2Increase}/>
            </Grid>
         
        </StatisticGrid>
    );
};

export { StatisticCard }