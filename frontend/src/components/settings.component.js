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
              <Button onClick={this.updateServer}>Update</Button>
            </Row>
            <Row>
              <Button onClick={this.rebootServer}>Reboot</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  updateServer() {
    axios.get('/update_server').then(
      res => {
        alert(res);
        window.location.reload();
      },
      error => {
        console.log(error);
      });
  }

  rebootServer() {
    axios.get('/reboot_server').then(
      res => {
        console.log(res);
        window.location.reload();
      },
      error => {
        console.log(error);
      });
  }
}
