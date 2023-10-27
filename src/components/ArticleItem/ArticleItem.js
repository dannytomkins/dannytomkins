import './ArticleItem.css'

const ArticleItem = ({ article }) => {
  return (
    <div className='article'>
      ArticleItem
      <h2>{article.title}</h2>
      <h5>{article.date}</h5>
      <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a>
      <p>{article.body}</p>
    </div>
  )
}

export default ArticleItem
