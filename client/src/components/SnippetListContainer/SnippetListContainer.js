import { connect } from 'react-redux'

import SnippetList from '../SnippetList/SnippetList'

const mapStateToProps = state => ({
    snippets: state.snippets
})

// No mapDispatchToProps yet, no actions fired from UI yet

const SnippetListContainer = connect(
    mapStateToProps
)(SnippetList)

export default SnippetListContainer
