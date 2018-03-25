import React from 'react'

import './Snippet.css'

const Snippet = ({ _id, language, title, body }) => (
    <div className="snippet">
        <h2>{title}</h2>
        <h3>Language: {language}</h3>
        <textarea rows="10" cols="80">{body}</textarea>
    </div>
)

export default Snippet
