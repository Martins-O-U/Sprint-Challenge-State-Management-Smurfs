import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { reducer, dataReducer } from './components/states/reducer'

// const monsterReducer = combineReducers({
//     // the key is the real name for the slice of state
//     reducer: reducer,
//     dataReducer: dataReducer,
//   });

  
// // feed the createStore the combined reducer (5)
// // THERE ARE MANY WAYS TO CREATE A STORE. SEE DOCS!
// const store = createStore(
//     monsterReducer,
//     {},
//     compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     ),
//   );

const store =  createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
