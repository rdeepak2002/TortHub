import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalStorage: undefined,
      storageUsed: undefined,
      storageFree: undefined
    };

    this.updateServer = this.updateServer.bind(this);
    this.rebootServer = this.rebootServer.bind(this);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <h2 className='about-header'>Settings</h2>
            </Row>
            <Row>
              <Button className='settings-btn' onClick={this.updateServer}>Update Server</Button>
            </Row>
            <Row>
              <Button className='settings-btn' onClick={this.rebootServer}>Reboot Server</Button>
            </Row>
            <Row>
              <p>Total Storage: {this.state.totalStorage}</p>
              <p>Storage Used: {this.state.storageUsed}</p>
              <p>Storage Left: {this.state.storageFree}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  updateServer() {
    axios.get('/update_server').then(
      res => {
        alert("Updating the server (website will be down for a very short period of time).");
        window.location.reload();
      },
      error => {
        console.log(error);
      });
  }

  rebootServer() {
    axios.get('/reboot_server').then(
      res => {
        alert("Rebooting the server (website will be down for a while).")
        window.location.reload();
      },
      error => {
        console.log(error);
      });
  }
}
