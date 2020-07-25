import React, { Component } from 'react';

import axios from 'axios';

export default class Stream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      humidity: undefined,
      imageLoaded: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.getStats = this.getStats.bind(this);
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

  componentDidMount() {
    this.getStats();
  }

  render() {
    return (
      <div className={!this.state.imageLoaded ? 'hidden' : 'visible'}>
        <img alt='stream' src='/video_feed' onLoad={this.handleImageLoaded.bind(this)}></img>
        {this.state.temperature && (<div>Temperature: {this.state.temperature}°F</div>)}
        {this.state.humidity && (<div>Humidity: {this.state.humidity}%</div>)}
      </div>
    );
  }
}
