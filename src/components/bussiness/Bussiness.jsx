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
import ChartConatainer from './chart/ChartContainer'

import { gtm } from '../../lib/gtm';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Bussiness = () => {
  const [displayBanner, setDisplayBanner] = useState(true);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);


  return (
    <>
      <Head>
        <title>
          Persona | Bussiness
        </title>
      </Head>
      <Box component="main" 
        sx={{py: -1, ml: 20}}>
         
        <Box 
          sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h4" style={{fontWeight: 600, fontSize: '1.5rem'}}>
              Good Morning, Eran. Welcome to Persona!
          </Typography>
          <NotificationsNoneIcon style={{color: '#D8C295', fontSize: '1.8rem', marginRight: '3.5rem', cursor: 'pointer'}} />
        </Box>

        <Box 
          style={{display: 'flex'}}>
            <Grid containerspacing={3} 
              style={{width: '65%'}}>
              <Grid item xs={12}>
                    <Revenue />
              </Grid>
              <Grid item xs={12}>
                <StatisticsContainer />
              </Grid>
              <Grid item xs={12}>
                  <ChartConatainer
                  title="Revenue" message="This is the amount of money you earned in the last 7 days" /> 
              </Grid>  
            </Grid>

            <Box sx={{width: '35%'}}>
              <Box sx={{mb: '2rem'}}>
                <ClientList title="Your Recent Clients" placeholder="Search in all Persona"/>
              </Box>
              <Box>
                <PaymentsList title="Your Buisiness Payments" placeholder="Search a Payment"/> 
              </Box>
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