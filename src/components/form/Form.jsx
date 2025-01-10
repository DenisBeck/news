import React from 'react';

import classes from './Form.module.scss';
import Input from '../Input';
import { addNewsItem, updateNewsItem } from '../../redux/slice/NewsSlice';

const Form = ({ dispatch, closeModal, item }) => {

  const addItem = (e) => {
    e.preventDefault();
    const newsItem = {};
    const formData = new FormData(e.target)
    for (let v of formData.entries()) {
      newsItem[v[0]] = v[1];
    }
    if (item) {
      newsItem.id = item.id;
      dispatch(updateNewsItem(newsItem));
    } else {
      dispatch(addNewsItem(newsItem))
    }
    closeModal()
  }

  return (
    <form onSubmit={addItem} className={classes.form}>
      <Input label='Title' value={item ? item.title : ''} name='title' />
      <Input label='Content' value={item ? item.body : ''} name='body' />
      <button className={classes.submit} type='submit'>{item ? 'Change' : 'Add'}</button>
    </form>
  )
}

export default Form;