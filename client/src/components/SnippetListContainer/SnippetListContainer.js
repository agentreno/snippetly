import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import SnippetList from '../SnippetList/SnippetList'

const snippetsQuery = gql`
    {
        snippets {
            _id,
            language,
            title,
            body
        }
    }
`

const SnippetListContainer = () => (
    <Query query={snippetsQuery}>
        {
            ({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error</p>

                return <SnippetList snippets={data.snippets} />
            }
        }
    </Query>
)

export default SnippetListContainer
