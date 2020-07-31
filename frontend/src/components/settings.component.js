import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Settings extends Component {
  constructor(props) {
    super(props);

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
              <Button className='settings-btn' onClick={this.updateServer}>Update</Button>
            </Row>
            <Row>
              <Button className='settings-btn' onClick={this.rebootServer}>Reboot</Button>
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
