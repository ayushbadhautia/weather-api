import axios from "axios";
import { useEffect } from "react";

export default function WeatherCard({weather,API_KEY,setWeather}) {

  useEffect(()=>{
    const fetchWeather = async () => {
      const reponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=27&lon=78&appid=${API_KEY}`,
      );
      //console.log(await reponse.data);
      setWeather(reponse.data);
    };
    fetchWeather();
  },[setWeather, API_KEY]);

  console.log(weather);

  function formatTemperatureC(t){
    return (t-273.15).toFixed(2) ;
  }

  return (
    <>
      <div className="weather-card">
        <div className="weather-card__glow" />

        <div className="weather-card__header">
          <div>
            <h2 className="weather-card__city">
              {weather.name}, {weather.sys?.country}
            </h2>
            <p className="weather-card__condition">{weather.weather?.description}</p>
          </div>
          {weather.weather?.icon && (
          <img className="weather-card__icon" src={weather.weather?.icon} alt={weather.weather?.description} />
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
