import * as api from './api'

// Action creators
export const FETCH_SNIPPETS_REQUEST = 'FETCH_SNIPPETS_REQUEST'
export function fetchSnippets() {
    return dispatch => {
        dispatch({ type: FETCH_SNIPPETS_REQUEST })
        return api.fetchSnippets()
            .then(data => dispatch(receiveSnippets(data)))
    }
}

export const FETCH_SNIPPETS_SUCCESS = 'FETCH_SNIPPETS_SUCCESS'
export function receiveSnippets(data) {
    return {
        type: FETCH_SNIPPETS_SUCCESS,
        snippets: data
    }
}
