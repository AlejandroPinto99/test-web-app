const Legend = ({color, width, height}) => (
    <svg width={width} height={height} viewBox="0 0 34 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '0.5rem'}}>
        <line y1="5" x2="34" y2="5" stroke={color} stroke-width="2"/>
        <circle cx="16" cy="5" r="5" fill={color}/>
    </svg>
)

export default Legend;