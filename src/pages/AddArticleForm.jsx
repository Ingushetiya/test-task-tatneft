import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../assets/styles/articleForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToDoList, changeTodoList } from '../redux/slice/article';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ARTICLE_SLICE_STATE } from '../components/selector.constants';

const AddArticleForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector(ARTICLE_SLICE_STATE);
  const getTodo = todoList.find((el) => String(el.id) === params.id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: getTodo ? getTodo.title : '',
      text: getTodo ? getTodo.text : '',
      theme: getTodo ? getTodo.theme : '',
      author: 'Timur',
    },
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    if (getTodo) {
      const newTodo = { ...getTodo, title: data.title, text: data.text, theme: data.theme };
      const changeTodo = todoList.map((item) => {
        if (item.id === params.id) {
          return newTodo;
        }
        return item;
      });
      dispatch(changeTodoList(changeTodo));
    } else {
      const getTodoList = [
        ...todoList,
        { ...data, id: String(todoList.length + 1), date: new Date().toLocaleString() },
      ];
      dispatch(addToDoList(getTodoList));
      reset();
    }
    navigate('/');
  };

  return (
    <div className={styles.articleForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          helperText={errors.theme?.message}
          error={Boolean(errors.theme?.message)}
          {...register('theme', { required: 'Напишите тему' })}
          className={styles.theme}
          id="outlined-basic"
          label="Тема"
          variant="outlined"
        />
        <TextField
          className={styles.title}
          helperText={errors.title?.message}
          error={Boolean(errors.title?.message)}
          {...register('title', { required: 'Укажите заголовок статьи' })}
          id="outlined-basic"
          label="Заголовок"
          variant="outlined"
        />

        <TextField
          {...register('text', { required: 'Поле текст не должно быть пустым' })}
          error={Boolean(errors.text?.message)}
          helperText={errors.text?.message}
          className={styles.text}
          id="outlined-multiline-static"
          label="Текс"
          multiline
          rows={4}
          defaultValue="Default Value"
        />

        <TextField
          defaultValue={'Timur'}
          className={styles.author}
          id="outlined-basic"
          label="Автор"
          variant="outlined"
        />
        <div className={styles.btn}>
          <Link to={'/'}>
            <Button className={styles.btnMain} variant="contained">
              На главную
            </Button>
          </Link>

          <Button className={styles.add} type="submit" variant="contained" color="success">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddArticleForm;
