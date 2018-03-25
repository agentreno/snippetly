import * as reducers from './reducers'
import * as actions from './actions'

describe('Root reducer', () => {
    it('should create the initial state', () => {
        expect(reducers.rootReducer(undefined, {})).toEqual(reducers.initialState)
    })

    it('should return unmodified state for unknown actions', () => {
        expect(reducers.rootReducer(reducers.initialState, { type: 'UNKNOWN' })).toEqual(
          reducers.initialState
        )
    })
})

describe('Snippets reducer', () => {
    it('should add snippets to the state on FETCH_SNIPPETS_SUCCESS', () => {
        const testSnippets = [
            {
                _id: 1,
                language: 'Javascript',
                title: 'Hello World',
                body: 'console.log("hello world")'
            }
        ]

        expect(
            reducers.snippetsReducer(
                { snippets: [] },
                { type: actions.FETCH_SNIPPETS_SUCCESS, snippets: testSnippets }
            ).snippets
        ).toEqual(testSnippets)
    })
})
