import LastArticle from './blog/LastArticle'

function KnowMyBlog() {

  return (
    <div>
      <h2> Artigos</h2>
      <p>Conheça o meu&nbsp;
        <a
          className="App-link"
          href="blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </p>
      <p>
        Último artigo: <LastArticle />
      </p>
    </div>
  )
}

export default KnowMyBlog
