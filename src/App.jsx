import React, { useEffect, useState, useReducer } from 'react';

import './App.scss';
import NewsList from './components/news-list';
import AddNewsItem from './components/add-news-item';
import { useSelector } from 'react-redux';

const App = () => {
  const news = useSelector(state => state.news);

  return (
    <>
      <AddNewsItem />
      {
        news?.length > 0 ? 
        <NewsList news={news}/> :
        <p className='empty'>There is no news yet</p>
      }
    </>
  )
}

export default App;