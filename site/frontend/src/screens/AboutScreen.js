import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'

function AboutScreen() {

  const about_items = [
  'I am a Full Stack Developer',
  'Born in 1986 in Brazil, I am passionate about Logic',
  'My areas of study are Philosophy, Public Administration and Computer Engineering'
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>About</h1>
          <ul>
            { about_items.map( (about_item) => <li>{ about_item }</li>) }
          </ul>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default AboutScreen
