import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter} from 'react-router-dom';
import App from './components/App'

const root = createRoot(document.querySelector('#root'));
root.render(<HashRouter><Provider store={ store }><App /></Provider></HashRouter>);