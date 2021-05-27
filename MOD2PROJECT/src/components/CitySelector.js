
import React from 'react'
import Select from 'react-select'
import QualityIndicator from './QualityIndicator'

export default class CitySelector extends React.Component {
  state = {
    urbanCities: [],
    qualityScores: [],
    summary: "",
    teleportCityScore: 0,
    cityName: ""
  };

  async componentDidMount() {
    
    try {
    let res = await fetch("https://api.teleport.org/api/urban_areas/");
    let response = await res.json();
    // console.log(response.count);
    // console.log(response._links.curies[0].href);
    // console.log(response._links["ua:item"][0]);
    
    let urbanAreasArr = response._links["ua:item"];
    // console.log(urbanAreasArr.length);
    urbanAreasArr.forEach(item => { 
      this.setState({
      urbanCities: [...this.state.urbanCities,
          {
            name: item.name,
            href: item.href,
            label: item.name
          }
        ]
      });
    });

    // console.log(this.state.urbanCities);
  } catch (error) {}
  // console.info("result fetched");
}


  async onCitySelect(values) {
  console.table("values", values);
  console.log("selected value: " + JSON.stringify(values));
  // console.log("***", values)
  if (values.length === 0) return;
  let res = await fetch(`${values.href}scores`);
  let response = await res.json();
  console.log(response);
  console.table(response.categories);
  this.setState({
    qualityScores: [...response.categories],
    summary: response.summary,
    teleportCityScore: response.teleport_city_score,
    cityName: values.name
  });
  // console.table(this.state.qualityScores);

  // console.log("summary: " + this.state.summary);
  // console.log("overall score: " + this.state.teleportCityScore);
  }

  // how to turn string to HMTL (look up escape)


  render() {
    const overallScore = ( 
      <h4>Overall Score: <span style={this.state.teleportCityScore > 5 ? { color: "#53c100" } : { color: "#ff8a65" }}>
      {this.state.teleportCityScore.toFixed(3)}</span></h4>
    )

    return (
        <div>
          <div className="city-selector-title">
          <h2> CHECK YOUR DESTINATION! <br /> QUALITY OF LIFE METRICS</h2></div>

          <Select 
            options={this.state.urbanCities} 
            onChange={values => this.onCitySelect(values)}
            // valueField="name"
            clearable={true}
            placeholder="Select a city"/>
          
            <div className="cityCardHeader">
              <h1>{this.state.cityName}</h1>
              </div>
          
          <div className="cityCard" dangerouslySetInnerHTML={{ __html: this.state.summary }} ></div>
          {this.state.teleportCityScore === 0 ? " " : overallScore }


          {/* <h4>Overall Score: <span style=
              {this.state.teleportCityScore > 5
                      ? { color: "#76ff03" }
                      : { color: "#ff8a65" }
              }
              >
              {this.state.teleportCityScore.toFixed(3)}
              </span></h4> */}

          <div className="indicatorsWrapper">
                {this.state.qualityScores.map(item => (
                  <QualityIndicator
                    indicatorName={item.name}
                    score={item.score_out_of_10.toFixed(2)}
                  />
                ))}
              </div>
      
      </div>
    );
  }
}
