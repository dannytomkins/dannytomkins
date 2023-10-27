import React from 'react';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import { articleData } from '../../data/articleData';
import './Landing.css'

const Landing = () => {
  return (
    <>
        <h1>
          helo worl Landing
        </h1>
        <container>
        {articleData.map((article, index) => (
        <ArticleItem key={index} article={article} />
        ))}
        </container>
    </>
  );
};

export default Landing;
