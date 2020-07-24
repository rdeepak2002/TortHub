import React, { Component } from 'react';

import axios from 'axios';

export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      humidity: undefined
    };
    this.getStats = this.getStats.bind(this);
  }

  getStats() {
    axios.get("/sensor_stats").then(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <img alt="stream" src="/video_feed"></img>
        <button onClick={this.getStats}>get stats</button>
      </div>
    );
  }
}
