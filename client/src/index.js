import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from './components/App/App'
import rootReducer from './reducers'
import { fetchSnippets } from './actions'

// Create store and fetch data immediately
const loggerMiddleware = createLogger()
let store = createStore(
    rootReducer,
    applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    )
)
store.dispatch(fetchSnippets())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
