import { createSlice } from "@reduxjs/toolkit";

export const LOCALSTORAGE_NEWS_LIST = 'news';

export const getAllNews = () => {
	return JSON.parse(localStorage.getItem(LOCALSTORAGE_NEWS_LIST)) || [];
};

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: getAllNews(),
  },
  reducers: {
    addNewsItem(state, action) {
      const id = parseInt(Math.random() * 1000000);
			const news = getAllNews();
			news.push({ id, title: action.payload.title, body: action.payload.body });
			localStorage.setItem(LOCALSTORAGE_NEWS_LIST, JSON.stringify(news));
			return { ...state, news };
    },
    updateNewsItem(state, action) {
      const news = getAllNews();
			for (let item of news) {
				if (item.id === action.payload.id) {
					item.title = action.payload.title;
					item.body = action.payload.body;
					break;
				}
			}
			localStorage.setItem(LOCALSTORAGE_NEWS_LIST, JSON.stringify(news));
      return { ...state, news };
    },
    deleteNewsItem(state, action) {
      const news = getAllNews().filter((item) => item.id !== action.payload.id);
			localStorage.setItem(LOCALSTORAGE_NEWS_LIST, JSON.stringify(news));
      return {...state, news}
    }
  }
})

export const { addNewsItem, updateNewsItem, deleteNewsItem } = newsSlice.actions;
export default newsSlice.reducer;