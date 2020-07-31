import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.updateServer = this.updateServer.bind(this);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className='about-header'>Settings</h2>
            <Button onClick={this.updateServer}>Update</Button>
          </Col>
        </Row>
      </Container>
    );
  }

  updateServer() {
    axios.get('/update_server').then(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      });
  }
}
