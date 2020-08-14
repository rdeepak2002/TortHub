import React, { Component } from 'react';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap';

export default class Stream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoaded: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  render() {
    const feedready = this.state.imageLoaded;

    return (
      <Container>
        <Row className={!feedready ? 'visible' : 'hidden'}>
          <Col className='d-flex justify-content-center'>
            <Spinner animation='border' size="lg"/>
          </Col>
        </Row>
        <Row className={feedready ? 'visible' : 'hidden'}>
          <Col>
            <Row>
              <Image className='video_feed' rounded fluid alt='stream' src='/video_feed' onLoad={this.handleImageLoaded.bind(this)}/>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
  }
}
