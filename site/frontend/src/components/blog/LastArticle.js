import React, { useState, useEffect } from 'react'
const axios = require('axios');

function LastArticle() {

  const [title, setTitle] = useState(null);

  useEffect(() => {
    axios.get('https://backend.dev.leandrodamasio.com.br/api/last_article/').then((response) => {
    setTitle(response.data.last_article);
    });
  }, []);


  return (
    <span>
      { title }
    </span>
  )
}

export default LastArticle
