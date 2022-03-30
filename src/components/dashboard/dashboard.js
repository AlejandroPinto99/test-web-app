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
import { OverviewLatestTransactions } from './overview/overview-latest-transactions';
import { OverviewTotalTransactions } from './overview/overview-total-transactions';

import {ClientList} from './client-list/ClientList'
import {PaymentsList} from './payments-list/PaymentList'



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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: -1,
          ml: 15
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4" sx={{fontWeight: '500'}}>
                  Good Morning
                </Typography>
              </Grid>
            
            </Grid>
          </Box>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={8}
              xs={12}
            >
              <OverviewTotalTransactions />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <ClientList title="Your Recent Clients" placeholder="Search in all Persona"/>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <OverviewLatestTransactions />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <PaymentsList title="Your Buisiness Payments" placeholder="Search a Payment" />
            </Grid>
          </Grid>
        </Container>
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
