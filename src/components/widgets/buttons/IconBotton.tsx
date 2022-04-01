import React from 'react'

import {styled} from '@mui/material/styles';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const Input = styled('input')({
    display: 'none'
})

const IconButton = () => (
        <label htmlFor="icon-button-file">
            <SignalCellularAltIcon />
        </label>
);

export { IconButton }
