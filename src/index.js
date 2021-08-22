import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';

import thunk from 'redux-thunk';

import { 
  requestUserData,
  inputLoginDetails,
  submitRegisterDetails,
  inputRegisterDetails
} from './redux/reducers';

import './index.css';
import App from './App';

const logger = createLogger();
const rootReducer = combineReducers({
  requestUserData,
  inputLoginDetails,
  inputRegisterDetails,
  submitRegisterDetails
});

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('linguo-state', serializedState);
  } catch {
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('linguo-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, logger)
)

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);