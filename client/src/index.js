import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from './components/App/App'

// Apollo client
const client = new ApolloClient({
    uri: process.env.NODE_ENV === 'production' ? 'https://snippetly.herokuapp.com/api' : 'http://localhost:8000/api'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

registerServiceWorker()
