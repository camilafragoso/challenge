import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const MainContainer = () => {

    const [data, setData] = useState([]);
    const [totalSol, setTotalSol] = useState([]);
    const [thisSun, setThisSun] = useState();

    //fetching data from the api and turning into array
    useEffect(()=>{
        axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
        .then(dataset => {
          let temporary = Object.values(dataset.data);
          let toArray = temporary.map(function(obj) {
            return Object.keys(obj).map(function(key) {
                return obj[key];
            });
        });
        //to avoid an infinite loop
        if (data.length <= 1){
            console.log(toArray);
            setData(toArray);
        };

        setTotalSol(data[7]);
        console.log(data);
        console.log(totalSol);
        
        });
    });

    //some data are lost when the object is converted to array, hence this process to retrieve information about the sun
    let i = 0;
    if (totalSol !== undefined){
        for (totalSol[i]; i++; i=totalSol.length){
            if (totalSol[i] === data[i]){
                setThisSun(totalSol[i]);
                console.log(thisSun);
                };
        };
    };

    //creating a constant in order to render the info in the card dinamically

    const info = data.map(data => {
        let at = data[0].av;
        let hws = data[2].av;
        let pre = data[4].av;
        let wd = data[6];
        let season = data[0].season;
        return (
            <Card sol={thisSun} at={at} hws={hws} pre={pre} wd={wd} season={season} firstutc={'1'} lastutc={'1'} />
        );
    })



    return (
        <div>
            {info}
        </div>
    );
};

export default MainContainer;
