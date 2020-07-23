import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import '../Containers/MainContainer.css';
import Mars from '../Files/Mars.mp4';
import Today from '../Components/Today';


const MainContainer = () => {

    const [untreatedData, setUntreatedData] = useState([]);
    const [directions, setDirections] = useState([['NNE', 'North-Northeast'], ['ENE', 'East-Northeast'], ['ESE', 'East-Southeast'], ['SSE', 'South-Southeast'], ['SSW', 'South-Southwest'], ['WSW', 'West-Southwest'], ['WNW', 'West-Northwest'], ['NNW', 'North-Northwest']]);
    const [newdirection, setnewdirection] = useState('');

    //fetching data from the api and turning into array
    useEffect(()=>{
        axios.get('https://api.nasa.gov/insight_weather/?api_key=YhxJtNDEWSpSVcOgU76qnsTQG70zWZ2lm4btnK3c&feedtype=json&ver=1.0')
        .then(dataset => {
            //making sure to only set the state when needed
            if (untreatedData == false){
                setUntreatedData(dataset.data)
            }
        });
    });   

    //rendering the data dinamically
    let item = null; 
    let setkey = null;

    let teste = Object.keys(untreatedData).map((key, index) => {
        if (key.length == 3) {
            item = untreatedData[key];
            setkey = key;
        } else return;
        
        if (key == '587'){
        return (
            <Today sun={setkey} at={item.AT.av} hws={(item.HWS.av)*(3,6)}
                pre={item.PRE.av}  
                season={item.Season} firstutc={new Date(item.First_UTC).toDateString()}
                lastutc={new Date(item.Last_UTC).toDateString()}
                wd={directions.map(direction => {
                        if (item.WD.most_common.compass_point === direction[0]){
                            return (direction[1]);
                        } else return;
                    })
                }/>
        );
        } 
      });

                        
    return (
        <div className="maincontainer">
            <h1>Weather on Mars</h1>
            {teste}
            <video id="background-video" loop autoPlay muted>
                <source src={Mars} type="video/mp4" />
            </video>
        </div>
    );
};

export default MainContainer;
