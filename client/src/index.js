import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from './components/App/App'

// Apollo client
const client = new ApolloClient({
    uri: 'https://snippetly.herokuapp.com/api'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

registerServiceWorker()
