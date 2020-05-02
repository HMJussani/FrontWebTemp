import React from 'react';
import '../src/css/app.css';
import Gauges from '../src/pages/gauges/gauges'
import { Container, Row, Col} from 'react-bootstrap'
import Header from '../src/pages/header/Header';

function App() {
  const chartStyle = {
    height: 150,
  }
  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col>
            <h1> Temperatura Atual </h1>
          </Col>
        </Row>
        <Row>
           <Gauges 
           title='Temperatura'
            value ='0.5'
           />   
        </Row>
      </Container>

    </>
  );
}

export default App;
