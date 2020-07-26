import React, { Component } from 'react';

import axios from 'axios';

export default class Stream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      humidity: undefined,
      imageLoaded: false,
      lightLoading: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.getStats = this.getStats.bind(this);
    this.turnOffLight = this.getStats.bind(this);
    this.turnOnLight = this.getStats.bind(this);
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
    console.log('image loaded');
  }

  getStats() {
    console.log("getting stats");
    axios.get('/sensor_stats').then(
      res => {
        this.setState({temperature: (9.0/5.0)*res.data.temperature+32, humidity: res.data.humidity});
      },
      error => {
        console.log(error);
      });
  }

  turnOffLight() {
    console.log("turning off light");
    this.setState({lightLoading: true});

    axios.get('/turnoff_light').then(
      res => {
        this.setState({lightLoading: false});
      },
      error => {
        console.log(error);
      });
  }

  turnOnLight() {
    console.log("turning on light");
    this.setState({lightLoading: true});

    axios.get('/turnon_light').then(
      res => {
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
      <div className={!this.state.imageLoaded ? 'hidden' : 'visible'}>
        <img alt='stream' src='/video_feed' onLoad={this.handleImageLoaded.bind(this)}></img>
        {this.state.temperature && (<div>Temperature: {this.state.temperature}°F</div>)}
        {this.state.humidity && (<div>Humidity: {this.state.humidity}%</div>)}
        <button onClick={this.turnOffLight}>OFF</button>
        <button onClick={this.turnOnLight}>ON</button>
      </div>
    );
  }
}
