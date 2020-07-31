import React, { Component } from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer } from 'recharts';
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
            {(!this.state.errorLoading && (this.state.tempData && this.state.humidData)) ?
              (<Row>
                <Col>
                  <h2 className='graph-title'>Temperature vs. Time</h2>
                  <ResponsiveContainer width = '100%' height = {500} >
                    <ScatterChart>
                      <XAxis
                      dataKey = 'time'
                      domain = {['auto', 'auto']}
                      name = 'Time'
                      tickFormatter = {(unixTime) => moment(new Date(unixTime)).format('MM/DD/YYYY h:mm:ss a')}
                      type = 'number'
                      />
                      <YAxis dataKey = 'temperature' name = 'Value' />
                      <Scatter
                      data = {this.state.tempData}
                      line = {{ stroke: '#eee' }}
                      lineJointType = 'monotoneX'
                      lineType = 'joint'
                      name = 'Values'
                      />
                    </ScatterChart>
                  </ResponsiveContainer>

                  <h2 className='graph-title'>Humidity vs. Time</h2>
                  <ResponsiveContainer width = '100%' height = {500} >
                    <ScatterChart>
                      <XAxis
                      dataKey = 'time'
                      domain = {['auto', 'auto']}
                      name = 'Time'
                      tickFormatter = {(unixTime) => moment(unixTime).format('hh:mm:ss')}
                      type = 'number'
                      />
                      <YAxis dataKey = 'humidity' name = 'Value' />
                      <Scatter
                      data = {this.state.humidData}
                      line = {{ stroke: '#eee' }}
                      lineJointType = 'monotoneX'
                      lineType = 'joint'
                      name = 'Values'
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
          data.map(function(item) {
            delete item._id;
            item.time = item.time.$date;
            console.log(item.time)
            return item;
          });
          this.setState({tempData: data});
          console.log(this.state.tempData);
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
          data.map(function(item) {
            delete item._id;
            item.time = item.time.$date;
            return item;
          });
          this.setState({humidData: data});
          console.log(this.state.humidData);
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
