import React, {useEffect, useState} from "react";
import "./Style.css";

const Demo = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  useEffect(()=>{
    const fetchApi= async() =>{
      const url = `http://api.openweatherapp.org/data/2.5/weather?q= ${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };
    fetchApi();
  })
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {}}
          ></input>
        </div>
      

      <div className="info">
        <h2 className="location">
          <i className="fas fa-street-view"></i>
          {city.name}
        </h2>
        <h1 className="temp"></h1>
        <h3 className="tempmin_max">Min: 5.25° Cel | Max: 5.25° Cel</h3>
      </div>


      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      </div>
    </>
  );
};

export default Demo;
