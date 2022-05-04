import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import moment from 'moment'
import {Divider, Box} from '@mui/material';

import { useGetTransactionsQuery } from '../../../services/transactionsApi'
import TransactionsOverview from './TransactionOverview'

const TransactionsList = ({transactions}) => {
  const {data,isLoading, refetch} = useGetTransactionsQuery()
  const days = Object.keys(transactions)
  return (
    <List sx={{ width: '100%', maxWidth: 415, maxHeight: 686, bgcolor: 'background.paper', border: '1px solid #D8C295',
     borderRadius: '15px', marginTop: '1rem', overflow: "hidden", overflowY: 'scroll'}}>
       {
         days.map((day, i) => (
          <ListItem key={i} style={{display: 'flex', flexDirection: 'column', alignItems:'start'}}>
            <Box>
              <ListItemText secondary={`${moment().dayOfYear(day).format('Do MMM YYYY')}`} />
              <Divider />
            </Box> 
            <TransactionsOverview transactions={transactions[day]} />
        </ListItem>
         ))
       }
    </List>
  );
}

export default TransactionsList