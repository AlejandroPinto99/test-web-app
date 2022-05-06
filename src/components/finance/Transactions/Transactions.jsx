import { useState } from 'react'
import moment from 'moment'
import _ from 'lodash'

//components
import TransactionsList from './TransactionsList';

import {
    Box,
    TextField,
    Typography
  } from '@mui/material';

//Styles
import { Title, SeeList, StyledTextField} from './styles'

//Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import Loading from '../../Loading/Loading';

//hooks
import { useGetTransactionsQuery } from '../../../services/transactionsApi'

const Transactions = () => {
    const [search, setSearch] = useState('')

    const {data: transactions ,isLoading, isSuccess} = useGetTransactionsQuery (undefined, 
        {
          selectFromResult: ({data, isLoading, isSuccess}) => {
            const transactionsEntries = {}
            data?.forEach(item => {
              const transactionDate = moment.unix(item.created);
              const dayOfYear = transactionDate.dayOfYear()
              const month = transactionDate.month()
              const day = transactionDate.date();
              if(!transactionsEntries[dayOfYear]){
                transactionsEntries[dayOfYear] = []
              }
    
              transactionsEntries[dayOfYear] = _.sortBy([ ...transactionsEntries[dayOfYear], item], item => item.created)
    
            })
            return{
              data: transactionsEntries,
              isLoading,
              isSuccess
            }
          }
        });

    return(
      isLoading ?
      <Box style={{width: '35%',  position: 'relative'}}>
          <Loading />
      </Box> : 
        isSuccess ? 
        <Box style={{width: '35%', display: 'flex', flexDirection: 'column', marginLeft: '1.5rem'}}>
        <Box style={{display: 'flex', justifyContent:'space-around', alignItems: 'center'}}>
            <Title>Transactions</Title>
            <SeeList>
                <Typography component="p">
                    See Full List
                </Typography>
                <ArrowForwardIcon style={{color: '#D8C295', fontSize: '1.5rem', marginLeft: '0.2rem'}}/>
            </SeeList>
            
        </Box>
            <StyledTextField
            id="outlined-search" 
            label="Search a Transaction" 
            type="search" 
            style={{margin: '0.2rem 3rem'}}
            onChange={e => setSearch(e.target.value)}
          />

        <Box style={{display: 'flex', justifyContent:'center'}}>
            <TransactionsList transactions={transactions} search={search}/>
        </Box>
        
    </Box>
     : null)
};

export default Transactions;