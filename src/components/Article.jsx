import React from 'react';
import styles from '../assets/styles/article.module.scss';
// import EditSvg from './icons/EditSvg';
import { Fab, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteToDoList } from '../redux/slice/article';
import { useDispatch, useSelector } from 'react-redux';
import { ARTICLE_SLICE_STATE } from './selector.constants';
import { Link } from 'react-router-dom';

const Article = (article) => {
  const dispatch = useDispatch();
  const list = useSelector(ARTICLE_SLICE_STATE);

  const hundleDeleteToDo = (id) => {
    const modifiedList = list.filter((el) => el.id !== id);
    dispatch(deleteToDoList(modifiedList));
  };

  return (
    <div className={styles.articleList}>
      <div className={styles.article}>
        <p>{article.title}</p>
        <div className={styles.icons}>
          <Link to={`/addTodo/${article.id}`}>
            <Fab className={styles.editIcon} color="secondary" aria-label="edit">
              <EditIcon className={styles.icon} />
            </Fab>
          </Link>

          <IconButton onClick={() => hundleDeleteToDo(article.id)} aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Article;
