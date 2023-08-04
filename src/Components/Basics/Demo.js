import React, { useEffect, useState } from "react";
import "./Style.css";

const Demo = () => {
  // usestate ma here city is initial value and setCity is updated value
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Dharan");

  useEffect(() => {
    const fetchApi = async () => {
      // note: The api after appid may differ according to your gmail and verification and here I have deleted my appid to push to github as this key is sensitive.
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b24c8c43ed28e5c42d4dd1e05e03db39`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
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
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>

        {/* using terminatory operator */}

        {!city ? (
          <p className="nodata">No data found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location"><i className="fas fa-street-view"></i>        {search}</h2>
              <h1 className="temp">{city.temp} °Cel</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel
              </h3>
            </div>
          </>
        )}

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  );
};

export default Demo;
