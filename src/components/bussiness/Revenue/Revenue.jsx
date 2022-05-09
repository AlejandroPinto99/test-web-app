import React from 'react'

//Components
import { DateInfoTag } from '../../common/DateInfoTag'
import {IconButton} from '../../widgets/buttons/IconBotton'
import {Chart} from '../../common/chart'
import IncreaseIndicator from '../../common/IncreaseIndicator'

//Material UI
import {Box, Typography, Divider, Grid} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

//Services
import { useGetServicesQuery } from '../../../services/storeServiceApi'
import { useGetInvoicesQuery } from '../../../services/invoicesApi'

//Helpers
import {calculateTotal} from '../../../helpers/invoiceHelper'
import {centToDollar} from '../../../helpers/formatters'
 
//Fonts
import 'typeface-lato'

//Styles
import { RevenueContainer, RevenueTitleSection, RevenueData, IncomingPaymentValue, IncomingPaymentTitle  } from './styles'

const Revenue = () => {

    const {
      data: services,
      isLoading: isLoadingServices,
      refetch: refetchServices
    } = useGetServicesQuery()

    const {
      data: invoices,
      isLoading: isLoadingInvoices,
      refetch: refetchInvoices
    } = useGetInvoicesQuery()

    const theme = useTheme();

    const chart1Options = {
        chart: {
          background: 'transparent',
          stacked: false,
          toolbar: {
            show: false
          }
        },
        colors: ['rgba(65, 203, 112, 1)'],
        fill: {
          opacity: 1
        },
        labels: [],
        plotOptions: {
          radialBar: {
            dataLabels: {
              show: false
            },
            hollow: {
              size: '65%'
            },
            track: {
              background: 'rgba(229, 229, 229, 1)'
            }
          }
        },
        theme: {
          mode: theme.palette.mode
        }
      };

      const chart2Options = {
        chart: {
          background: 'transparent',
          stacked: false,
          toolbar: {
            show: false
          }
        },
        colors: ['rgba(216, 194, 149, 1)'],
        fill: {
          opacity: 1
        },
        labels: [],
        plotOptions: {
          radialBar: {
            dataLabels: {
              show: false
            },
            hollow: {
              size: '60%'
            },
            track: {
              background: 'rgba(229, 229, 229, 1)'
            }
          }
        },
        theme: {
          mode: theme.palette.mode
        }
      };

    //Creating a theme for font

    return(
        <RevenueContainer>
            <Box sx={{width: '65%', px: '1rem'}}>

                <RevenueTitleSection>
                    <Typography  component="h2" >Your Revenue</Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <DateInfoTag message="Last 7 Days" />
                        <IconButton />
                    </Box>
                </RevenueTitleSection>

                <Grid container >
                    <Grid item xs={6}>
                      <RevenueData>
                          <Typography component="h5" ><span >$</span>15,354.<span >19</span></Typography>
                          <label >Cost:</label>
                          <Typography component="p"> $ 5,040.00</Typography>
                      </RevenueData>
                    </Grid>

                    <Grid item xs={3}>
                      <Box sx={{ml: '2rem', mb: '2rem'}}>
                          <Box sx={{position: 'relative'}}>
                              <Chart 
                                  height={160}
                                  options={chart1Options}
                                  series={[40]}
                                  type="radialBar"
                                  width={100} />

                              <Box sx={{position: 'absolute', top: '10%' }} >
                                  <Chart 
                                      height={135}
                                      options={chart2Options}
                                      series={[10]}
                                      type="radialBar"
                                      width={100} />
                              </Box>

                              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,
                              position: 'absolute', top:'40%', right: '32%'}}>
                                  <IncreaseIndicator increase={true} value={25} />
                              </Box>
                          </Box>
                      </Box>
                    </Grid>
                                        
                    <Grid item xs={3} >
                      <Box style={{marginTop: '2rem'}}>
                          <Box sx={{display: 'flex', alignItems: 'center'}}>
                              <CircleIcon style={{fontSize: '0.7rem', color:'rgba(65, 203, 112, 1)'}} />
                              <Typography component="p" style={{fontFamily: 'Lato', color: 'rgba(82, 82, 82, 1)', fontWeight: '700', marginLeft: '1rem', fontSize: '0.8rem'}}>Last 7 Days Revenue</Typography>
                          </Box>
                          <Box sx={{display: 'flex', alignItems: 'center'}}>
                              <CircleIcon style={{fontSize: '0.7rem', color: 'rgba(216, 194, 149, 1)'}} />
                              <Typography component="p" style={{fontFamily: 'Lato', color: 'rgba(82, 82, 82, 1)', fontWeight: '700',  marginLeft: '1rem', fontSize: '0.8rem'}}> Average Revenue</Typography>
                          </Box>
                      </Box> 
                    </Grid>

                </Grid>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ width: '35%', px: '30px'}}>
                <IncomingPaymentTitle  >
                    <Typography component="h4" >Incoming Payments</Typography>
                    <IconButton />
                </IncomingPaymentTitle>
                <Box>
                    <Typography component="p" style={{color: 'rgba(0, 0, 0, 1)', fontWeight: '800', fontSize: '2rem', fontFamily: 'Lato'}}><span style={{fontSize: '1.6rem'}}>$</span>2,400<span style={{fontSize: '1.6rem'}}>.00</span></Typography>
                    <IncomingPaymentValue >
                        <Box>
                            <label >Invoices</label>
                            <Typography component="p" >$ {centToDollar(calculateTotal(invoices))}</Typography>
                        </Box>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Box>
                            <label >Services</label>
                            <Typography component="p" >$1,400.00</Typography>
                        </Box>
                    </IncomingPaymentValue>
                </Box>
            </Box>
        </RevenueContainer>
    );
};

export { Revenue };