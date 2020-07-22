import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const MainContainer = () => {

    const [data, setData] = useState([]);
    const [slicedData, setSlicedData] = useState([]);
    const [untreatedData, setUntreatedData] = useState([]);


    //fetching data from the api and turning into array
    useEffect(()=>{
        axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
        .then(dataset => {
            setUntreatedData(dataset.data);
          let temporary = Object.values(dataset.data);
          let toArray = temporary.map(function(obj) {
            return Object.keys(obj).map(function(key) {
                return obj[key];
            });
        });
        setData(toArray);
        setSlicedData(data.slice(0, 6));
        });
    });

    //some data are lost when the object is converted to array, hence this process to retrieve information about the sun
    

    //creating a constant in order to render the info in the card dinamically

    let info = slicedData.map(data => {
        let at = data[0].av;
        let hws = data[2].av;
        let pre = data[4].av;
        let firstdate = data[1];
        let lastdate = data[3];
        let season = data[5];

        return (
            <Card sol={'1'} at={at} hws={hws} pre={pre} wd={'1'} season={season} firstutc={firstdate} lastutc={lastdate} />
            );
    });              

                        
    return (
        <div>
            {info}
        </div>
    );
};

export default MainContainer;
