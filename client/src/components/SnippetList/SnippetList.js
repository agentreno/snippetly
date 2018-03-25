import React from 'react'
import Snippet from '../Snippet/Snippet'
import './SnippetList.css'

const SnippetList = ({ snippets }) => (
    <div className="SnippetList">
        {snippets.map(snippet => (
            <Snippet
                key={snippet._id}
                {...snippet}
            />
        ))}
    </div>
)

export default SnippetList
