import React from 'react';
import '../Components/Card.css';

const Card = (props)=> {
    return (
        <div className='transparent'>
            <p>Sun {props.sol}</p>
            <p>Atmosferic Temperature {props.at}</p>
            <p>Horizontal Wind Speed {props.hws}</p>
            <p>Atmosferic Pressure {props.pre}</p>
            <p>Wind direction {props.wd}</p>
            <p>{props.season}</p>
            <p>{props.lastutc}</p>
        </div>
    );
};

export default Card;