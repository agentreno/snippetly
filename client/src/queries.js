import gql from 'graphql-tag'

export const GET_SNIPPETS = gql`
    query GetSnippets {
        snippets {
            _id,
            language,
            title,
            body
        }
    }
`

export const DELETE_SNIPPET = gql`
    mutation DeleteSnippet($id: String!) {
        deleteSnippet(_id: $id) {
            _id,
            title
        }
    }
`

export const ADD_SNIPPET = gql`
    mutation AddSnippet($language: String!, $title: String!, $body: String!) {
        addSnippet(language: $language, title: $title, body: $body) {
            _id,
            language,
            title,
            body
        }
    }
`
