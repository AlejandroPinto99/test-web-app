import React from 'react'

//Material UI
import { Box, Container, TextField, Typography } from '@material-ui/core';
import InputAdornment  from '@material-ui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

//Helpers
import {formatCentsToDollars} from '../../../helpers/formatters'
import {getPaymentStatus, getPaymentStatusColor} from '../../../helpers/paymentHelper'

//Hooks
import {useGetPaymentsQuery} from '../../../services/paymentsApi'
import { Stack } from '@mui/material';

//Fonts
import {createTheme} from '@material-ui/core/styles'

export interface PaymentsListProps{
    title: string;
    placeholder: string;
 
}

export interface PaymentProps{
    name: string | undefined;
    amount: number | undefined;
    created: number ;
    status: string ;
    type: string | undefined;
    refunded?: boolean ;
    disputed?: boolean;
}

const Payment: React.FC<PaymentProps> = (props?) => { 

    return(
      <Box component="div" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '1rem'}}>
            <Box sx={{ml: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                <Typography component="h4" style={{fontSize: '1.2rem', fontWeight: '400', color: 'rgba(82, 82, 82, 1)', fontFamily: 'Lato'}}>{props.name}</Typography>
            </Box>
          
          <Box sx={{display: 'flex', flexDirection: 'column', ml: '2rem', mr: '1rem'}}>
              <Typography component="span" style={{fontWeight: '600', fontSize: '1.2rem', textAlign:'right', color: 'rgba(82, 82, 82, 1)'}}>${formatCentsToDollars(props.amount)}<span style={{fontSize: '1rem'}}>.00</span></Typography>
              <Typography component="span" style={{textAlign: 'right', color: `${getPaymentStatusColor(props.status, props.created).A100}`}}>{getPaymentStatus(props.type, props.status, props.created, props.refunded, props.disputed)}</Typography>
          </Box>
      </Box>
    )
}


const PaymentsList: React.FC <PaymentsListProps> = ({title, placeholder}) => {

    const {
        data: payments,
        isLoading: isLoadingPayments,
        refetch: refetchPayments
    } = useGetPaymentsQuery(); 

      //Creating a theme for font
      const theme = createTheme({
        typography: {
            fontFamily:[
                'Lato',
                'serif',
            ].join(','),
        }
    },);
   
    return(
        <Container maxWidth="sm">
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                <Typography  variant="h5" component="h2" style={{marginLeft: '2.5rem', fontWeight: 900, fontSize: '1.5rem', fontFamily: 'Lato' }}>{title}</Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start', mb: '1rem', ml: '2.5rem'}}>
            <TextField
                id="serach_box"
                placeholder={placeholder}
                size="medium"
                style={{width: '80%', color: 'rgba(196, 196, 196, 1)', paddingBottom: '20px', fontSize: '1rem'}}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon sx={{fontSize: '35px', color:'rgba(196, 196, 196, 1)'}}/>
                    </InputAdornment>),
                style: {
                    height: '3rem',
                    fontSize: '1.5rem'
                }

                }} 
                variant="standard"/>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '2rem', mb: '2rem'}}>
                <Stack sx={{ width: '85%', height: '300px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', 
                borderRadius: '20px', overflow: "hidden", overflowY: 'scroll'}}>
                    {
                        payments && (payments.map((payment, i: number) => {
                            return(
                                <Payment key={i} name={payment.customer?.name} amount={payment.amount} created={payment.created!} 
                                status={payment.status!} type={payment.type} refunded={payment.refunded} disputed={payment.disputed} />
                            )
                        }))
                    }
                </Stack>
            </Box>
        </Container> 
    );
};

export { PaymentsList }