import React, { useState } from 'react'

import {Box, Typography, Button, Grid} from '@mui/material';
import { CharTimeButton, SelectedCharTimeButton, ChartTag, ChartContainerStyle } from './styles'

import ApexChart from './ApexChart'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const chartTimeOptions = ['3 months', '6 months', '1 year', '2 years', 'YTD', 'Custom']

const ChartContainer= () => { 
    const [chartTime, setChartTime] = useState('6 months')

    return(
        <ChartContainerStyle >
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
                <Typography style={{fontFamily: 'Lato', fontSize: '1.5rem', fontWeight: 900}}>
                    Your Insights
                </Typography>
                <Box style={{display: 'flex', alignItems: 'center'}}>
                    <Typography component="p">
                        See more Insights 
                    </Typography>
                    <ArrowForwardIcon fontSize="small" style={{color:'#D8C295'}} />
                </Box>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem'}}>
                {
                    chartTimeOptions && chartTimeOptions.map((item, i) => (
                    <div>
                        {
                            item === chartTime ? (<CharTimeButton  variant="text" onClick={()=> setChartTime(item)}>{item}</CharTimeButton>) :
                           (<SelectedCharTimeButton variant="text" onClick={()=> setChartTime(item)}>{item}</SelectedCharTimeButton>)
                        }
                    </div>
                    ))
                }
            </Box>

            <Grid container >
                <Grid item xs={6}>
                    <ChartTag>
                        <Typography component="h4">INCOME</Typography>
                        <Typography component="p">
                            <span>$ </span>
                            17,299
                            <span>.00</span>
                        </Typography>
                    </ChartTag>
                </Grid>
                <Grid item xs={6}>
                    <ChartTag>
                        <Typography component="h4">INCOME</Typography>
                        <Typography component="p">
                            <span>$ </span>
                            5,345
                            <span>.00</span>
                        </Typography>
                    </ChartTag>
                </Grid>
            </Grid>
        

            <ApexChart />
        </ChartContainerStyle>
    )
}

export default ChartContainer;