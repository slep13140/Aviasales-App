/* eslint-disable no-underscore-dangle */
import React from 'react'
import ReactDOM from 'react-dom/client'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer from './store/reducer'
import { App } from './components/App'

import './index.scss'

const a = typeof window === 'object'
const b = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancers = a && b ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, enhancer)

const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (
  <Provider store={store}>
    <App />
  </Provider>
)
root.render(element)
