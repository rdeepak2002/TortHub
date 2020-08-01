import React, { Component } from 'react';
import { Alert, Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { Cell, Legend, PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

import axios from 'axios';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false,
      loading: false,
      error: undefined,
      totalStorage: undefined,
      storageUsed: undefined,
      otherStorageUsed: undefined,
      storageFree: undefined,
      piChartData: []
    };

    this.updateServer = this.updateServer.bind(this);
    this.rebootServer = this.rebootServer.bind(this);
    this.getSystemStatus = this.getSystemStatus.bind(this);
    this.convertBytesToGb = this.convertBytesToGb.bind(this);
  }

  componentDidMount() {
    this.getSystemStatus();
  }

  render() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index,}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    return (
      <Container>
        <Row>
          <Col>
            {this.state.error && (
              <Row>
                <Alert variant='danger'>Error: {this.state.error}</Alert>
              </Row>
            )}

            {!this.state.pageLoaded && (
              <Col className='d-flex justify-content-center'>
                <Spinner animation='border' size="lg"/>
              </Col>
            )}

            {(this.state.pageLoaded && !this.state.error) && (
              <div>
                <Row>
                  <h2 className='about-header'>Settings</h2>
                </Row>
                <Row>
                  <Button disabled={this.state.loading} className='settings-btn' onClick={this.updateServer}>Update Server</Button>
                </Row>
                <Row>
                  <Button disabled={this.state.loading} className='settings-btn' onClick={this.rebootServer}>Reboot Server</Button>
                </Row>
                <Row>
                  <h2 className='about-header'>System Details</h2>
                </Row>
                <Row>
                  <div>Total Storage: {this.convertBytesToGb(this.state.totalStorage)}</div>
                </Row>
                <Row>
                  <div className='system-details'>Storage Used: {this.convertBytesToGb(this.state.storageUsed)}</div>
                </Row>
                <Row>
                  <div className='system-details'>Other Storage Used: {this.convertBytesToGb(this.state.otherStorageUsed)}</div>
                </Row>
                <Row>
                  <div className='system-details'>Storage Free: {this.convertBytesToGb(this.state.storageFree)}</div>
                </Row>
                <Row>
                  <ResponsiveContainer className='container' width = {300} height = {300} >
                    <PieChart>
                      <Pie
                      data={this.state.piChartData}
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      >
                      {
                        this.state.piChartData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                      }
                      </Pie>
                      <Legend/>
                      <Tooltip/>
                    </PieChart>
                  </ResponsiveContainer>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }

  updateServer() {
    this.setState({loading: true});

    axios.get('/update_server').then(
      res => {
        alert("Updating the server (website will be down for a very short period of time).");
        window.location.reload();
        this.setState({loading: false});
      },
      error => {
        this.setState({loading: false, error: error.message});
      });
  }

  rebootServer() {
    this.setState({loading: true});

    axios.get('/reboot_server').then(
      res => {
        alert("Rebooting the server (website will be down for a while).")
        window.location.reload();
        this.setState({loading: false});
      },
      error => {
        this.setState({loading: false, error: error.message});
      });
  }

  getSystemStatus() {
    this.setState({loading: true});

    axios.get('/system_status').then(
      res => {
        this.setState({pageLoaded: true, loading: false, totalStorage: res.data.total, storageUsed: res.data.used, otherStorageUsed: res.data.total-res.data.used, storageFree: res.data.free, piChartData:[{ name: 'Free Storage', value: res.data.free }, { name: 'Storage Used', value: res.data.used }, { name: 'Other Storage Used', value: res.data.total-res.data.used }]});
      },
      error => {
        this.setState({pageLoaded: true, loading: false, error: error.message});
      });
  }

  convertBytesToGb(bytes) {
    return parseFloat(bytes/1073741824).toFixed(2);
  }
}
