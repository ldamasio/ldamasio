import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'

function WorksScreen() {

  const works = [
  'Full Stack Developer at NPL Brasil',
  'Agreements Manager at Urussanga City Hall',
  'Executive Secretary at Pro-Goethe Association',
  'Statistics Manager at the Secretary of Education of the Municipality of Florianópoils',
  'Technical Advisor at the Office of the Mayor of Florianópolis',
  'Public Policy Analyst at e-Strategia Públic',
  'Founding President at Rotaract Club São Paulo Aclimação',
  'Researcher at Fundação Getúlio Vargas',
  'Founding President at the National Federation of Public Administration Students'
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Works</h1>
          <ul>
            { works.map( (work) => <li>{ work }</li>) }
          </ul>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default WorksScreen
