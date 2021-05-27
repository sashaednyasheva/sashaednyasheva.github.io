import React, { useState } from 'react'
import DisplayClimate from './DisplayClimate'

function ClimateChecker() {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
      city: "",
      country: "",
    });
  
    const APIKEY = "82099d037ad7421344dffd92155736a5";
    
    async function weatherData(e) {
      e.preventDefault();
      if (form.city == "") {
        alert("Type the name of the city");
      } else {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )
          .then((res) => res.json())
          .then((data) => data);
  
        setWeather({ data: data });
      }
    }
  
    const handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
  
      if (name == "city") {
        setForm({ ...form, city: value });
      }
      if (name == "country") {
        setForm({ ...form, country: value });
      }
    };

    return (
      <div className="weather-checker">
        <h2>WEATHER CHECKER</h2>
        <p>Check the weather all over the world at a glance. <br/> Type your City and Country in the form below. </p>
        <br />
        <form>
          <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)}/>
          <input type="text" placeholder="Country" name="country" onChange={(e) => handleChange(e)}/>
          <button className="getweather" onClick={(e) => weatherData(e)}>Submit</button>
        </form>
        {weather.data != undefined ? (<div><DisplayClimate data={weather.data} /></div>) : null}
      </div>
    );
  }
  
  export default ClimateChecker;