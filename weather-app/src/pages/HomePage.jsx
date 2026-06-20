import { useState } from "react";
import './homepage.css'
import WeatherCard from "./WeatherCart";

export default function HomePage() {
  const [weather,setWeather] = useState({});

  const API_KEY = import.meta.env.VITE_api_key;
  
  

  

  return (
    <WeatherCard weather={weather} API_KEY={API_KEY} setWeather={setWeather} />
  );
}
