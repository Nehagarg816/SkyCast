import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Panipat",
        feelsLike:40.82,
        temp:35.74,
        tempMin:35.74,
        tempMax:35.74,
        humidity:46,
        weather:"broken clouds",
    })

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/><br /><br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}