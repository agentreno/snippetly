import gql from 'graphql-tag'

export const GET_SNIPPETS = gql`
    {
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

