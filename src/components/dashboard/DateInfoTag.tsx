import React from 'react'
//Material UI
import {Box, Typography } from '@mui/material';

//Material UI icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export interface DateInfoTagProps{
    message?: string;
}

const DateInfoTag: React.FC<DateInfoTagProps> = ({message}) => {
    return(
        <Box sx={{display: 'flex', alignItem: 'center', mx: '10px', px: '10px', py: '5px', border: '1px solid rgba(163, 163, 163, 1)', borderRadius: '20px'}}>
            <Typography component="p" 
            sx={{color: 'rgba(163, 163, 163, 1)', paddingRight: '1rem', paddingTop:'0px',  paddingBottom:'0px', fontSize: '0.4rem'}}>{message}</Typography>
            <AccessTimeIcon sx={{color: 'rgba(163, 163, 163, 1)' }} />
        </Box>
    );
};

export { DateInfoTag }