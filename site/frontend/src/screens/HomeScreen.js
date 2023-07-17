import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Me from '../components/Me'
import FavoriteStack from '../components/FavoriteStack'
import KnowMyBlog from '../components/KnowMyBlog'

function HomeScreen() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="App-body">
          <Container>
            <Row>
              <Col>
                <Me />
              </Col>
              <Col>
                <FavoriteStack />
              </Col>
              <Col>
                <KnowMyBlog />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomeScreen
