import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Descriptions';
import { getFormattedWeatherData } from './components/weatherService';
import cold from './photos/cold.jpeg';
import warm from './photos/warm.png';


function App() {


  const[city, setCity] = useState("Paris");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [photos, setPhotos] = useState(cold);

  useEffect(()=>{
    const fetchWeatherData = async ()=>{
    const data = await getFormattedWeatherData(city,units);
    setWeather(data)


    const threshold = units ==='metric' ? 20 : 60;
    if(data.temp <= threshold) setPhotos(cold);
    else setPhotos(warm)
    }


    fetchWeatherData();
  }, [units, city]);

  const handleUnitClick = (e)=>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);


    const isCelcius = currentUnit === "C";
    button.innerText= isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperial")
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13){
      setCity(e.currentTarget.value)
      e.currentTarget.blur();
    }
  }


  return (
     <div className='app' style={{backgroundImage: `url(${photos})`}}>
     <div className = 'overlay'>{
      weather && (
        <div className='container'>
        <div className='section section__inputs'>
          <input onKeyDown={enterKeyPressed} type= "text" name="city" placeholder="Enter City.."/>
          <button onClick={(e)=> handleUnitClick(e)}>°F</button>
        </div>
        <div className='section section_temperature'>
          <div className='icon'>
            <h3>
              {`${weather.name}, ${weather.country}`}
            </h3>
              <img src={weather.iconURL} alt=''/>
            <h3>
              { weather.description}
            </h3>
            <h3>{weather.main}</h3>
            <div className='temperature'>
              <h1>{`${weather.temp.toFixed()} °${units === "metric" ? "C" : "F"}`}</h1>
            </div>
          </div>
          {/* bottom description */}
          <Description weather={weather} units={units}/>
        </div>
      </div>
      )
     }
     </div>
      </div>
  );
}

export default App;
