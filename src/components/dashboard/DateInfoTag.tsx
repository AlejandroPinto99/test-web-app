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
            style={{color: 'rgba(163, 163, 163, 1)', paddingRight: '1rem', paddingTop:'0px',  paddingBottom:'0px', fontSize: '0.8rem'}}>{message}</Typography>
            <AccessTimeIcon sx={{color: 'rgba(163, 163, 163, 1)', fontSize: '1.2rem'}} />
        </Box>
    );
};

export { DateInfoTag }