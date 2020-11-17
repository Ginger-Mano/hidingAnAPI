import React, {Component} from "react"

class Forecast extends Component {
    render () {
        return (
            <div>
                <h2>Forecast for: {this.props.weather.name}</h2>
                <p>Temp: {this.props.weather.main.temp}</p>
                <p>Feels like: {this.props.weather.main.feels_like}</p>
                <p>Current: {this.props.weather.weather[0].description}</p>
                <img src="https://thumbs.gfycat.com/IckyArcticAnemoneshrimp-max-1mb.gif"/> 
            </div>
        )
    }
}

export default Forecast