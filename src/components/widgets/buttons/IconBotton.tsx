import React, {useState} from 'react'

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import GraphicBarsIcon from '../../../icons/GraphicBarsIcon';

const IconButton = () => {
    const [clicked, setClicked] = useState(false);

    return(
        <label htmlFor="icon-button-file"  onClick={() => setClicked(!clicked)}
        style={{cursor: 'pointer', padding: '4px 4px 0px 4px', background:`${clicked ? 'rgba(216, 194, 149, 1)' : 'white'}`, 
        borderRadius: '5px', boxShadow: `${clicked ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)': ''}`}}>
            <GraphicBarsIcon color={`${clicked ? 'white': 'black'}`} />
        </label>
    )
}
        

export { IconButton }
