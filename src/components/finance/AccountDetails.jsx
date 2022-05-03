import {
    Box,
    Grid,
    Typography
  } from '@mui/material';


const AccountDetails = () => {
    return(
        <Box style={{backgroundColor: 'white', borderRadius: '15px', padding: '1.2rem 2rem', height: '210px' ,
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'}}>
           <Typography component="h3" 
           style={{color: '#525252', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: 600}}>
                Account Details</Typography>
           <Grid container spacing={2}>
               <Grid item sx={6}>
                    <Typography component="h4" style={{color: '#A3A3A3', fontFamily: 'Lato', fontWeight: 500, fontSize: '1rem'}}>Routing Number</Typography>
                    <Typography component="p" style={{color: '#525252', fontFamily: 'Lato', fontWeight: 600,  fontSize: '0.9rem'}}>256741541</Typography>
               </Grid>
               <Grid item sx={6}>
                    <Typography component="h4"style={{color: '#A3A3A3', fontFamily: 'Lato', fontWeight: 500, fontSize: '1rem'}}>Account Number</Typography>
                    <Typography component="p" style={{color: '#525252', fontFamily: 'Lato', fontWeight: 600, fontSize: '0.9rem'}}>124587632525</Typography>
               </Grid>
               <Grid item sx={6}>
                    <Typography component="h4" style={{color: '#A3A3A3', fontFamily: 'Lato', fontWeight: 500, fontSize: '1rem'}}>Bank Address</Typography>
                    <Typography component="p" style={{ inlineSize: '120px' ,overflowWrap: 'break-word',fontSize: '0.9rem', color: '#525252', fontFamily: 'Lato', fontWeight: 600}}>200 West St, New York, NY 10282</Typography>
               </Grid>
               <Grid item sx={6}>
                    <Typography component="h4" style={{color: '#A3A3A3', fontFamily: 'Lato', fontWeight: 500, fontSize: '1rem'}}>Account Name</Typography>
                    <Typography component="p" style={{color: '#525252', fontFamily: 'Lato', fontWeight: 600,fontSize: '0.9rem'}}>CORP NAME LLC</Typography>
               </Grid>
           </Grid>
        </Box>
    );
}

export default AccountDetails;