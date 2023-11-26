import React, { useRef } from 'react';
import './ArticleItem.css';

const ArticleItem = ({ article }) => {
  const articleRef = useRef(null);

  const backgroundStyle = {
    background: `url(${article.img}) center/cover no-repeat`,
  };

  const bodyStyle = {
    marginBottom: "10px"
  }

  const renderBodyWithLineBreaks = () => {
    return article.body.split('\n').map((paragraph, index) => (
      <p key={index} style={bodyStyle}>{paragraph}</p>
    ));
  };

  return (
    <div className='article' ref={articleRef} style={backgroundStyle}>
      <div className='text-overlay'>
        <h2>{article.title}</h2>
        <h5>{article.date}</h5>
        <br />
        <a href={article.url} target='_blank' rel='noopener noreferrer'>
          {article.url}
        </a>
        <br />
        <br />
        {renderBodyWithLineBreaks()}
      </div>
    </div>
  );
};

export default ArticleItem;
