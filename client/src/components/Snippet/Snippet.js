import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'
import debounce from 'debounce'

import devIcons from '../../icons'
import { GET_SNIPPETS, DELETE_SNIPPET, UPDATE_SNIPPET } from '../../queries'
import './Snippet.css'

class Snippet extends Component {
    constructor(props) {
        super(props)
        this.state = { body: this.props.body }

        // Yuck, need to find a better way than an extra function
        this.updateBodyServer = debounce(this.updateBodyServer, 250)
    }

    updateBodyServer(updateSnippet, variables) {
        updateSnippet(variables)
    }

    handleBodyChange(value, ev, updateSnippet) {
        this.setState({ body: value })
        this.updateBodyServer(updateSnippet, { variables: {_id: this.props._id, body: value }})
    }

    render() {
        let classes = `Snippet ${this.props.language}`
        let iconGen = devIcons[this.props.language] || (() => '')

        return (
            <div className={classes}>
                <h2>{this.props.title}</h2>
                <h3>Language: {this.props.language}</h3>
                {iconGen()}
                <Mutation mutation={UPDATE_SNIPPET}>
                    {updateSnippet => (
                        <AceEditor
                            name="snippetBody"
                            mode={this.props.language}
                            theme="monokai"
                            height="30vh"
                            value={this.state.body}
                            onChange={(value, ev) => this.handleBodyChange(value, ev, updateSnippet)}
                        />
                    )}
                </Mutation>
                <Mutation
                    mutation={DELETE_SNIPPET}
                    update={(cache, { data: deletedSnippet }) => {
                        const { snippets } = cache.readQuery({ query: GET_SNIPPETS })
                        cache.writeQuery({
                            query: GET_SNIPPETS,
                            data: { snippets: snippets.filter(snippet => snippet._id !== this.props._id) }
                        })
                    }}
                >
                    {deleteSnippet => (
                        <button onClick={ () => {
                            deleteSnippet({ variables: { id: this.props._id }})
                        }}>
                            Delete Snippet
                        </button>
                    )}
                </Mutation>
            </div>
        )
    }
}

export default Snippet
