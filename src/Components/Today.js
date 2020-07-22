import React from 'react';
import '../Components/Today.css';
import Typography from '@material-ui/core/Typography';


const Today = (props)=> {
    return (
        <div className="all">
        <div className="blockdifferent">
                <Typography className="text" gutterbottom>{props.lastutc}</Typography>
                </div>
            <div className='today'>
                <div className="block">
                <Typography  className="text"gutterbottom>Sun</Typography>
               <Typography className="text"variant="h6" className="title">{props.sun}</Typography>
                </div>
                <div className="block">
                <Typography  className="text"gutterbottom>Temperature</Typography>
               <Typography className="text"variant="h6" className="title">{props.at}</Typography>
                </div>
                <div className="block">
                <Typography className="text"gutterbottom>Horizontal Wind Speed</Typography>
                <Typography className="text"variant="h6"className="title" >{props.hws}</Typography>
                </div>
                <div className="block">
                <Typography className="text" gutterbottom>Pressure</Typography>
                <Typography className="text"variant="h6" className="title">{props.pre}</Typography>
                </div>
                <div className="block">
                <Typography className="text" gutterbottom>Wind Direction</Typography>
                <Typography className="text"variant="h6" className="title">{props.wd}</Typography>
                </div>
                <div className="block">
                <Typography className="text" gutterbottom>Season</Typography>
                <Typography className="text"variant="h6"className="title">{props.season}</Typography>
                </div>
            </div>
        </div>
    );
};

export default Today;

