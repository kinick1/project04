import React,{useEffect,useState} from 'react'
import axios from 'axios'
import '../App.css'

const Ex13 = () => {

    const [city,setCity]=useState('');
    const [tempData,setTempData]=useState('');
    const [feels_like,setFeel_Like]=useState('');
    const [cloudData,setCloudData]=useState('');
    /**
     * 화면에 실시간으로 날씨를 띄워보자.
     * 
     * 1) 단톡에 올라온 주소로 url을 선언하자
     * 2) 화면이 렌더링된 직후,  해당 url에 비동기적 통신을 해서 데이터를 가져오자
     *      - useEffect, axios
     * 3) 데이터를 가져오는데 성공했다면, 해당 데이터들을 화면에 반영시켜보자
     *      - 기온 : 켈빈 온도 - 273 => 섭씨 온도
     *      - 구름 : 0~30맑음/ 31~60약간흐림/ 61~ 흐림
     * 4) 다 된 사람은 단톡방에 완료 체크 후 디자인 자유롭게~
     *      - 디자인까지 완료된 사람들은 캡처후 업로드
     */
    useEffect(()=>{
        let url ='https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=603aa562f93c1b6e5fb4e7596aa820d5'

        axios
        .get(url)
        .then(res=>{setCity(res.data.name)})

        axios
        .get(url)
        .then(res=>{setTempData(res.data.main.temp-273)})

        axios
        .get(url)
        .then(res=>{setFeel_Like(res.data.main.feels_like-273)})

        axios
        .get(url)
        .then(res=>{setCloudData(res.data.cloud)})



    },[])
    
  return (
    <div className='all'>
        <h1 className='a'>today wether</h1>
        <p className='b'>도시 : {city}</p>
        <p>
            <span className='content'>현재 기온은 {Math.round(tempData)}℃ 입니다.</span><br/>
            <span className='content'>체감 온도는 {Math.round(feels_like)}℃ 입니다.</span><br/>
            <span className='content'>{(cloudData<=30)? "☀":(cloudData<=60)?"⛅": "☁"}</span>
        </p>
    </div>
  )
}

export default Ex13