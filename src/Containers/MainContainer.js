import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const MainContainer = () => {

    const [untreatedData, setUntreatedData] = useState([]);

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
        return (
        <Card sol={setkey} at={item.AT.av} hws={item.HWS.av} pre={item.PRE.av} wd={item.WD.most_common.compass_point} 
        season={item.Season} firstutc={item.First_UTC} lastutc={item.Last_UTC} />
        );
      });
                        
    return (
        <div>
            {teste}
        </div>
    );
};

export default MainContainer;
