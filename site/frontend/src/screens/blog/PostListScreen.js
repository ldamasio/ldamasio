import React, { useState, useEffect } from 'react'
import Header from '../../components/common/Header'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostListScreen() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://backend.dev.leandrodamasio.com.br/api/blog_posts/');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return(
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <div>
          {loading && <div>Loading</div>}
          {!loading && (
            <div>
              <h2>Últimas publicações: </h2>
              <br /><br />
              {data.map(item => (
                <Card bg="dark" className="m-3 p-3" key={item.id}>
                  <Card.Title>
                    <Link className="bloglistTitle" to={item.slug}>
                      {item.title}
                    </Link>
                  </Card.Title>
                  <Card.Body className="bloglistContent">
                    {item.content.substring(0, 300)}
                  </Card.Body>
                </Card>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostListScreen
