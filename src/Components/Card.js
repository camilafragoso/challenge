import React from 'react';

const Card = (props)=> {
    return (
        <div>
            <p>Sol {props.sol}</p>
            <p>Atmosferic Temperature {props.at}</p>
            <p>Horizontal Wind Speed {props.hws}</p>
            <p>Atmosferic Pressure {props.pre}</p>
            <p>Wind direction {props.wd}</p>
            <p>Season {props.season}</p>
            <p>First date {props.firstutc}</p>
            <p>Last date {props.lastutc}</p>
        </div>
    );
};

export default Card;