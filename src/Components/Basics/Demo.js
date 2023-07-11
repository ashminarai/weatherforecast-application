import React from "react";
import "./Style.css";

const Demo = () => {
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
      </div>

      <div className="info">
        <h2 className="location">
          <i class="fas fa-street-view"></i>
        </h2>
      </div>

    </>
  );
};

export default Demo;
