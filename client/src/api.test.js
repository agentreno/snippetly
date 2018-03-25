import * as api from './api'

describe('fetchSnippets', () => {
    it('should return a resolving Promise with a list of objects', () => {
        // TODO: Mock the network when the unit starts making graphql calls
        return api.fetchSnippets().then(snippets => {
            expect(Array.isArray(snippets)).toEqual(true)
            expect(snippets.length > 0).toEqual(true)
        })
    })

    xit('should make a request to the API for snippets', () => {
        // TODO: Implement when the unit has network functionality
    })
})
