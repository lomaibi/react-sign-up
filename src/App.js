import weatherpxbg from './assets/weatherpx.jpg';
import weatherpx2bg from './assets/weatherpx2.jpg';
import Descriptions from './components/Descriptions';
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from './weatherService';





function App(){
  const [city, setCity] = useState('paris');
  const [weather, setWeather]  = useState(null);
  const [units, setUnits] = useState("metric"); 
  const [bg, setBg] = useState(weatherpxbg);
  
  

  useEffect(() => {
    const fetchWeatherData = async () =>{
      const data = await getFormattedWeatherData( city, units);
      setWeather(data);
      const threshold=units==='metric' ? 20 : 60;
      if (data.temp<= threshold) setBg( weatherpx2bg);
      else setBg(weatherpxbg);
    };
    fetchWeatherData();
    
    
  }, [units,city ]);

  const handleUnitsClick = (e)=>{
    const button = e.currentTarget;
    const currentUnit= button.innerText.slice(1);
    const isCelsius = currentUnit==='F';
    button.innerText= isCelsius ? 'F.' : 'C.'
    setUnits(isCelsius ? "metric" :"imperial");
    

};
  const enterKeyPressed = (e)=>{
    if (e.keyCode===13){
      setCity(e.currentTarget.value)
    e.currentTarget.blurl()
    }
  

  }
  
  return(
    <div className='app' style={{ backgroundImage: `url(${bg})`
    }}>
      <div className='overlay'>
        
         { weather&&(
            <div className='container'>
          <div className='section section__inputs'>
           <input onKeyDown={enterKeyPressed}type="text" name='city' placeholder='enter city..'/>
           <button onClick={(e)=>handleUnitsClick(e)}><sup>0</sup>F.</button>
          </div>
          <div className='section section__temperature'>
            <div className='icon'>
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt='weatherIcon' width="30px"></img>
              <h3>{weather.description}</h3>
            </div>
            <div className='temperature'>
              <h1>{`${weather.temp.toFixed()} '${units==="metric" ? 'C' : 'F'}`}</h1> 
            </div>
           
          </div>
      

          <Descriptions weather={weather} units={units}/> 

        </div>


)}
        
      </div>

    </div>

      );
  
}









export default App;
