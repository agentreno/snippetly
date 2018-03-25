import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import App from './App'

const mockStore = configureMockStore([thunk])
const store = mockStore({ snippets: [] })

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render((
        <Provider store={store}>
            <App />
        </Provider>
    ), div)
    ReactDOM.unmountComponentAtNode(div)
})
