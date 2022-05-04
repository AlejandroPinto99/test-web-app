import {
    Box,
    TextField,
    Typography
  } from '@mui/material';

  import { formatDollars, formatCentsToDollars } from '../../../helpers/formatters'

  //Icons
  import MoneyIn from '../../../icons/money_in';
  import MoneyOut from '../../../icons/money_out';
  import CardOut from '../../../icons/card_out';


  const TransactionOverview = ({transactions}) => {

    const getTransactionIcon = (type) => {
        if (type === "received_credit")
          return <MoneyIn style={{ marginRight: 15, marginTop: 2 }} />;
        else if (type === "received_debit")
          return <CardOut style={{ marginRight: 15, marginTop: 2 }} />;
        else return <MoneyOut style={{ marginRight: 15, marginTop: 2 }} />;
      }

      return(
        <Box sx={{width:'100%' }} >
            {
                transactions.map((transaction, i) => {
                    const description = transaction.description.split('|')
                    return((
                        <Box key={i} style={{display:'flex', justifyContent:'space-between', width:'100%', margin: '1rem 0rem', cursor: 'pointer'}}>
                            <Box style={{display: 'flex', alignItems: 'center'}}>
                                {getTransactionIcon(transaction.type)}
                                <Box>
                                    <Typography style={{color:'#525252', fontSize: '1.2rem', fontWeight:600, fontFamily:'Lato'}}>{description[1]}</Typography>
                                    {
                                        transaction.tag &&
                                        (                
                                        <Typography style={{color:'#A3A3A3', fontSize: '0.8rem', fontWeight: 500, fontFamily:'Lato'}}>
                                            {transaction.tag === 'BUSSINESS' ? 'Bussiness Payment' : 'Personal Payment'}
                                        </Typography>
                                        )
                                    }
                                </Box>
                               
                            </Box>
                            <Typography style={{color:'#525252', fontSize: '1.4rem', fontWeight: 900, fontFamily:'Lato'}}>
                                {formatDollars(formatCentsToDollars(transaction.amount))}
                            </Typography>
                       </Box>
                    ))
                })
            }
           
        </Box>
      )
  };

  export default TransactionOverview;