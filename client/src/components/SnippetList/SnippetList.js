import React from 'react'
import Carousel3D from 'react-3d-carousel'
import Snippet from '../Snippet/Snippet'
import './SnippetList.css'

class SnippetList extends React.Component {
    render() {
        return (
            <div className="SnippetList">
                <Carousel3D
                    panelWidth={600}
                    panelHeight={500}
                    borderSize={0}
                    panelRenderers={
                        this.props.snippets.map(snippet => () => (
                            <Snippet
                                key={snippet._id}
                                {...snippet}
                            />
                        ))
                    }
                />
            </div>
        )
    }
}

export default SnippetList
