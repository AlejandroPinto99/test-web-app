import {
    Box,
    Button,
    Typography
  } from '@mui/material';

  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const TaxAvailability = () => {
    return(
        <Box style={{backgroundColor: 'white', borderRadius: '15px', padding: '0.5rem 2rem', height: '180px', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', border: '2px solid #D8C295'}}>
            <Box >
                <Typography component="h3" style={{fontFamily: 'Lato', fontWeight: 600, fontSize: '1.2rem', color: '#525252'}}>Tax Availability</Typography>
                <Typography component="p" style={{fontFamily: 'Lato', fontSize: '2.5rem', fontWeight: 800}}>
                    $  5,478<span style={{fontSize: '2rem'}}>.00</span>
                </Typography>
            </Box>
            <Box>
                <Typography component="h3" style={{fontFamily: 'Lato', fontWeight: 600, fontSize: '1rem', color: '#A3A3A3'}}>Persona saved you: </Typography>
                <Box  style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                    <Typography component="p" style={{fontFamily: 'Lato', fontSize: '2rem', fontWeight: 600, marginRight:'1rem'}}>
                        2,681
                        <span style={{fontSize: '2rem'}}>.00</span>
                    </Typography>
                    <Button variant="contained" style={{fontFamily: 'Lato', borderRadius: '0px', fontSize: '1rem', fontWeight: 600,  backgroundColor: '#D8C295'}} >
                        TAX VAULT
                        <ArrowForwardIcon />
                    </Button>
            </Box>
               
            </Box>
        </Box>
    );
}

export default TaxAvailability