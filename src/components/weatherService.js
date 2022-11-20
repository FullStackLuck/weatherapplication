const API_KEY = '606a0c5182ade39845d2e6dff60b9339';

const getFormattedWeatherData = async (city, units = 'metric')=>{

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&${units};`

const data = await fetch(URL)
.then((res)=>res.json())
.then((data)=>data);

console.log(data)
}

export {getFormattedWeatherData};