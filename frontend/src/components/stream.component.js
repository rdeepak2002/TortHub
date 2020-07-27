import React, { Component } from 'react';
import { Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

export default class Stream extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      humidity: undefined,
      imageLoaded: false,
      tempHumidLoaded: false,
      svgLoaded: false,
      lightLoading: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.turnOffLight = this.turnOffLight.bind(this);
    this.turnOnLight = this.turnOnLight.bind(this);
  }

  componentDidMount() {
    this.timeoutfunction = setTimeout(function(){
      this.setState({svgLoaded: true});
    }.bind(this), 2450);
  }

  componentWillUnmount() {
    clearInterval(this.timeoutfunction);
  }

  render() {
    const feedready = (this.state.imageLoaded && this.state.svgLoaded);

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
              <Image className='video_feed' rounded fluid alt='stream' src='/video_feed' className='video_feed' onLoad={this.handleImageLoaded.bind(this)}/>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center'>
                <Button className='light-btn' disabled={this.state.lightLoading ? true : false} onClick={this.turnOnLight} variant='dark'>ON</Button>
              </Col>
              <Col className='d-flex justify-content-center'>
                <Button className='light-btn' disabled={this.state.lightLoading ? true : false} onClick={this.turnOffLight} variant='dark'>OFF</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
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
