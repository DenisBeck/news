import React, { useState, useReducer } from 'react';

import classes from './AddNewsItem.module.scss';
import Modal from '../modal';
import Form from '../form';
import { useDispatch } from 'react-redux';

const AddNewsItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className={classes.add} type="button" onClick={() => setIsOpen(true)} >ADD NEWS</button>

      <Modal closeModal={closeModal} isOpen={isOpen}>
        <Form dispatch={dispatch} closeModal={closeModal} />
      </Modal>
    </>
  )
}

export default AddNewsItem;