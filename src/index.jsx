import React from 'react'
import ReactDOM from 'react-dom/client'
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'
import App from './components/App/App'

import './index.scss'

const store = createStore(
  reducer,
  // eslint-disable-next-line max-len, comma-dangle
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (
  <Provider store={store}>
    <App />
  </Provider>
)
root.render(element)
