// Dummy data
const snippets = [
    {
        _id: 1,
        language: 'Javascript',
        title: 'Hello World',
        body: 'console.log("hello world")'
    },
    {
        _id: 2,
        language: 'Python',
        title: 'Hello World',
        body: 'print("hello world")'
    },
]


export function fetchSnippets() {
    // TODO: Replace with real graphql query
    return Promise.resolve(snippets)
}
