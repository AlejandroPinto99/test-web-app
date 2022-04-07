import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { DashboardLayout } from './dashboard-layout';
import {ClientList} from './client-list/ClientList'
import {PaymentsList} from './payments-list/PaymentList'
import {Revenue} from './your-revenue/Revenue'
import {StatisticsContainer} from './bussiness-statistics/statistics-container'
import Chart from './chart/Chart'
import ChartConatainer from './chart/ChartContainer'

import { gtm } from '../../lib/gtm';


const Overview = () => {
  const [displayBanner, setDisplayBanner] = useState(true);

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
          Dashboard
        </title>
      </Head>
      <Box component="main" sx={{py: -1, ml: 15, display: 'flex'}}>
          <Grid container >
            <Grid item xs={12}>
                <Box sx={{ mb: 4, ml: 2}}>
                  <Typography variant="h4" style={{fontWeight: '500'}}>
                    Good Morning
                  </Typography>
                </Box>
                <Revenue />           
                <StatisticsContainer />
            </Grid>
            <Grid item md={12} xs={12}>
                <ChartConatainer
                title="Revenue" message="This is the amount of money you earned in the last 7 days" /> 
            </Grid>  
          </Grid>
          <Box sx={{width: '50%', height: '100%'}}>
            <Box sx={{mb: '2rem'}}>
              <ClientList title="Your Recent Clients" placeholder="Search in all Persona"/>
            </Box>
            <Box>
              <PaymentsList title="Your Buisiness Payments" placeholder="Search a Payment"/> 
            </Box>
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
