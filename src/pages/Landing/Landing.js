import React from 'react';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import { articleData } from '../../data/articleData';
import './Landing.css'

const Landing = () => {
  const reversedArticleData = [...articleData].reverse();

  return (
    <>
        <h1>
          hello world Landing
        </h1>
        <div className="container">
        {reversedArticleData.map((article, index) => (
          <ArticleItem key={index} article={article} />
        ))}
        </div>
    </>
  );
};

export default Landing;
