const API_KEY = '606a0c5182ade39845d2e6dff60b9339';
const makeIconURL = (iconId) => `https://api.openweathermap.org/img/wn/${iconId}`

const getFormattedWeatherData = async (city, units = 'imperial')=>{

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&${units};`


const data = await fetch(URL)
.then((res)=>res.json())
.then((data)=>data);

const {weather, 
    main: { 
    temp,
    feels_like, 
    temp_min, 
    temp_max, 
    pressure,
     humidity},
    wind:{speed},
    sys: {country},
    name,
    } = data;
console.log(data)
    const {description, icon} = weather[0]
return {
    description,
    iconUrl: makeIconURL(icon),
    icon,
    temp,
    feels_like,
    temp_min, 
    temp_max, 
    pressure, 
    humidity,
    speed,
    country, 
    name

}
}

export {getFormattedWeatherData};