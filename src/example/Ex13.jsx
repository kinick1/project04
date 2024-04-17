import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Ex13 = () => {

    const [city, setCity] = useState('');
    const [tempData, setTempData] = useState();
    const [feels_like, setFeel_Like] = useState();
    const [cloudData, setCloudData] = useState('');

    useEffect(() => {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=canada&appid=603aa562f93c1b6e5fb4e7596aa820d5';

        axios.get(url)
            .then(res => {
                setCity(res.data.name);
                setTempData(res.data.main.temp - 273);
                setFeel_Like(res.data.main.feels_like - 273);
                setCloudData(res.data.clouds.all);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const weatherImage = "http://localhost:3000/image/wether.jpg";

    return (
        <div className='all'>
            <div className='content-container'>
                <h1 className='a'>Today's Weather</h1>
                <p className='b'>국가: {city}</p>
                <p className='content'>
                    현재온도: {Math.round(tempData)}℃<br />
                    체감 온도: {Math.round(feels_like)}℃<br />
                    {cloudData <= 30 ? "☀" : (cloudData <= 60) ? "⛅" : "☁"}
                </p>
            </div>
            <img src={weatherImage} className='imgContent' alt='Weather'></img>
        </div>
    );
}

export default Ex13;
