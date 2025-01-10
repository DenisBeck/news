import React from 'react';

import NewsItem from "../news-item";
import classes from './NewsList.module.scss';

const NewsList = ({ news }) => {
  return (
    <ul className={classes.list}>
      {
        news.map(item => (<li className={classes.item} key={item.id}>
          <NewsItem item={item} />
        </li>))
      }
    </ul>
  ) 
}

export default NewsList;