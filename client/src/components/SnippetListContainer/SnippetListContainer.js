import React from 'react'
import { Query } from 'react-apollo'

import SnippetList from '../SnippetList/SnippetList'
import { GET_SNIPPETS } from '../../queries'

const SnippetListContainer = () => (
    <Query query={GET_SNIPPETS}>
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
