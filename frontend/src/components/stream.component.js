import React, { Component } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import TreeLoader from './tree-loader.component';
import axios from 'axios';

export default class Stream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      humidity: undefined,
      imageLoaded: false,
      tempHumidLoaded: false,
      svgLoaded: false,
      lightLoading: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.getStats = this.getStats.bind(this);
    this.turnOffLight = this.turnOffLight.bind(this);
    this.turnOnLight = this.turnOnLight.bind(this);
  }

  componentDidMount() {
    this.getStats();

    setTimeout(function(){
      this.setState({svgLoaded: true});
    }.bind(this), 2450);
  }

  render() {
    const feedready = (this.state.imageLoaded && this.state.tempHumidLoaded && this.state.svgLoaded);

    return (
      <Container>
        <Row className={!feedready ? 'visible' : 'hidden'}>
          <TreeLoader/>
        </Row>
        <Row className={feedready ? 'visible' : 'hidden'}>
          <Col>
            <Row>
              <Image className='video_feed' rounded fluid alt='stream' src='/video_feed' className='video_feed' onLoad={this.handleImageLoaded.bind(this)}/>
            </Row>
            {(this.state.temperature && this.state.humidity) &&
              <Row>
                <p>Temperature: {Math.round(this.state.temperature)}°F</p>
                <p>Humidity: {Math.round(this.state.humidity)}%</p>
              </Row>
            }
            <Row>
              <Button onClick={this.turnOffLight}>OFF</Button>
              <Button onClick={this.turnOnLight}>ON</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
  }

  getStats() {
    axios.get('/sensor_stats').then(
      res => {
        if(res.data.temperature && res.data.humidity) {
          this.setState({temperature: (9.0/5.0)*res.data.temperature+32, humidity: res.data.humidity, tempHumidLoaded: true});
        }
        else {
          this.setState({tempHumidLoaded: true});
        }
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
        this.setState({lightLoading: false});
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
        this.setState({lightLoading: false});
      });
  }
}
