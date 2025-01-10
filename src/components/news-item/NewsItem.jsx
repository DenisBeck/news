import React, { useState, useReducer } from 'react';
import { useDispatch } from 'react-redux';

import classes from './NewsItem.module.scss';
import Modal from '../modal';
import Form from '../form';
import { deleteNewsItem } from '../../redux/slice/NewsSlice';

const NewsItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
	const { id, title, body } = item;
	const dispatch = useDispatch();
	const deleteItem = (id) => {
		dispatch(deleteNewsItem({ id }))
	}
	
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
		<>
			<h3 className={classes.header}>{title}</h3>
			<p className={classes.body}>{body}</p>
			<div className={classes.buttons}>
				<button className={classes.delete} type='button' onClick={() => deleteItem(id)}>DELETE</button>
				<button className={classes.edit} type='button' onClick={() => setIsOpen(true)}>EDIT</button>
			</div>

			<Modal closeModal={closeModal} isOpen={isOpen}>
        <Form dispatch={dispatch} closeModal={closeModal} item={item} />
      </Modal>
		</>
	);
}

export default NewsItem;