import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Grid,
  Typography
} from '@mui/material';
import { DashboardLayout } from '../dashboard/dashboard-layout';

//API

import { useGetAccountStateQuery } from '../../services/accountApi'
import { useGetTaxQuery } from '../../services/taxApi'
import { useGetFinancialAccountQuery } from '../../services/financialAccountApi'

//Cards
import Balance from './Balance';
import AccountDetails from './AccountDetails';
import Liability from './TaxLiability';
import AvailablePoints from './AvailablePoints';
import Transactions from './Transactions/Transactions';
//Chart
import ChartContainer from './chart/ChartContainer'

import { gtm } from '../../lib/gtm';

//Icons
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Loading from '../Loading/Loading';


const Finance = () => {
  const [displayBanner, setDisplayBanner] = useState(true);
  const {data: account, isLoading, isSuccess} = useGetAccountStateQuery()
  const {data: financeAccount, isLoading: isFinanceLoading, isSuccess: financeIsSuccess } = useGetFinancialAccountQuery()
  const {data: taxes, isLoading: isTaxLoading, isSuccess: taxesIsSuccess} = useGetTaxQuery()
  
  const pageLoading = () => {return isLoading && isFinanceLoading && isTaxLoading}
  const pageSuccess = () => {return isSuccess && financeIsSuccess && taxesIsSuccess}

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

  return (
    pageLoading() ? 
      <Loading /> :
        pageSuccess() ? 
        <>
      <Head>
        <title>
          Persona | Finance
        </title>
      </Head>
      {
        isSuccess && financeIsSuccess && taxesIsSuccess && (
          <Box component="main" sx={{py: -1, ml: 20}}>
        
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Typography variant="h4" style={{fontWeight: 600, fontSize: '1.5rem'}}>
                Good Morning, Eran. Welcome to Persona!
              </Typography>

              <NotificationsNoneIcon style={{color: '#D8C295', fontSize: '1.8rem', marginRight: '3.5rem', cursor: 'pointer'}} />
            </Box>     
           
            <Box style={{display: 'flex'}}>
                <Grid container spacing={3} style={{width: '65%'}}>
                    <Grid item xs={12} xl={7} >
                        <Balance accountBalance={account.balance.accountBalance} paymentsBalance={account.balance.paymentsBalance} />
                    </Grid>
                    <Grid item xs={12} xl={5} >
                        <AccountDetails
                        bankAddress="200 West St, New York, NY 10282" 
                        routingNumber={financeAccount.financial_addresses[0].aba.routing_number} 
                        accountName={financeAccount.financial_addresses[0].aba.account_holder_name}
                        accountNumber={financeAccount.financial_addresses[0].aba.account_number}
                        />
                    </Grid>
                    <Grid item xs={12} xl={7}  >
                        <Liability tax={taxes} />
                    </Grid>
                    <Grid item xs={12} xl={5} >
                        <AvailablePoints points={account.points}/>
                    </Grid>
                    <Grid item xs={12}>
                        <ChartContainer />
                    </Grid>
                </Grid>

                <Transactions />
            </Box>
      </Box>
        )
      }
    </> : null

  );
};

Finance.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>

);

export default Finance;
