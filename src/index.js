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

const ClientId = "174814350741-i0bufq6o1ihs9tjjq0ior6ud63oau9ji.apps.googleusercontent.com"

const store = createStore(Reducer, applyMiddleware(ReduxThunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><Router><GoogleOAuthProvider clientId={ClientId}><App /></GoogleOAuthProvider></Router></Provider>);
