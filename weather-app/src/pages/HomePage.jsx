import './homepage.css'
import WeatherCard from "./WeatherCart";

export default function HomePage() {
  

  const API_KEY = import.meta.env.VITE_api_key;
  
  

  

  return (
    <>
    <WeatherCard  API_KEY={API_KEY}  lat='27' lon='78' />
    <WeatherCard  API_KEY={API_KEY}  lat='22.33' lon='87.3' />
    <WeatherCard  API_KEY={API_KEY}  lat='25.21' lon='75.90' />
    <WeatherCard  API_KEY={API_KEY}  lat='27.38' lon='77.51' />
    <WeatherCard  API_KEY={API_KEY}  lat='28.599' lon='77.225' />
    <WeatherCard  API_KEY={API_KEY}  lat='33.03' lon='74.94' />
    </>
  );
}
