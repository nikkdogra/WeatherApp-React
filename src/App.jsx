import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {

  //data to be fetched will store in weather
  const [weather, setWeather] = useState(null);

  //loading used to display spinner conditionally
  const [loading, setLoading] = useState(false);

  //error used to show error if wrong city name will enter
  const [error, setError] = useState(null);

  //triggers when user search weather
  const searchWeather = async (search) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${import.meta.env.VITE_API_KEY}`);
    //if weather not found than error will displayed
    if (response.status === 404) {
      setError('Oops! No results found');
      return;
    }
    const data = await response.json();
    setWeather(data);
    //remove spinner
    setLoading(false);
  }

  //triggers when user search city to show spinner
  const startLoading = () => {
    setLoading(true);
  }

  //error will set to null after 3 sec
  useEffect(() => {
    if (error) {
      const timerId = setTimeout(() => {
        setError(null);
        setLoading(false);
        setWeather(null);
      }, 3000);
      return () => {
        clearTimeout(timerId);
      }
    }
  }, [error]);

  return (
    <div className='main d-sm-flex pt-5 pt-sm-0 justify-content-center align-items-center'>
      <div className="p-4 bg-white rounded text-black">
        <SearchBar searchWeather={searchWeather} startLoading={startLoading} />
        {
          loading
            ?
            <Spinner error={error} />
            :
            weather
            &&
            <>
              <Weather temp={Math.round(weather.main.temp - 273.15)} desc={weather.weather[0].description} weatherIcon={weather.weather[0].main} />
              <Forecast humidity={weather.main.humidity} windSpeed={weather.wind.speed} />
            </>
        }
      </div>
    </div>
  )
}

export default App
