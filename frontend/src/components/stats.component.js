import React, { Component } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempHumidLoaded: false,
      errorLoading: false
    };

    this.getStats = this.getStats.bind(this);
  }

  componentDidMount() {
    this.getStats();
  }

  render() {
    return (
      <Container>
        <Row className={!this.state.tempHumidLoaded ? 'visible' : 'hidden'}>
          <Col className='d-flex justify-content-center'>
            <Spinner animation='border' size="lg"/>
          </Col>
        </Row>
        <Row className={this.state.tempHumidLoaded ? 'visible' : 'hidden'}>
          <Col>
            {(!this.state.errorLoading && this.state.tempHumidLoaded) ?
              (<Row>
                <Col>
                  TODO: graph here
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
        console.log(res)
        if(res.data && res.data.length >= 0) {
          this.setState({tempHumidLoaded: true});
        }
        else {
          this.setState({tempHumidLoaded: true, errorLoading: true});
        }
      },
      error => {
        this.setState({tempHumidLoaded: true, errorLoading: true});
        console.log(error);
      });
  }
}
