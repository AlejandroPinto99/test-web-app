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

const info = {'name': 'Sandra Buck', 'email': 'clientemail@gmail.com', 'revenue': '150'}

const Client = () => {
    return(
      <Box component="div" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mb: '1rem'}}>
          
          <Box sx={{border: '1px solid rgba(216, 194, 149, 1)', borderRadius:'100%', marginRight: '2rem', boxShadow: '10px'}}>
              <Typography component="p" style={{ fontSize: '1rem', fontWeight: '500', padding: '15px 17px'}}>CN</Typography>
          </Box>
          <Box sx={{mr: '2rem'}}>
              <Typography component="h4" style={{fontSize: '1.2rem', fontWeight: '600'}}>{info.name}</Typography>
              <Typography component="p" style={{color: 'rgba(82, 82, 82, 1)'}}>{info.email}</Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', ml: '2rem'}}>
              <Typography component="span" style={{fontWeight: '600', fontSize: '1.5rem', textAlign:'right'}}>$ {info.revenue}<span style={{fontSize: '1rem'}}>.00</span></Typography>
              <Typography component="span" style={{textAlign: 'right', color: 'rgba(163, 163, 163, 1)'}}>Revenue</Typography>
          </Box>
      </Box>
    )
}

const ClientList = () => {

    return(
        <Container maxWidth="sm">
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '1rem'}}>
                <TextField
                id="serach_box"
                placeholder='Search in all Persona'
                size="medium"
                sx={{width: '70%', color: 'rgba(196, 196, 196, 1)', paddingBottom: '20px'}}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon sx={{fontSize: '40px', color:'rgba(196, 196, 196, 1)'}}/>
                    </InputAdornment>),
                style: {
                    height: '3rem',
                    fontSize: '1.5rem'
                }
                }} 
                variant="standard"/>
                <NotificationsNoneIcon sx={{color: 'rgba(216, 194, 149, 1)',fontSize: 30, ml: 2, cursor:'pointer'}}/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography  variant="h5" component="h2" style={{marginRight: '2rem', fontWeight: 600, fontSize: '2rem'}}>Your Recent Clients</Typography>
                <Typography variant="body1" component="p" style={{marginLeft: '2rem', marginRight: '0.5rem', color: 'rgba(82, 82, 82, 1)'}} >  See Full List   </Typography>
                <ArrowForwardIcon sx={{color: 'rgba(216, 194, 149, 1)', fontSize: 25, cursor: 'pointer'}} />
            </Box>

           <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '2rem',}}>
                <Stack sx={{ width: '90%', height: '300px', 
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                borderRadius: '20px', overflow: "hidden", overflowY: 'scroll'}}>
                     {/* Right is hard coded, but here will be render the data from the API */}
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    <Client />
                    {/* Right is hard coded, but here will be render the data from the API */}
                </Stack>
            </Box>
        </Container> 
    )
}

export default ClientList;

