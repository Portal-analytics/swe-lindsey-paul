import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD3XDgmaLIprlRAiyadqhkDwfaHQw3edV0",
    authDomain: "morningchallenge-a4b7e.firebaseapp.com",
    databaseURL: "https://morningchallenge-a4b7e.firebaseio.com",
    projectId: "morningchallenge-a4b7e",
    storageBucket: "morningchallenge-a4b7e.appspot.com",
    messagingSenderId: "584523407784"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
