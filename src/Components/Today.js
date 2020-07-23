import React from 'react';
import '../Components/Today.css';
import Typography from '@material-ui/core/Typography';


const Today = (props)=> {

    let item = null; 
    let setkey = null;

    let options = Object.keys(props.untreatedData).map((key, index) => {
        if (key.length == 3 && index < 6) {
            item = props.untreatedData[key];
            setkey = key;
        } else return;
        return (<option>{new Date(item.Last_UTC).toDateString()}</option>);
    });



    return (
        <div className="all">
            <div className="blockdifferent">
                <select className="picker" onChange={(event)=> {props.handleSelectChange(event.target.value)}}>
                    <option className="option" value={props.lastutc}>{props.lastutc}</option>
                    {options}
                </select>
            </div>
            <div className='today'>
            <div className="block">
                <Typography  className="text"gutterbottom>Sun</Typography>
                <Typography className="text"variant="h6" className="title">{props.sun}</Typography>
            </div>
            <div className="block">
                <Typography  className="text"gutterbottom>Temperature</Typography>
                <Typography className="text"variant="h6" className="title">{props.at} °F</Typography>
            </div>
            <div className="block">
                <Typography className="text"gutterbottom>Horizontal Wind Speed</Typography>
                <Typography className="text"variant="h6"className="title" >{props.hws} Km/h</Typography>
            </div>
            <div className="block">
                <Typography className="text" gutterbottom>Pressure</Typography>
                <Typography className="text"variant="h6" className="title">{props.pre} Pa</Typography>
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

