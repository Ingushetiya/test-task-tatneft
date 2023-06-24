import React, { useState } from 'react';
import Article from './Article';
import styles from '../assets/styles/articleList.module.scss';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ARTICLE_SLICE_STATE } from './selector.constants';

const ArticleList = () => {
  const [search, setSearch] = useState('');

  const articles = useSelector(ARTICLE_SLICE_STATE);

  const searchArticle = articles.filter((article) => {
    const { title, theme } = article;
    const searchRegex = new RegExp(search, 'i');
    return searchRegex.test(title) || searchRegex.test(theme);
  });

  return (
    <>
      <div className={styles.articleList}>
        <h3>Поиск по теме и заголовку</h3>

        <input
          className={styles.search}
          type="search"
          placeholder="Поиск"
          onChange={(event) => setSearch(event.target.value)}
        />

        <h2>Список статей</h2>

        {searchArticle?.map((article) => (
          <Article key={article.id} {...article} />
        ))}
        <Link to={'/addTodo'}>
          <Button className={styles.addArticle} variant="contained" color="secondary">
            {' '}
            Добавить статью
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ArticleList;
