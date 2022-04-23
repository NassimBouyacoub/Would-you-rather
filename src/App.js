import logo from './logo.svg';
import './App.css';
import React from 'react';
import Head from './Components/Head';
import Login from './Components/login';
import { Col, Row } from "react-bootstrap"

class App extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Head />
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col />
          <Col>
            <Login />
          </Col>
          <Col />
        </Row>
      </>
    )
  }
}


export default App;
