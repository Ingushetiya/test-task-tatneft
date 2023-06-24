import React from 'react';
import styles from './assets/styles/app.module.scss';
import ArticleList from './components/ArticleList';
import AddArticleForm from './pages/AddArticleForm';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="addTodo" element={<AddArticleForm />} />
        <Route path="addTodo/:id" element={<AddArticleForm />} />
      </Routes>
    </div>
  );
};

export default App;
