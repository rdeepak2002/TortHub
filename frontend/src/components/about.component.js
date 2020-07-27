import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Author</h2>
            <div>Deepak Ramalingam</div>
          </Col>
        </Row>
      </Container>
    );
  }
}
