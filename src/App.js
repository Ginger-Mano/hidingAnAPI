import React, { Component } from 'react';
import Forecast from "./Forecast"
import './App.css';
import Paratest from "./paratest"
import Hover from "./Hover"

class App extends Component {
  state = {
    weather: []
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/find?lat=40.7&lon=-74.0&cnt=10&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
      .then(function (response) {
        return response.json();
      })
      .then(weatherObj =>
        // console.log(weatherObj.list)
        this.setState({
          weather: weatherObj.list
        })
      )
  }
  render() {
    console.log(this.state.weather);
    let triStateWeather = this.state.weather.map(weather => <Forecast weather={weather} key={weather.id} />)
    return (
      <div className="App">

        <div >
          <Paratest />
        </div>

        <div className="container">

          <div className="slide slide-two">
          </div>
          <div className="slide slide-one">
          </div>
          <div className="slide slide-three">
          </div>

          <div className="slide words">
            My portfolio is going
            to be dope.
          </div>

        </div>
        <div>
          <h2>hello</h2>
          <p>{triStateWeather}</p>
        </div>

        <Hover />

      </div>
    )
  }
}

export default App;
