import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [weather,setWeather] = useState({});
  
  useEffect(()=>{
    const fetchWeather = async () => {
      const reponse = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=27&lon=78&appid=443b76c65f246668b9277acaaa128a2b",
      );
      console.log(await reponse.data);
      setWeather(reponse.data);
    };
    fetchWeather();
  },[]);



  function formatTemperatureC(t){
    return (t-273.15).toFixed(2) ;
  }

  return (
    <>
      <div>
        <h1>{formatTemperatureC(weather?.main?.temp)}</h1>
      </div>
    </>
  );
}
