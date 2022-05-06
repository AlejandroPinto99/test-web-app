import React, { useState, useEffect } from 'react'

import {Box, Typography, Button, Grid} from '@mui/material';
import { CharTimeButton, SelectedCharTimeButton, ChartTag, ChartContainerStyle } from './styles'

import ApexChart from './ApexChart'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import moment from 'moment'

import { formatDollars, formatCentsToDollars } from '../../../helpers/formatters'
import { useGetCashFlowQuery } from '../../../services/financialAccountApi'

//Icons
import Legend from '../../../icons/legend'
import Loading from '../../Loading/Loading';


const chartTimeOptions = ['3 months', '6 months', '1 year', '2 years', 'YTD', 'Custom']


const ChartContainer= () => {  
    const [chartTime, setChartTime] = useState("YTD");
    const [dataIndex, setDataIndex] = useState(0)
    const [zoom, setZoom] = useState()

    const {
        data: cashFlow,
        isLoading: isLoadingCashFlow,
        isSuccess
      } = useGetCashFlowQuery(
        { timezone: "America/New_York"}
      );
    
    const expensesValues = cashFlow?.expensesArr.map(item => {
        if(item.value < 0)
        return formatCentsToDollars(item.value*(-1))
        return formatCentsToDollars(item.value)
    })

    const expensesDate = cashFlow?.expensesArr.map(item => moment(item.date).format("MMM Do YYYY"))
    const incomesValues = cashFlow?.incomeArr.map(item => formatCentsToDollars(item.value))

    const getMinIndex = (months) => {
        const minDate = moment(cashFlow.expensesArr[expensesValues.length - 1].date).subtract(months, "months").format("YYYY-MM-DD") 
        const index = cashFlow.expensesArr.map(e => e.date).indexOf(minDate);
        return index
    }

    const changeZoom = () => {
        switch(chartTime){
            case "3 months": {
                let max = expensesValues.length - 1
                let min = getMinIndex(3)
                setZoom(
                    {
                        max: max,
                        min: min
                    }
                )
                break;
            }
            case "6 months": {
                let max = expensesValues.length - 1
                let min = getMinIndex(6)
                setZoom(
                    {
                        max: max,
                        min: min
                    }
                )
                break;
            }
            case "1 year": {
                let max = expensesValues.length - 1
                let min = getMinIndex(12)
                setZoom(
                    {
                        max: max,
                        min: min
                    }
                )
                break;
            }
            case "2 years": {
                let max = expensesValues.length - 1
                let min = getMinIndex(24)
                setZoom(
                    {
                        max: max,
                        min: min
                    }
                )
                break;
            }
            case "YTD": 
            default: {
                setZoom(
                    {
                        max: 278,
                        min: 0
                    }
                    )
                }
            }
    }

    useEffect(() => {
        changeZoom()
    }, [chartTime])


    return(
        isLoadingCashFlow ?
        <Box style={{height: '100px', position: 'relative'}}>
            <Loading />
        </Box> : 
        isSuccess ? 
        <ChartContainerStyle >
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
            <Typography style={{fontFamily: 'Lato', fontSize: '1.5rem', fontWeight: 900}}>
                Your Insights
            </Typography>
            <Box style={{display: 'flex', alignItems: 'center'}}>
                <Typography component="p" style={{fontSize: '0.8rem'}}>
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
            {
               isSuccess && (
                <>
                    <Grid item xs={6}>
                        <ChartTag>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography component="h4" >INCOME</Typography>
                                <Legend color="#D8C295"  width="4rem" height="3rem"/>
                            </Box>
                            <Typography component="p">
                                {formatDollars(incomesValues[dataIndex])}
                            </Typography>
                        </ChartTag>
                    </Grid>
                    <Grid item xs={6}>
                        <ChartTag>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                <Typography component="h4">EXPENSE</Typography>
                                <Legend color="#525252" width="4rem" height="3rem"/>
                            </Box>
                            <Typography component="p">
                                {formatDollars(expensesValues[dataIndex])}
                            </Typography>
                        </ChartTag>
                    </Grid>
                </>
                )
            }
        </Grid>
    
        {
            zoom && (
            <ApexChart 
            setDataIndex={setDataIndex} 
            expensesValues={expensesValues} 
            incomesValues={incomesValues} 
            expensesDate={expensesDate}
            Zoom={ zoom }
            />
            )
        }
       
    </ChartContainerStyle> : null
            
    )
}

export default ChartContainer;