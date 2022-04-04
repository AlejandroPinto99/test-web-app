import React from 'react'

//Material UI
import { Box, Container, TextField, Typography } from '@material-ui/core';

//Helpers
import {formatCentsToDollars} from '../../../helpers/formatters'

//Hooks
import {useGetPaymentsQuery} from '../../../services/paymentsApi'
import { Stack } from '@mui/material';

export interface PaymentsListProps{
    title: string;
    placeholder: string;
 
}

export interface PaymentProps{
    name?: string;
    amount?: number;
    created?: number;
}

const Payment: React.FC<PaymentProps> = ({name, amount, created}) => { 

    return(
      <Box component="div" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: '1rem'}}>
            <Box sx={{ml: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                <Typography component="h4" style={{fontSize: '1.5rem', fontWeight: '400', color: 'rgba(82, 82, 82, 1)'}}>{name}</Typography>
            </Box>
          
          <Box sx={{display: 'flex', flexDirection: 'column', ml: '2rem', mr: '1rem'}}>
              <Typography component="span" style={{fontWeight: '600', fontSize: '1.5rem', textAlign:'right', color: 'rgba(82, 82, 82, 1)'}}>$ {formatCentsToDollars(amount)}<span style={{fontSize: '1rem'}}>.00</span></Typography>
              <Typography component="span" style={{textAlign: 'right', color: 'rgba(163, 163, 163, 1)'}}>{created}</Typography>
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
   
    return(
        <Container maxWidth="sm">
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                <Typography  variant="h5" component="h2" style={{marginLeft: '2.5rem', fontWeight: 600, fontSize: '1.8rem', }}>{title}</Typography>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start', mb: '1rem', ml: '2.5rem'}}>
                <TextField
                    id="outlined-textarea"
                    placeholder={placeholder}
                    style={{width: '70%', color: 'rgba(196, 196, 196, 1)', paddingBottom: '20px'}}
                    size="medium"
                    InputProps={{
                        style: {
                            height: '3rem',
                            fontSize: '1.5rem'
                        }
                    }
                }/>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '2rem', mb: '2rem'}}>
                <Stack sx={{ width: '85%', height: '300px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', 
                borderRadius: '20px', overflow: "hidden", overflowY: 'scroll'}}>
                    {
                        !isLoadingPayments && (payments?.map((payment, i) => {
                            return(
                                <Payment key={i} name={payment.customer?.name} amount={payment.amount} created={payment.created} />
                            )
                        }))
                    }
                </Stack>
            </Box>

        </Container> 
    );
};

export { PaymentsList }