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
import { DashboardLayout } from '../dashboard/dashboard-layout';
import {ClientList} from './ClientList/ClientList'
import {PaymentsList} from './PaymentList/PaymentList'
import {Revenue} from './Revenue/Revenue'
import {StatisticsContainer} from './Statistics/StatisticsContainer'
import Chart from './chart/Chart'
import ChartConatainer from './chart/ChartContainer'

import { gtm } from '../../lib/gtm';


const Bussiness = () => {
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
          Persona | Bussiness
        </title>
      </Head>
      <Box component="main" sx={{py: -1, ml: 15, display: 'flex'}}>
          <Grid container >
            <Grid item xs={12}>
                <Box sx={{ mb: 4, ml: 2}}>
                  <Typography variant="h4" sstyle={{fontWeight: 600, fontSize: '1.5rem'}}>
                    Good Morning, Eran. Welcome to Persona!   
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

Bussiness.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>

);

export default Bussiness;