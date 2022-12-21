import React from "react";
import './descriptions.css';
//import { FaArrowDown } from "react-icons/fa";

const Descriptions =({weather, units})=>{
    const tempUnit= units=== 'metric' ? 'C' : 'F'
    const windUnit= units ==='metric' ? 'm/s': 'm/h'
    const cards=[
        {
            id : 1,
            title: "min",
            data :weather.temp_min.toFixed(),
            unit :tempUnit,

        },
        {
            id:2,
            title:"max",
            data:weather.temp_max.toFixed(),
            unit:tempUnit,
        },
        {
            id:3,
            title:"feels_like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id:4,
            title:"pressure",
            data: weather.pressure,
            unit: "hPa",
        },
        {
            id:5,
            title:"humidity",
            data: weather.humidity,
            unit: "p",
        },
        {
            id:6,
            title:"wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ];

    return (
    <div className="section section__descriptions">
      {cards.map(({id, title, data, unit,}) =>(
         <div key={id} className="card">
         <div className="descriptions__card-icon">
           
             <small>{title}</small>
         </div>
         <h2>{`${data} ${unit}`}</h2>
      </div>

      )) }
    
       
         
    </div>
    );
};



export default Descriptions;