var express = require('express')
var graphqlHTTP = require('express-graphql')
var { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Snippet {
        id: Int!
        language: String
        title: String
        body: String
    }

    type Query {
        snippets: [Snippet]
    }
`

// Dummy data
const snippets = [
    {
        id: 1,
        language: 'Javascript',
        title: 'Hello World',
        body: 'console.log("hello world")'
    },
    {
        id: 2,
        language: 'Python',
        title: 'Hello World',
        body: 'print("hello world")'
    },
]

// Snippet resolver
const resolvers = {
    Query: {
        snippets: () => snippets,
    },
}


// Combine schema and resolvers
var executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

var routeHandler = graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
})

module.exports = routeHandler
