import React from 'react'
import { Mutation } from 'react-apollo'

import { GET_SNIPPETS, ADD_SNIPPET } from '../../queries'
import './CreateSnippet.css'

const CreateSnippet = () => {
    let languageInput = ''
    let titleInput = ''
    let bodyInput = ''

    return (
        <Mutation
            mutation={ADD_SNIPPET}
            update={(cache, { data: { addSnippet } }) => {
                const { snippets } = cache.readQuery({ query: GET_SNIPPETS })
                cache.writeQuery({
                    query: GET_SNIPPETS,
                    data: { snippets: snippets.concat([addSnippet]) }
                })
            }}
        >
            {addSnippet => (
                <div className="createSnippet">
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            addSnippet({ variables: {
                                language: languageInput.value,
                                title: titleInput.value,
                                body: bodyInput.value
                            }})
                            languageInput.value = ''
                            titleInput.value = ''
                            bodyInput.value = ''
                        }}
                    >
                        <ul className="formFields">
                            <li>
                                <label htmlFor="language">Language:</label>
                                <input id="language" ref={node => {languageInput = node}} />
                            </li>

                            <li>
                                <label htmlFor="title">Title:</label>
                                <input id="title" ref={node => {titleInput = node}} />
                            </li>

                            <li>
                                <label htmlFor="body">Body:</label>
                                <input id="body" ref={node => {bodyInput = node}} />
                            </li>

                            <li>
                                <button type="submit">Add Snippet</button>
                            </li>
                        </ul>
                    </form>
                </div>
            )}
        </Mutation>
    )
}

export default CreateSnippet
