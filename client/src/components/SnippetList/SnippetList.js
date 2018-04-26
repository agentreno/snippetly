import React from 'react'
import Carousel3D from 'react-3d-carousel'
import Snippet from '../Snippet/Snippet'
import './SnippetList.css'

const SnippetList = ({ snippets }) => (
    <div className="SnippetList">
        <Carousel3D
            panelWidth={600}
            panelHeight={500}
            panelRenderers={
                snippets.map(snippet => () => (
                    <Snippet
                        key={snippet._id}
                        {...snippet}
                    />
                ))
            }
        />
    </div>
)

export default SnippetList
