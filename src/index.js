import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/HomePage/HomePage'
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './store/store';
// import HomePage from './components/HomePage/HomePage';

console.log(store);

const stateStore = store.configureStore();


ReactDOM.render(
    <Provider store={stateStore}>
        <App />
<<<<<<< HEAD
=======
        {/* <HomePage /> */}
>>>>>>> 257e213b58f375e102203d08e1ee99a7f4dc629b
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
