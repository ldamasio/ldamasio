import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'

function NoPageScreen() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Erro</h1>
          <p>
            404 - Página não encontrada
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default NoPageScreen
