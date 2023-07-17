import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'

function ContactScreen() {

  const works = [
  'Email: ldamasio@gmail.com',
  'Twitter: @ldamasio',
  'Instagram: @leandrodamasio.com.br',
  'Linkedin: https://www.linkedin.com/in/ldamasio/'
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Contact</h1>
          <ul>
            { works.map( (work) => <li>{ work }</li>) }
          </ul>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default ContactScreen
