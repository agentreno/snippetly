import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as actions from './actions'
import * as api from './api'

const mockSnippetsResponse = [
    {
        _id: 1,
        language: 'Javascript',
        title: 'Hello World',
        body: 'console.log("hello world")'
    },
    {
        _id: 2,
        language: 'Python',
        title: 'Hello World',
        body: 'print("hello world")'
    },
]

jest.mock('./api', () => ({
    fetchSnippets: jest.fn(
        () => Promise.resolve(mockSnippetsResponse)
    )
}))

// FETCH_SNIPPETS_REQUEST
describe('fetchSnippets', () => {
    it('should dispatch FETCH_SNIPPETS_REQUEST', () => {
        // Setup mocks
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore({ snippets: [] })

        // Run and assert
        const expectedActions = [
            { type: actions.FETCH_SNIPPETS_REQUEST },
            {
                type: actions.FETCH_SNIPPETS_SUCCESS,
                snippets: JSON.parse(JSON.stringify(mockSnippetsResponse))
            }
        ]
        return store.dispatch(actions.fetchSnippets()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
