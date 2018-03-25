import * as actions from './actions'

export const initialState = {
  snippets: []
}

// Snippets reducer
export function snippetsReducer(state = initialState, action) {
    switch(action.type) {
        case actions.FETCH_SNIPPETS_REQUEST:
            // TODO: introduce some loading state and set it here
            return state

        case actions.FETCH_SNIPPETS_SUCCESS:
            // Overwrites local snippets state
            return Object.assign({}, state, { snippets: action.snippets })

        default:
            return state
    }
}

// Combine reducers here when there is more than one
export const rootReducer = snippetsReducer

export default rootReducer
