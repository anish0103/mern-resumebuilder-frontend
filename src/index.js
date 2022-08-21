import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import './index.css';
import App from './App';
import Reducer from './store/reducer/reducer';

const ClientId = process.env.REACT_APP_GOOGLEID

const store = createStore(Reducer, applyMiddleware(ReduxThunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><Router><GoogleOAuthProvider clientId={ClientId}><App /></GoogleOAuthProvider></Router></Provider>);
