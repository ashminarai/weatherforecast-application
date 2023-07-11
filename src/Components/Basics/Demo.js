import React, { useEffect, useState } from "react";
import "./Style.css";

const Demo = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweatherapp.org/data/2.5/weather?q= ${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
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
              setSearch(event.target.value)
            }}
          ></input>
        </div>

        {/* using terminatory operator */}

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">
                {/* city, main, temperature savaiko data linu yo lekheko */}
                {city.main.temp}
              </h1>
              <h3 className="tempmin_max">Min: 5.25° Cel | Max: 5.25° Cel</h3>
            </div>
          </div>
        )}
         <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
      </div>
    </>
  );
};

export default Demo;
