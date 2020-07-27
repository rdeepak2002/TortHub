import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

export default class DeviceControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightLoading: false
    };

    this.turnOffLight = this.turnOffLight.bind(this);
    this.turnOnLight = this.turnOnLight.bind(this);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <Col className='d-flex justify-content-center'>
                <h2 className='device-title'>Heat Lamps</h2>
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-end'>
                <Button className='light-btn' disabled={this.state.lightLoading ? true : false} onClick={this.turnOnLight} variant='dark'>ON LAMP</Button>
              </Col>
              <Col className='d-flex justify-content-start'>
                <Button className='light-btn' disabled={this.state.lightLoading ? true : false} onClick={this.turnOffLight} variant='dark'>OFF LAMP</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
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
