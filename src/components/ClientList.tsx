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


const info = {'name': 'Sandra', 'email': 'clientemail@gmail.com', 'revenue': '150'}

const Client = () => {
    return(
      <Box component="div" sx={{display: 'flex', justifyContent: 'center'}}>
          <Box >
              CN
          </Box>
          <Box>
              <Typography component="h4">{info.name}</Typography>
              <Typography component="p">{info.email}</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <Typography component="span">$ {info.revenue}</Typography>
              <Typography component="span">Revenue</Typography>
          </Box>
      </Box>
    )
}

const ClientList = () => {
    return(
        <Container maxWidth="sm" >
            <Box sx={{display: 'flex', alignItems: 'center', mb: '2rem'}}>
                <TextField
                id="serach_box"
                placeholder='Search in all Persona'
                size="medium"
                sx={{width: '60%', color: 'rgba(196, 196, 196, 1)'}}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon sx={{color:'rgba(196, 196, 196, 1)'}}/>
                    </InputAdornment>),
                }} 
                variant="standard"/>
                <NotificationsNoneIcon sx={{color: 'rgba(216, 194, 149, 1)',fontSize: 30, ml: 2, cursor:'pointer'}}/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography  variant="h5" component="h2" >Your Recent Clients</Typography>
                <Typography variant="body1" component="p"  >
                    See Full List
                    <ArrowForwardIcon sx={{color: 'rgba(216, 194, 149, 1)', fontSize: 25}} />
                </Typography>
                
            </Box>

            <Box sx={{ boxShadow: 2 }} >
                <Stack>
                    <Client />
                </Stack>
            </Box>
        </Container>

        
    )
}

export default ClientList;

