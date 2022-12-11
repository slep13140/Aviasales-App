import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'
import App from './components/App/App'

import './index.scss'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (
  <Provider store={store}>
    <App />
  </Provider>
)
root.render(element)
