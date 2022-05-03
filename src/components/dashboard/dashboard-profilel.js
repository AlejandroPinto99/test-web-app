import React from 'react'

import {Box, Typography, Paper, Button} from '@mui/material'

const Profile = ({classes}) => {
    return(
        <Box sx={{mx: 4, mb: 4}}>
            <Typography component="p" style={{color: '#A3A3A3', fontSize: '1rem', marginBottom: '10px', fontFamily: 'Lato'}}>YOUR PROFILE</Typography>
            <Box sx={{display: 'flex'}}>
                <Paper sx={{ mr: 4}} >
                    <img src="https://santafaz.org.ar/wp-content/uploads/2020/07/bg_foto_perfil_generica-1.jpg" alt="profile_picture"
                        style={{width: '80px', height: '80px' }} />
                </Paper>
                <Box sx={{display: 'flex', justifyContent:'center', alignItem: 'center', flexDirection: 'column'}}>
                    <Typography component="p" style={{fontFamily: 'Lato', fontSize: '1.2rem' }}> Alexander GreenWood</Typography>
                    <Typography component="p" style={{fontFamily: 'Lato', fontSize: '1em', color: '#A3A3A3'}}> alexgrenwood@gmail.com</Typography>
                </Box>
            </Box>

            <Button style={{width: '100%', border: 'solid 1px #A3A3A3', marginTop: '1rem', color: '#C4C4C4'}} 
            className={classes.root}>
                LOGOUT
            </Button>
        </Box>
    )
}

export default Profile;