import React, { Component } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      humidity: undefined,
      tempHumidLoaded: false
    };

    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    this.getStats();
  }

  render() {
    const statsready = this.state.tempHumidLoaded;

    return (
      <Container>
        <Row className={!statsready ? 'visible' : 'hidden'}>
          <Col className='d-flex justify-content-center'>
            <Spinner animation='border' size="lg"/>
          </Col>
        </Row>
        <Row className={statsready ? 'visible' : 'hidden'}>
          <Col>
            {(this.state.temperature && this.state.humidity) ?
              (<Row>
                <Col>
                  <Row>
                    <p>Temperature: {Math.round(this.state.temperature)}°F</p>
                  </Row>
                  <Row>
                    <p>Humidity: {Math.round(this.state.humidity)}%</p>
                  </Row>
                </Col>
              </Row>):
              (
                <Row>
                  <Col>
                    <Alert variant='danger'>
                      Error: Unable to get temperature and humidity sensor data from the server!
                    </Alert>
                  </Col>
                </Row>
              )
            }
          </Col>
        </Row>
      </Container>
    );
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
}
