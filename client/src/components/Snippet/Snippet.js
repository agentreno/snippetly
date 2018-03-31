import React from 'react'
import { Mutation } from 'react-apollo'

import { GET_SNIPPETS, DELETE_SNIPPET } from '../../queries'
import './Snippet.css'

const Snippet = ({ _id, language, title, body }) => (
    <div className="snippet">
        <h2>{title}</h2>
        <h3>Language: {language}</h3>
        <textarea rows="10" cols="80" value={body} readOnly />
        <Mutation
            mutation={DELETE_SNIPPET}
            update={(cache, { data: deletedSnippet }) => {
                const { snippets } = cache.readQuery({ query: GET_SNIPPETS })
                cache.writeQuery({
                    query: GET_SNIPPETS,
                    data: { snippets: snippets.filter(snippet => snippet._id !== _id) }
                })
            }}
        >
            {(deleteSnippet, { data }) => (
                <button onClick={ () => {
                    deleteSnippet({ variables: { id: _id }})
                }}>
                    Delete Snippet
                </button>
            )}
        </Mutation>
    </div>
)

export default Snippet
