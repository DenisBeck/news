import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '/src/App';
import { store } from '/src/redux/store';


const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
