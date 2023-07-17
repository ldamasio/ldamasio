import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/common/Header'

function PostDetailScreen() {

  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  var article = [];
  var id = 0;
  var title = "";
  var content = "";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://backend.dev.leandrodamasio.com.br/api/blog_posts/');
        Object.entries(response).forEach(([key, value]) => {
          if (value.slug == slug) {
            id = value.id;
            title = value.title;
            content = value.content;
            article.push({id: id, title: title, content: content});
          }
        });
        setData(article);
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
              <br /><br />
              {data.map(item => (
                <Card bg="dark" className="m-3 p-3" key={item.id}>
                  <Card.Title className="articleTitle">
                    {item.title}
                  </Card.Title>
                  <Card.Body className="articleContent">
                    <div style={{whiteSpace: "pre-wrap"}}>
                      {item.content}
                    </div>
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

export default PostDetailScreen
