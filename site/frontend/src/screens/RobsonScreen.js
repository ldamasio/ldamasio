import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

function RobsonScreen() {

  const works = [
  'Robson is a robot specialized in cryptocurrency trading',
  'Programmed to monitor the market in real time, make intelligent probabilistic analyzes for decision making, automatically, on buying or selling assets, with risk management'
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Robson Bot</h1>
          <ul>
            { works.map( (work) => <li>{ work }</li>) }
          </ul>
          <a href="https://: www.robson.srv.br/" target="_blank" rel="noopener noreferrer">
              Robson Bot
          </a>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default RobsonScreen
