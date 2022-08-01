import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

const ClientId = "570792465858-93iau202tjqiu6dudqdvghaf718cjqsb.apps.googleusercontent.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router><GoogleOAuthProvider clientId={ClientId}><App /></GoogleOAuthProvider></Router>);
