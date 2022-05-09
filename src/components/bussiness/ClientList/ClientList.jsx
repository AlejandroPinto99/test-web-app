import React, { useState } from 'react'

//Material UI components
import Container from '@material-ui/core/Container'
import TextField  from '@mui/material/TextField'
import  Box  from '@material-ui/core/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@material-ui/core';

//Material UI icons
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment  from '@material-ui/core/InputAdornment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//Helpers
import {formatCentsToDollars} from '../../../helpers/formatters'

//Hook
import { useGetCustomersQuery, useGetCustomerQuery }  from '../../../services/customersApi'

//Fonts
import {createTheme} from '@material-ui/core/styles'


//Style
import { ClientContainer, InitialsContainer, InformationContainer,  RevenueContainer, SeeAllListContainer, ListContainer } from './styles'


// export interface ClientListProps{
//     title: string;
//     placeholder: string;
// }

// export interface ClientProps{
//     name?: string;
//     email?: string;
//     revenue?: number;
// }

const Client = ({name, email, revenue = 0}) => { 

    return(
      <ClientContainer>
          
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <InitialsContainer >
                <Typography component="p" >CN</Typography>
            </InitialsContainer>

            <InformationContainer>
                <Typography component="h4" >{name}</Typography>
                <Typography component="p" >{email}</Typography>
            </InformationContainer>
        </Box>

        < RevenueContainer>
            <Typography component="h4" >$ {formatCentsToDollars(revenue)}<span>.00</span></Typography>
            <Typography component="p" >Revenue</Typography>
        </ RevenueContainer>
      </ClientContainer>
    )
}

const ClientList = ({title, placeholder}) => {
    const [search, setSearch] = useState("")

    const {
        data: customers,
        isLoading: isLoadingCustomers,
        refetch: refetchCustomers
    } = useGetCustomersQuery(); 

    const theme = createTheme({
        typography: {
            fontFamily:[
                'Lato',
                'serif',
            ].join(','),
        }
    },);
    
    return(
        <Container maxWidth="sm" >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '1rem'}}>
                <TextField
                id="serach_box"
                placeholder={placeholder}
                size="medium"
                onChange={(e) => setSearch(e.target.value)}
                sx={{width: '70%', color: 'rgba(196, 196, 196, 1)', paddingBottom: '20px', fontSize: '1rem'}}
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

            <SeeAllListContainer>
                <Typography  component="h2" >{title}</Typography>
                <Typography component="p" >  See Full List   </Typography>
                <ArrowForwardIcon />
            </SeeAllListContainer>

           <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '1rem'}}>
                <ListContainer >
                    {
                        !isLoadingCustomers && (customers?.map((customer, i) => {
                            return(
                                <Client key={i} name={customer.name} email={customer.email} revenue={customer.revenues} />
                            )
                        }))
                    }
                </ListContainer>
            </Box>
        </Container> 
    )
}

export {ClientList};
