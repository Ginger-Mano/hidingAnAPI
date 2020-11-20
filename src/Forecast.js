import React, {Component} from "react"

class Forecast extends Component {
    render () {
        return (
            <div>
                <h2>Forecast for: {this.props.weather.name}</h2>
                <h3>Temp: {this.props.weather.main.temp}</h3>
                <h3>Feels like: {this.props.weather.main.feels_like}</h3>
                <p>Current: {this.props.weather.weather[0].description}</p>
                <img src="https://media3.giphy.com/media/57Y7JIqvH9okJCJYjp/giphy.gif"/> 
            </div>
        )
    }
}

export default Forecast

// stars night= https://media3.giphy.com/media/57Y7JIqvH9okJCJYjp/giphy.gif
// clouds  = https://thumbs.gfycat.com/IckyArcticAnemoneshrimp-max-1mb.gif
// sunny = https://media2.giphy.com/media/Q5jq8b6BvEtjbcXhlg/giphy.gif
// rainy= https://media1.giphy.com/media/3ov9jCEFMBtCy54q6Q/source.gif