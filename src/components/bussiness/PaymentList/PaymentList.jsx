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

import { PaymentTitle, PaymentInfo, TitleContainer  } from './styles'
import { ListContainer } from '../ClientList/styles'

// export interface PaymentsListProps{
//     title: string;
//     placeholder: string;
 
// }

// export interface PaymentProps{
//     name: string | undefined;
//     amount: number | undefined;
//     created: number ;
//     status: string ;
//     type: string | undefined;
//     refunded?: boolean ;
//     disputed?: boolean;
// }

const Payment = (props) => { 

    return(
         <Box component="div" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '1rem'}}>
            
            <PaymentTitle >{props.name}</PaymentTitle>
            
          
            <PaymentInfo props={props} getPaymentStatusColor={getPaymentStatusColor} >
                <Typography component="h3" s>${formatCentsToDollars(props.amount)}<span style={{fontSize: '1rem'}}>.00</span></Typography>
                <Typography component="p">{getPaymentStatus(props.type, props.status, props.created, props.refunded, props.disputed)}</Typography>
            </PaymentInfo>
        </Box>
    )
}


const PaymentsList = ({title, placeholder}) => {

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
            <TitleContainer  >
                <Typography  component="h2" >{title}</Typography>
            </TitleContainer>

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
                <ListContainer >
                    {
                        payments && (payments.map((payment, i) => {
                            return(
                                <Payment key={i} name={payment.customer?.name} amount={payment.amount} created={payment.created} 
                                status={payment.status} type={payment.type} refunded={payment.refunded} disputed={payment.disputed} />
                            )
                        }))
                    }
                </ListContainer>
            </Box>
        </Container> 
    );
};

export { PaymentsList }