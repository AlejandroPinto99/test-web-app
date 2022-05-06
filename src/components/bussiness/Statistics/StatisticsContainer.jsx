import React from 'react'

//Material UI
import { Box, Container, Typography, Grid } from '@mui/material';

//Components
import {StatisticCard} from './StatisticsCard'

//Services
import {useGetCustomersQuery} from '../../../services/customersApi'
import { useGetInvoicesQuery } from '../../../services/invoicesApi'
import {useGetEventsQuery,} from '../../../services/storeServiceApi'

//helpers
import {getActiveClients} from '../../../helpers/customersHelper'


const StatisticsContainer = () => {
    const {
        data: invoices,
        isLoading: isLoadingInvoices,
        refetch: refetchInvoices
      } = useGetInvoicesQuery()

      const {
          data: customers,
          isLoading: isLoadingCustomers,
          refetch: refetchCustomers
      } = useGetCustomersQuery()

      const {
          data: events,
          isLoading: isLoadingEvent,
          refetch: refetchEvent
      } = useGetEventsQuery()

    return(
        <Container >
            <Typography component="h3" style={{fontSize: '1.5rem', color: 'rgba(0, 0, 0, 1)', fontWeight: '900', marginBottom: '0.8rem'}}>Your Bussiness Statistics</Typography>
            {
                invoices && events && customers &&
                (
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <StatisticCard title="Active Clients" dateInfo="Year to date" 
                            param1="Active Clients" param1Value={getActiveClients(customers)} param1Increase={4}
                            param2="Client Retention" param2Value={78.63} param2Increase={8} />
                        </Grid>
                       
                        <Grid item xs={6}>
                            <StatisticCard title="Bussiness Activity" dateInfo="Last 30 Days"
                                param1="Sessions Scheduled" param1Value={events.length} param1Increase={16}
                                param2="Invoices Sent" param2Value={invoices.length} param2Increase={3}/>
                        </Grid>
                    </Grid>
                )
            }
           
        </Container>     
    );
};

export {StatisticsContainer};