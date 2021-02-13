import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import { appStore } from './store/appStore';
import { StoreContext } from './store/StoreContext';

const store = new appStore();
ReactDom.render(
  <StoreContext.Provider value={ store }>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);