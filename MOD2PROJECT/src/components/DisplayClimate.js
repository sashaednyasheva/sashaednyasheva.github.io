import React from "react";

function DisplayClimate(props) {
  const { data } = props;
  const iconurl = "http://openweathermap.org/img/w/" + `${data.cod != 404 ? data.weather[0].icon : null}` + ".png";
  
  return (
    <div className="displayweather">
      {data.cod != 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">{data.name} , {data.sys.country}. Weather </span>
            <span className="cardsubtitle"> As of {new Date().toLocaleTimeString()} EST</span>
            <h1>{" "}{Math.floor(data.main.temp - 273.15) * 9/5 + 32}<sup>o F</sup>
            </h1>
            <span className="weather-main">{data.weather[0].main}</span>
            <img className="weather-icon" src={iconurl} width ={100} />
            <span className="weather-description">{" "}{data.weather[0].description}</span>
          </div>
          <div className="weatherdetails">
          <div className="section1">
          <table>
            <tr>
            <td><h4>High/Low</h4></td>
            <td>
              <span style={{ color: "#76ff03" }}>{Math.floor(data.main.temp_max - 273.15)* 9/5 + 32}/{Math.floor(data.main.temp_min - 273.15)* 9/5 + 32}</span>
            </td>
            </tr>
            <tr>
            <td><h4>Humidity</h4></td>
            <td><span style={{ color: "#76ff03" }}>{data.main.humidity} %</span></td>
            </tr>
            <tr>
            <td><h4>Pressure</h4></td>
            <td><span style={{ color: "#76ff03" }}>{data.main.pressure} hPa</span></td>
            </tr>
            <tr>
            <td><h4>Visibility</h4></td>
            <td><span style={{ color: "#76ff03" }}>{data.visibility / 1000} Km</span></td>
            </tr>
          </table>
          </div>

          <div className="section2">
          <table>
            <tr>
            <td><h4>Wind</h4></td>
            <td><span style={{ color: "#76ff03" }}>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span></td>
            </tr>
            <tr>
            <td><h4>Wind Direction</h4></td>
            <td><span style={{ color: "#76ff03" }}>{data.wind.deg}<sup>o</sup>degrees</span>
            </td>
            </tr>
            <tr>
              <td><h4>Sunrise</h4></td>
              <td><span style={{ color: "#76ff03" }}>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</span>
              </td>
            </tr>
            <tr>
              <td><h4>Sunset</h4></td>
              <td><span style={{ color: "#76ff03" }}>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</span>
              </td>
            </tr>
            </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
      
      <div className="maincard">
        <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayClimate;