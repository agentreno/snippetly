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

    type Mutation {
        deleteSnippet(_id: String!): Snippet
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`

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
    Mutation: {
        deleteSnippet: (_, _id) => {
            return snippetModel.findById(_id).then(snippet => snippet.remove())
        }
    }
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
