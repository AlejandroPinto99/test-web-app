import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Grid,
  Typography
} from '@mui/material';
import { DashboardLayout } from '../dashboard/dashboard-layout';

//API

import { useGetTransactionsQuery } from '../../services/transactionsApi'

//Cards
import Balance from './Balance';
import AccountDetails from './AccountDetails';
import TaxAvailability from './TaxAvailabilty';
import AvailablePoints from './AvailablePoints';
import Transactions from './Transactions/Transactions';
//Chart
import ChartContainer from './chart/ChartContainer'

import { gtm } from '../../lib/gtm';

import { useGetPaymentsQuery } from '../../services/paymentsApi'


const Overview = () => {
  const [displayBanner, setDisplayBanner] = useState(true);
  const {data, isLoading, refetch} = useGetPaymentsQuery()

  console.log({data})


  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  useEffect(() => {
    // Restore the persistent state from local/session storage
    const value = globalThis.sessionStorage.getItem('dismiss-banner');

    if (value === 'true') {
      // setDisplayBanner(false);
    }
  }, []);

  const handleDismissBanner = () => {
    // Update the persistent state
    // globalThis.sessionStorage.setItem('dismiss-banner', 'true');
    setDisplayBanner(false);
  };

  return (
    <>
      <Head>
        <title>
          Persona | Finance
        </title>
      </Head>
      <Box component="main" sx={{py: -1, ml: 20}}>
          <Grid container >
            <Grid item xs={12}>
                <Box sx={{ mb: 2}}>
                  <Typography variant="h4" style={{fontWeight: 600, fontSize: '1.5rem'}}>
                    Good Morning, Eran. Welcome to Persona!
                  </Typography>
                </Box>     
            </Grid>
          </Grid>

          <Box style={{display: 'flex'}}>
              <Grid container spacing={3} style={{width: '65%'}}>
                  <Grid item xs={12} xl={7} >
                      <Balance />
                  </Grid>
                  <Grid item xs={12} xl={5} >
                      <AccountDetails />
                  </Grid>
                  <Grid item xs={12} xl={7}  >
                      <TaxAvailability />
                  </Grid>
                  <Grid item xs={12} xl={5} >
                      <AvailablePoints />
                  </Grid>
                  <Grid item xs={12}>
                      <ChartContainer />
                  </Grid>
              </Grid>

              <Transactions />
            </Box>
            
      </Box>
    </>
  );
};

Overview.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>

);

export default Overview;
