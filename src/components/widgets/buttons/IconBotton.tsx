import React, {useState} from 'react'

import {styled} from '@mui/material/styles';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const IconButton = () => {
    const [clicked, setClicked] = useState(false);

    return(
        <label htmlFor="icon-button-file"  onClick={() => setClicked(!clicked)}
        style={{cursor: 'pointer', padding: '2px 2px 0px 2px', background:`${clicked ? 'rgba(216, 194, 149, 1)' : 'white'}`, 
        color: `${clicked ? 'white': 'black'}`, borderRadius: '5px', boxShadow: `${clicked ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)': ''}`}}>
            <SignalCellularAltIcon />
        </label>
    )
}
        

export { IconButton }
