
const API_KEY = '6ad8f01859fc0b3bcf21c52554bed729';

const makeIconURL = (iconId) => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD-Ahjz8IRMZv2G19KcoAe_2Map1SjeDF3mBK87Q&s${iconId}'
const getFormattedWeatherData = async (city, units ='metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch (URL)
    .then((res)=> res.json())
    .then((data) => data);

    const {
        weather,
        main:{temp, feels_like,temp_min, temp_max, pressure, humidity},
wind: {speed},
sys: {country},
name,

} = data;
const {description, icon} = weather[0];
return {
    description, 
    iconURL : makeIconURL(icon),
    temp,
    feels_like, 
    temp_min, 
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
};
};

export {getFormattedWeatherData};
