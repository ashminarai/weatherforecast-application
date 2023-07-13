import React, { useEffect, useState } from "react";
import "./Style.css";

const Demo = () => {
  // usestate ma here city is initial value and setCity is updated value
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      // const url = `http://api.openweatherapp.org/data/2.5/weather?q=${search})_units=metric_appid=b14425a6554d189a2d7dc18a8e7d7263`;
      // const response = await fetch(url);
      // const resJson = await response.json();
      // setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>

        {/* using terminatory operator */}

        {/* {!city ? (
          <p>No Data Found</p>
        ) : ( 
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">
               
                {city.temp}°Cel
              </h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel
              </h3>
            </div>

            <div className="wave -one"></div> 
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
         )}  */}
          <div className="wave -one"></div> 
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            <div className="wave -four"></div>
      </div>
    </>
  );
};

export default Demo;
