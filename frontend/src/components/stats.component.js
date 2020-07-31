import React, { Component } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { ScatterChart, Scatter, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import moment from 'moment';

export default class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempData: undefined,
      humidData: undefined,
      errorLoading: false
    };

    this.getTemperature = this.getTemperature.bind(this);
  }

  componentDidMount() {
    this.getTemperature();
    this.getHumidity();
  }

  render() {
    return (
      <Container>
        <Row className={!(this.state.tempData && this.state.humidData) ? 'visible' : 'hidden'}>
          <Col className='d-flex justify-content-center'>
            <Spinner animation='border' size="lg"/>
          </Col>
        </Row>
        <Row className={(this.state.tempData && this.state.humidData) ? 'visible' : 'hidden'}>
          <Col>
            {(!this.state.errorLoading) ?
              (<Row>
                <Col>
                  <h2 className='graph-title'>Temperature vs. Time</h2>
                  <ResponsiveContainer width = '100%' height = {500} >
                    <ScatterChart>
                      <CartesianGrid />

                      <XAxis
                      dataKey = 'time'
                      domain = {['auto', 'auto']}
                      name = 'Time'
                      tickFormatter = {(unixTime) => moment(unixTime).format('MM/DD/YYYY h:mm:ss a')}
                      type = 'number'
                      />

                      <YAxis
                      dataKey = 'temperature'
                      name = 'Temperature'
                      unit = '℉'
                      />

                      <Tooltip cursor={{ strokeDasharray: '3 3' }} labelFormatter={time => new Date(time).toLocaleString()} />

                      <Scatter
                      data = {this.state.tempData}
                      line = {{ stroke: '#eee' }}
                      lineJointType = 'monotoneX'
                      lineType = 'joint'
                      name = 'Temperatures'
                      fill='#8884d8'
                      />
                    </ScatterChart>
                  </ResponsiveContainer>

                  <h2 className='graph-title'>Humidity vs. Time</h2>
                  <ResponsiveContainer width = '100%' height = {500} >
                    <ScatterChart>
                      <CartesianGrid />

                      <XAxis
                      dataKey = 'time'
                      domain = {['auto', 'auto']}
                      name = 'Time'
                      tickFormatter = {(unixTime) => moment(unixTime).format('MM/DD/YYYY h:mm:ss a')}
                      type = 'number'
                      />

                      <YAxis
                      dataKey = 'humidity'
                      name = 'Humidity'
                      unit = '%'
                      />

                      <Tooltip cursor={{ strokeDasharray: '3 3' }} labelFormatter={time => new Date(time).toLocaleString()} />

                      <Scatter
                      data = {this.state.humidData}
                      line = {{ stroke: '#eee' }}
                      lineJointType = 'monotoneX'
                      lineType = 'joint'
                      name = 'Humidity'
                      fill='#8884d8'
                      unit = '%'
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
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

  getTemperature() {
    axios.get('/get_temperature').then(
      res => {
        if(res.data && res.data.length >= 0) {
          let data = res.data;
          this.setState({tempData: data});
        }
        else {
          this.setState({errorLoading: true});
          console.log("Error getting temperature");
        }
      },
      error => {
        this.setState({errorLoading: true});
        console.log(error);
      });
  }

  getHumidity() {
    axios.get('/get_humidity').then(
      res => {
        if(res.data && res.data.length >= 0) {
          let data = res.data;
          this.setState({humidData: data});
        }
        else {
          this.setState({errorLoading: true});
          console.log("Error getting humidity");
        }
      },
      error => {
        this.setState({errorLoading: true});
        console.log(error);
      });
  }
}
