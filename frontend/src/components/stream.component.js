import React, { Component } from 'react';

import axios from 'axios';

export default class Stream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      humidity: undefined,
      imageLoaded: false,
      tempHumidLoaded: false,
      lightLoading: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.getStats = this.getStats.bind(this);
    this.turnOffLight = this.turnOffLight.bind(this);
    this.turnOnLight = this.turnOnLight.bind(this);
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
    console.log('image loaded');
  }

  getStats() {
    axios.get('/sensor_stats').then(
      res => {
        if(res.data.temperature && res.data.humidity) {
          this.setState({temperature: (9.0/5.0)*res.data.temperature+32, humidity: res.data.humidity});
        }
        this.setState({tempHumidLoaded: true});
      },
      error => {
        this.setState({tempHumidLoaded: true});
        console.log(error);
      });
  }

  turnOffLight() {
    this.setState({lightLoading: true});

    axios.get('/turnoff_light').then(
      res => {
        console.log(res);
        this.setState({lightLoading: false});
      },
      error => {
        console.log(error);
      });
  }

  turnOnLight() {
    this.setState({lightLoading: true});

    axios.get('/turnon_light').then(
      res => {
        console.log(res);
        this.setState({lightLoading: false});
      },
      error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getStats();
  }

  render() {
    return (

      <div>
        <div className={!(this.state.imageLoaded && this.state.tempHumidLoaded) ? 'visible' : 'hidden'}>
          Loading
        </div>
        <div className={(this.state.imageLoaded && this.state.tempHumidLoaded) ? 'visible' : 'hidden'}>
          <img alt='stream' src='/video_feed' onLoad={this.handleImageLoaded.bind(this)}></img>
          {this.state.temperature && (<div>Temperature: {this.state.temperature}°F</div>)}
          {this.state.humidity && (<div>Humidity: {this.state.humidity}%</div>)}
          <button onClick={this.turnOffLight}>OFF</button>
          <button onClick={this.turnOnLight}>ON</button>
        </div>
      </div>
    );
  }
}
