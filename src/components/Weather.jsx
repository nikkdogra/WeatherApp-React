import clear from '../assets/clear.png';
import cloud from '../assets/cloud.png';
import rain from '../assets/rain.png';
import mist from '../assets/mist.png';
import snow from '../assets/snow.png';

function Weather({temp,desc,weatherIcon}) {
    const capitalise = (value) => {
        const arr = value.split('').map((e, i, arr) => {
          if (i === 0 || arr[i - 1] === ' ') {
            return e.toUpperCase();
          }else{
            return e.toLowerCase();
          }
        })
        return arr.join('');
      }
    const displayWeatherIcon = (icon) => {
      switch(icon){
        case 'Clouds': return cloud;
        case 'Rain': return rain;
        case 'Drizzle': return snow;
        case 'Mist': return mist;
        default: return clear;
      }
    }
    return (
        <div className='text-center lh-1'>
            <div className='weather-img mx-auto mb-3'>
                <img className='img-fluid' src={displayWeatherIcon(weatherIcon)}></img>
            </div>
            <p className='fs-1 fw-bolder'>{temp}&deg;C</p>
            <p className='fs-4'>{capitalise(desc)}</p>
        </div>
    )
}

export default Weather;