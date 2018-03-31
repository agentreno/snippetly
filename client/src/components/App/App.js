import React from 'react'

import SnippetListContainer from '../SnippetListContainer/SnippetListContainer'
import CreateSnippet from '../CreateSnippet/CreateSnippet'
import './App.css'

const App = () => (
    <div className="App">
        <SnippetListContainer />
        <CreateSnippet />
    </div>
)
    

export default App
