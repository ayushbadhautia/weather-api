import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { weatherThemes } from "./Theme";


export default function WeatherCard({API_KEY,lat,lon}) {
  const [weather,setWeather] = useState({});

  useEffect(()=>{
    const fetchWeather = async () => {
      const reponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      );
      //console.log(await reponse.data);
      setWeather(reponse.data);
    };
    fetchWeather();
  },[setWeather, API_KEY,lat,lon]);

  console.log(weather);

  function formatTemperatureC(t){
    return (t-273.15).toFixed(2) ;
  }

  const theme = weather.weather?.[0]?.main ;


  return (
    <>
      <div className="weather-card" style={{ background: weatherThemes[theme]?.background }}>
        <div className="weather-card__glow" />

        <div className="weather-card__header" style={{ background: `radial-gradient(circle, ${weatherThemes[theme]?.glow} 0%, transparent 70%)` }}>
          <div>
            <h2 className="weather-card__city">
              {weather.name}, {weather.sys?.country}
            </h2>
            <p className="weather-card__condition" style={{ color: weatherThemes[theme]?.accent }}>{weather.weather?.[0]?.description}</p>
          </div>
          {weather.weather?.[0]?.icon && (
          <img className="weather-card__icon" src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`} alt={weather.weather?.[0]?.description} />
        )}
        </div>

        <div className="weather-card__temp-row">
          <span className="weather-card__temp">{Math.round(formatTemperatureC(weather.main?.temp))}°</span>
          <span className="weather-card__feels">
            feels like {Math.round((formatTemperatureC(weather.main?.feels_like)))}°
          </span>
        </div>

        <div className="weather-card__divider" />

        <div className="weather-card__stats">
          <div className="weather-card__stat">
            <span className="weather-card__stat-label">Wind</span>
            <span className="weather-card__stat-value">{weather.wind?.speed} kph</span>
          </div>
          <div className="weather-card__stat">
            <span className="weather-card__stat-label">Humidity</span>
            <span className="weather-card__stat-value">{weather.main?.humidity}%</span>
          </div>
        </div>
      </div>
    </>
  );
}
