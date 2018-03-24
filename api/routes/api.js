var express = require('express')
var mongoose = require('mongoose')
var graphqlHTTP = require('express-graphql')
var { makeExecutableSchema } = require('graphql-tools')

// Database
const snippetModel = mongoose.model('Snippet', {
    _id: mongoose.Schema.Types.ObjectId,
    language: String,
    title: String,
    body: String
})

const typeDefs = `
    type Snippet {
        _id: String!
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
        snippets: () => {
            var snippets = new Promise((resolve, reject) => {
                snippetModel.find({}, (err, snippets) => {
                    err ? reject(err) : resolve(snippets)
                })
            })
            return snippets
        }
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
