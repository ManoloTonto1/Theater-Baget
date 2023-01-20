import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	HashRouter 
} from 'react-router-dom';
import App from './App';
import {
	UserProvider 
} from './context/UserContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<UserProvider>
		<HashRouter>
			<App />
		</HashRouter>
	</UserProvider>
	// </React.StrictMode>
);
